import React, { useContext } from 'react';
import AuthContext from '../store/auth-context';
import Button from '../UI/Button';
import './FoodItem.scss';
import FoodItemForm from './FoodItemForm';

const FoodItem = (props: any) => {
  return (
    <li className='food-item'>
      <div>
        <h3>{props.name}</h3>
        <div className='food-item__description'>{props.description} </div>
        <div className='food-item__price'>${props.price}</div>
      </div>
      <div>
        <FoodItemForm {...props} />
      </div>
    </li>
  );
};
export default FoodItem;
