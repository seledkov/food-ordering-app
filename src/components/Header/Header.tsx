import React from 'react';
import Cart from '../Cart/Cart';
import './Header.scss';
const Header = (props: any) => {
  return (
    <div className='header'>
      <div className='header__title'>Food Order</div>
      <Cart clasName='header__card' />
    </div>
  );
};

export default Header;
