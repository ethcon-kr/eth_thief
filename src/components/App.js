import React, { Component } from 'react';
import PageTemplate from './PageTemplate';
import TeamList from './TeamList';
import accounts from '../accounts.json';
import Web3 from 'web3';

const web3 = new Web3(Web3.givenProvider || "http://localhost:8545");

class App extends Component {
  state = {
    teams : accounts
  }

  componentWillMount() {
    this.updateBalance();
  }

  componentDidMount(){
    setInterval( () => this.updateBalance(), 3000);
  }


  updateBalance = () => {
    var promiseArray = [];
    accounts.map( (account) => {
      const getAccountBalance = web3.eth.getBalance(account.address, (err, wei) => {
        const balance = web3.utils.fromWei(wei, 'ether');
        account.point = balance;
      })
    	return promiseArray.push(getAccountBalance);
    });

    Promise.all(promiseArray).then(result => {
      accounts.sort((a, b) => (parseFloat(b.point) - parseFloat(a.point)));
      //accounts.sort((a, b) => (parseFloat(a.point) < parseFloat(b.point)) ? 1 : -1);

      let rank = 1;
      let depth = 1;
      accounts[0].rank = 1;
      for(let i=1; i<accounts.length; i++){
        if(parseFloat(accounts[i-1].point) === parseFloat(accounts[i].point)){
          accounts[i].rank = rank;
          depth++;
        }else{
          rank = rank + depth;
          accounts[i].rank = rank;
          depth = 1;
        }
      }

      this.setState({ teams : accounts });
    });
  }

  render() {
    const { teams } = this.state;

    return(
      <PageTemplate>
        <TeamList teams={teams}/>
      </PageTemplate>
    )
  }
}



export default App
