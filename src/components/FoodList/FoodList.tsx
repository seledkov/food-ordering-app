import React from 'react';
import './FoodList.css';
import FoodItem from './FoodItem';

export type FoodItem = {
  name: string;
  decription: string;
  price: number;
};
const FoodList = (props: any) => {
  return (
    <div className='food-list'>
      <ul>
        {props.foodList.map((item: FoodItem, index: number) => {
          return (
            <FoodItem
              key={index}
              name={item.name}
              decription={item.decription}
              price={item.price}
            />
          );
        })}
      </ul>
    </div>
  );
};
export default FoodList;
