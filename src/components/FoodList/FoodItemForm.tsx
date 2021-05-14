import React, { useRef } from 'react';
import './FoodItemForm.scss';
import Input from '../UI/Input';
const FoodItemForm = (props: any) => {
  // const currentFoodItems = useRef(1);
  return (
    <form className='food-item__form'>
      <Input
        id={props.id}
        label='Amount'
        input={{
          type: 'number',
          min: '1',
          max: '6',
          step: '1',
          defaultValue: '1',
        }}
        // ref={currentFoodItems}
      />
      <button type='button' onClick={props.onClick}>
        + Add
      </button>
    </form>
  );
};
export default FoodItemForm;
