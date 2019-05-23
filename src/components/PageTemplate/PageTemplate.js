import React from 'react';
import styles from './PageTemplate.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const PageTemplate = ({children}) => {
  return (
    <div className={cx('Leaderboard')}>
      <h1>이더 도둑 챌린지</h1>
      <div className={cx('leaders')}>
        {children}
      </div>
    </div>
  );
}

export default PageTemplate;
