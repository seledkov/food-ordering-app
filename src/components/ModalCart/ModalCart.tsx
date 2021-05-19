import React, { useContext, useReducer } from 'react';
import { IFoodItem } from '../../interface';
import AuthContext from '../store/auth-context';
import './ModalCart.scss';
import ModalCartFoodItem from './ModalCartFoodItem';
const ModalCart = (props: any) => {
  const ctx = useContext(AuthContext);
  const hasItems: boolean = ctx.cartListState.length > 0;

  const cartItemAddHandler = (item: {}) => {
    ctx.onAddCartList({ ...item, amount: 1 });
  };
  const cartItemRemoveHandler = (id: number) => {
    ctx.onDeleteCartItem(id);
  };
  return (
    <React.Fragment>
      <div className='modal-cart'>
        <ul className='modal-cart__items'>
          {ctx.cartListState.map((item: IFoodItem) => {
            return (
              <ModalCartFoodItem
                name={item.name}
                key={item.name}
                price={item.price}
                amount={item.amount}
                onRemove={cartItemRemoveHandler.bind(null, item.id)}
                onAdd={cartItemAddHandler.bind(null, item)}
              />
            );
          })}
        </ul>
        <div className='modal-cart__total'>
          <span>total amount: </span>
          <span>${ctx.totalAmount.toFixed(2)} </span>
        </div>
        <div className='modal-cart__actions'>
          <button className='modal-cart__button--alt' onClick={ctx.closeModalCart}>
            close
          </button>
          {hasItems && <button className='modal-cart__button'>order</button>}
        </div>
      </div>
    </React.Fragment>
  );
};

export default ModalCart;
