import React, { useContext, useReducer } from 'react';
import AuthContext from '../store/auth-context';
import './ModalCart.scss';
const ModalCart = (props: any) => {
  const ctx = useContext(AuthContext);

  return (
    <React.Fragment>
      <div className='modal-cart'>
        <ul className='modal-cart__items'>
          {ctx.cartListState.map((item: any, index: number) => {
            return (
              <li className='modal-cart__item' key={index}>
                <div>
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p> amount: {item.amount}</p>
                </div>
                <div>
                  <button> - </button> <button> + </button>
                </div>
              </li>
            );
          })}
        </ul>
        <div className='modal-cart__total'>
          <span>total amount: </span>
          <span>{ctx.totalAmount} </span>
        </div>
        <div className='modal-cart__actions'>
          <button
            className='modal-cart__button--alt'
            onClick={ctx.closeModalCart}>
            close
          </button>
          <button className='modal-cart__button'>order</button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ModalCart;
