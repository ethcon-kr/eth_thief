import React, { Component } from 'react';
import TeamItem from '../TeamItem';

class TeamList extends Component {


  render() {
    const { teams } = this.props;

    let colors = [
    	'#FFB900',
    	'#69797E',
    	'#847545',
    	'#E74856',
    	'#0078D7',
    	'#0099BC',
    	'#7A7574',
    	'#767676',
    	'#FF8C00',
    	'#E81123',
    	'#0063B1',
    	'#2D7D9A',
    	'#5D5A58',
    	'#4C4A48',
    	'#F7630C',
    	'#EA005E',
    	'#8E8CD8',
    	'#00B7C3',
    	'#68768A',
    	'#CA5010'
    ];

    const max = Math.max.apply(Math, teams.map(function(o) { return o.point; }));
    const teamList = teams.map(
      team => (
        <TeamItem key={team.id} max={max} color={colors[team.rank-1]}>
          {team}
        </TeamItem>
      )
    )

    return (
      <div>
        {teamList}
      </div>
    );
  }

}

export default TeamList;
