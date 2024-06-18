import './Header.css';
import React from 'react';

const Header = (props) => {
  return (
    <div className="header">
      <div>
        <h1>ReactMeals</h1>
      </div>
      <div>
        <button className='button' type='button' onClick={props.onShow}>
          <div>Your Cart</div>
          <div className='cart-count'>0</div>
        </button>
      </div>
    </div>
  );
}

export default Header;
