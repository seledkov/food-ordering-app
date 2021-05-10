import React from 'react';
import './FoodList.scss';
import FoodItem from './FoodItem';
import Card from '../UI/Card';

export type FoodItem = {
  id: string | number;
  name: string;
  decription: string;
  price: number;
};
const FoodList = (props: any) => {
  const renderFoodList = props.foodList.map((item: FoodItem, index: number) => {
    return (
      <FoodItem
        key={item.id}
        id={item.id}
        name={item.name}
        decription={item.decription}
        price={item.price}
      />
    );
  });

  return (
    <section className='food-list'>
      <Card>
        <ul>{renderFoodList}</ul>
      </Card>
    </section>
  );
};
export default FoodList;
