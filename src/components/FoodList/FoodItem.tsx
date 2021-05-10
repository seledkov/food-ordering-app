import React, { useContext } from 'react';
import AuthContext from '../store/auth-context';
import Button from '../UI/Button';
import './FoodItem.css';

const FoodItem = (props: any) => {
  const item: {} = {
    name: props.name,
    decription: props.decription,
    price: props.price,
  };
  const keyHandler = (e: any) => {
    // e.preventDefault();
    if (e.key == 'ArrowLeft') {
      console.log('key press  <--');
    } else {
      console.log('other key...');
    }
  };
  const ctx = useContext(AuthContext);
  const addFoodHandler = () => {
    console.log('add food');

    ctx.onAddCartList(item);

    console.log(ctx.cartList);
  };
  return (
    <li className='food-item'>
      <div>
        <h2>{props.name}</h2>
        <p> decription:{props.decription} </p>
        <p> price:{props.price}</p>
      </div>

      <div>
        <label htmlFor='amount'>Amount</label>
        <input type='text' id='amount' onKeyDown={(e) => keyHandler(e)} />
        <button type='button' placeholder='1' onClick={addFoodHandler}>
          add
        </button>
      </div>
    </li>
  );
};
export default FoodItem;
