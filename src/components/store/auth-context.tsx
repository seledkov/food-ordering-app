import React, { useState, useEffect } from 'react';

type ICardList = FoodItem[];
type FoodItem = {
  name: string;
  description?: string;
  price: number;
  // [idx]?: string;
};
const AuthContext = React.createContext({
  orderList: [{}],
  cartList: [{}],

  // onAddCartList: (item: any) => [{}],
  onAddCartList: (item: any) => {},
});
const startOrderList = [
  { name: 'sushi', decription: 'asian food', price: 22 },
  { name: 'meat', decription: 'euro food', price: 15 },
  { name: 'pasta', decription: 'italian food', price: 10 },
  { name: 'coffee', decription: 'euro drink', price: 4 },
  { name: 'sushi', decription: 'asian food', price: 22 },
  { name: 'meat', decription: 'euro food', price: 15 },
  { name: 'pasta', decription: 'italian food', price: 10 },
  { name: 'coffee', decription: 'euro drink', price: 4 },
];
export const AuthContextProvider = (props: any) => {
  const [orderList, setOrderList] = useState(startOrderList);
  // const [cartList, setCartList] = useState<{}[]>([]);
  const [cartList, setCartList] = useState<ICardList>([]);

  const addCartList = (item: any) => {
    setCartList((prevState) => {
      return [...prevState, item];
    });
    // (prev: any)=>{
    // return [...prev, item]}
  };

  return (
    <AuthContext.Provider
      value={{
        orderList: orderList,
        cartList: cartList,
        onAddCartList: addCartList,
      }}>
      {props.children}
    </AuthContext.Provider>
  );
};
export default AuthContext;
