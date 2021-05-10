import React from 'react';
import './FoodItemForm.scss';
import Input from '../UI/Input';
const FoodItemForm = (props: any) => {
  return (
    <form className='food-item__form'>
      <Input
        label='Amount'
        input={{
          id: 'amount',
          type: 'number',
          min: '1',
          max: '6',
          step: '1',
          defaultValue: '1',
        }}
      />
      <button type='button' onClick={props.onClick}>
        + Add
      </button>
    </form>
  );
};
export default FoodItemForm;
