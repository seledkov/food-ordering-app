import React, { useContext } from 'react';
import AuthContext from '../store/auth-context';
import './HeaderCart.css';
import CartIcon from './CartIcon';

const HeaderCart = (props: any) => {
  const ctx = useContext(AuthContext);
  const numberOfCartItems = ctx.cartList.reduce(
    (currentAmount: any, item: any) => {
      return currentAmount + item.amount;
    },
    0,
  );
  return (
    <button className='cart-button' onClick={ctx.openModalCart}>
      <span className='cart-button__icon'>
        <CartIcon />{' '}
      </span>
      <span>Your Cart</span>
      <span className='cart-button__badge'> {numberOfCartItems}</span>{' '}
    </button>
  );
};
export default HeaderCart;
