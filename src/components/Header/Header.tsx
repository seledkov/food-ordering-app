import React, { Fragment } from 'react';
import HeaderCart from './HeaderCart';
import './Header.scss';
import foods from '../../assets/meals.jpg';

const Header = (props: any) => {
  return (
    <Fragment>
      <header className='header'>
        <h1>Food Order</h1>
        <HeaderCart clasName='header__card' />
      </header>
      <div className='header__main-image'>
        <img src={foods} alt='tasty foods' />
      </div>
    </Fragment>
  );
};

export default Header;
