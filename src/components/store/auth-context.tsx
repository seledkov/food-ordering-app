import { number } from 'prop-types';
import React, { useState, useEffect, useDebugValue } from 'react';
import { isTemplateExpression } from 'typescript';

type ICardList = FoodItem[];
type FoodItem = {
  name: string;
  description?: string;
  price: number;
  amount?: number;
  // [idx]?: string;
};
const AuthContext = React.createContext({
  orderList: [{}],
  cartList: [{}],
  isCartModal: false,
  // onAddCartList: (item: any) => [{}],
  onAddCartList: (item: any) => {},
  onDeleteCartItem: (itemID: number) => {},
  openModalCart: () => {},
  closeModalCart: () => {},
  totalPrice: 0,
});
const startOrderList = [
  { name: 'sushi', decription: 'asian food', price: 22, amount: 1 },
  { name: 'meat', decription: 'euro food', price: 15, amount: 1 },
  { name: 'pasta', decription: 'italian food', price: 10, amount: 1 },
  { name: 'coffee', decription: 'euro drink', price: 4, amount: 1 },
];
export const AuthContextProvider = (props: any) => {
  const [orderList, setOrderList] = useState(startOrderList);
  const [cartList, setCartList] = useState<ICardList>([]);
  const [isCartModal, setIsCartModal] = useState<boolean>(false);
  const [totalPrice, setTotalPrice] = useState(0);
  const addCartList = (item: any) => {
    setCartList((prevState) => {
      return [...prevState, item];
    });
  };
  const deleteCartItem = (itemID: any) => {
    const newCartList = [...cartList];
    newCartList.slice(itemID, 1);
    setCartList(newCartList);
  };
  const openModalCartHandler = () => {
    setIsCartModal(true);
    sumCartItem();
  };
  const closeModalCartHandler = () => {
    setIsCartModal(false);
  };

  const sumCartItem = () => {
    let count = 0;
    cartList.forEach((item) => {
      count += item.price;
    });
    setTotalPrice(count);
  };
  return (
    <AuthContext.Provider
      value={{
        orderList: orderList,
        cartList: cartList,
        onAddCartList: addCartList,
        onDeleteCartItem: deleteCartItem,
        isCartModal: isCartModal,
        openModalCart: openModalCartHandler,
        closeModalCart: closeModalCartHandler,
        totalPrice: totalPrice,
      }}>
      {props.children}
    </AuthContext.Provider>
  );
};
export default AuthContext;
