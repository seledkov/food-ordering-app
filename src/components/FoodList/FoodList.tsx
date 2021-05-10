import React from 'react';
import './FoodList.scss';
import FoodItem from './FoodItem';
import Card from '../UI/Card';

export type FoodItem = {
  name: string;
  decription: string;
  price: number;
};
const FoodList = (props: any) => {
  return (
    <section className='food-list'>
      <Card>
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
      </Card>
    </section>
  );
};
export default FoodList;
