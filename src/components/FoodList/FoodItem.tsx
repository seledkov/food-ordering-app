import React, { useContext } from 'react';
import AuthContext from '../store/auth-context';
import Button from '../UI/Button';
import './FoodItem.scss';
import FoodItemForm from './FoodItemForm';

const FoodItem = (props: any) => {
  const ctx = useContext(AuthContext);
  const addFoodHandler = (id: number | string) => {
    console.log('add food');

    ctx.onAddCartList({
      id: props.id,
      name: props.name,
      decription: props.decription,
      price: props.price,
    });

    console.log(ctx.cartList);
  };
  return (
    <li className='food-item'>
      <div>
        <h3>{props.name}</h3>
        <div className='food-item__description'>{props.decription} </div>
        <div className='food-item__price'>${props.price.toFixed(2)}</div>
      </div>
      <div>
        <FoodItemForm onClick={addFoodHandler} />
      </div>
    </li>
  );
};
export default FoodItem;
