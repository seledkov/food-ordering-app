import React, { useContext } from 'react';
import AuthContext from '../store/auth-context';
import './HeaderCart.css';
import CartIcon from './CartIcon';
import { IFoodItem } from '../../interface';

const HeaderCart = (props: any) => {
  const ctx = useContext(AuthContext);
  const numberOfCartItems = ctx.cartListState.reduce((currentAmount: number, item: IFoodItem) => {
    return currentAmount + item.amount;
  }, 0);

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
