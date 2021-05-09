import React, { useContext } from 'react';
import AuthContext from '../store/auth-context';
import './Cart.css';

const Cart = (props: any) => {
  const ctx = useContext(AuthContext);

  return (
    <div className='cart__wrapper'>
      <button>
        img Your Cart <span className='cart__alt'> {ctx.cartList.length}</span>{' '}
      </button>
    </div>
  );
};
export default Cart;
