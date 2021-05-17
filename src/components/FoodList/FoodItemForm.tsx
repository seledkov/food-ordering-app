import React, { useRef, useContext } from 'react';
import './FoodItemForm.scss';
import Input from '../UI/Input';
import AuthContext from '../store/auth-context';
const FoodItemForm = (props: any) => {
  const amountInputIRef = useRef<HTMLInputElement>();
  const ctx = useContext(AuthContext);
  const addFoodHandler = (event: any) => {
    event.preventDefault();

    const enteredAmount = +amountInputIRef.current!.value;

    console.log(enteredAmount);
    const currentItem = {
      id: props.id,
      name: props.name,
      price: props.price,
      amount: enteredAmount,
    };
    console.log('add food', currentItem, props);
    ctx.onAddCartList(currentItem);

    console.log(ctx.cartListState);
  };
  return (
    <form className='food-item__form' onSubmit={addFoodHandler}>
      <Input
        ref={amountInputIRef}
        id={props.id}
        label='Amount'
        input={{
          type: 'number',
          min: '1',
          max: '6',
          step: '1',
          defaultValue: '1',
        }}
      />
      <button type='submit'>+ Add</button>
    </form>
  );
};
export default FoodItemForm;
