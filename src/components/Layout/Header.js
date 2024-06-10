import React from 'react';
import HeaderCartButton from './HeaderCartButton'; // Note the corrected import name
import classes from './Header.module.css';

const Header = () => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton />
      </header>
      <div className={classes['main-image']}>
        <img
          src='https://tse2.mm.bing.net/th?id=OIP.aICzEfrqd9ilrvgIfNb5mAHaD4&pid=Api&P=0&h=180'
          alt='delicious food'
        />
      </div>
    </React.Fragment>
  );
};

export default Header;
