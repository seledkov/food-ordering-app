import { number } from 'prop-types';
import React, { useState, useEffect, useDebugValue } from 'react';
import { isTemplateExpression } from 'typescript';

type ICardList = FoodItem[];
type FoodItem = {
  id: string;
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
  { id: 'm1', name: 'sushi', decription: 'asian food', price: 22, amount: 1 },
  { id: 'm2', name: 'meat', decription: 'euro food', price: 15, amount: 1 },
  { id: 'm3', name: 'pasta', decription: 'italian food', price: 10, amount: 1 },
  { id: 'm4', name: 'coffee', decription: 'euro drink', price: 4, amount: 1 },
];
export const AuthContextProvider = (props: any) => {
  const [orderList, setOrderList] = useState(startOrderList);
  const [cartList, setCartList] = useState<ICardList>([]);
  const [isCartModal, setIsCartModal] = useState<boolean>(false);
  const [totalPrice, setTotalPrice] = useState(0);
  const addCartList = (item: FoodItem) => {
    setCartList((prevState) => {
      return [...prevState, item];
    });
  };
  const deleteCartItem = (itemID: number) => {
    const newCartList = [...cartList];
    newCartList.slice(itemID, 1);
    setCartList(newCartList);
  };
  const openModalCartHandler = () => {
    setIsCartModal(true);
    sumCartItems();
  };
  const closeModalCartHandler = () => {
    setIsCartModal(false);
  };

  const sumCartItems = () => {
    // todo use reduce?
    let count = 0;
    cartList.forEach((item) => {
      count += item.price;
    });
    setTotalPrice(count);
  };

  const CartContext = {
    orderList: orderList,
    cartList: cartList,
    onAddCartList: addCartList,
    onDeleteCartItem: deleteCartItem,
    isCartModal: isCartModal,
    openModalCart: openModalCartHandler,
    closeModalCart: closeModalCartHandler,
    totalPrice: totalPrice,
  };
  return (
    <AuthContext.Provider value={CartContext}>
      {props.children}
    </AuthContext.Provider>
  );
};
export default AuthContext;
