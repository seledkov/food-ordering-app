import React, { useState, useEffect } from 'react';
import './FoodList.scss';
import { IFoodItem } from '../../interface';
import FoodItem from './FoodItem';
import Card from '../UI/Card';

const FoodList = (props: any) => {
  const [orderList, setOrderList] = useState<any>();
  const [httpError, setHttpError] = useState<string>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchOrderList = async () => {
      setIsLoading(true);
      const response = await fetch(
        'https://react-http-a2f61-default-rtdb.europe-west1.firebasedatabase.app/meals.json',
      );
      console.log(response);
      if (!response.ok) {
        throw new Error('Sometime went wrong');
      }
      const responseData = await response.json();
      const loadedFoodList = [];
      for (const key in responseData) {
        const item = {
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        };
        loadedFoodList.push(item);
      }
      setOrderList(loadedFoodList);
      setIsLoading(false);
      console.log(loadedFoodList);
    };

    fetchOrderList().catch((error) => {
      console.log(error);
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, []);

  const renderFoodList =
    orderList &&
    orderList.map((item: IFoodItem, index: number) => {
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
    });

  if (isLoading) {
    return (
      <section className='food-list__loading'>
        <p> Loading... </p>
      </section>
    );
  }
  if (httpError) {
    return (
      <section className='food-list__error'>
        <p>{httpError}</p>
      </section>
    );
  }
  return (
    <section className='food-list'>
      <Card>
        <ul>{renderFoodList}</ul>
      </Card>
    </section>
  );
};
export default FoodList;
