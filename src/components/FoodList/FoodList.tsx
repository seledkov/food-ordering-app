import React from 'react';
import './FoodList.scss';
import FoodItem from './FoodItem';
import Card from '../UI/Card';

export type IFoodItem = {
  id: string | number;
  name: string;
  description: string;
  price: number;
  amount: number;
};
const FoodList = (props: any) => {
  const renderFoodList = props.foodList.map(
    (item: IFoodItem, index: number) => {
      return (
        <FoodItem
          key={index}
          id={item.id}
          name={item.name}
          description={item.description}
          price={item.price}
          amount={item.amount}
        />
      );
    },
  );

  return (
    <section className='food-list'>
      <Card>
        <ul>{renderFoodList}</ul>
      </Card>
    </section>
  );
};
export default FoodList;
