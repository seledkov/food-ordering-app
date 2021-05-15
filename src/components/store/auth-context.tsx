import React, { useState, useReducer } from 'react';

type ICardList = FoodItem[];
type FoodItem = {
  id: string;
  name: string;
  description?: string;
  price: number;
  amount?: number;
  // [idx]?: string;
};

type Reducer<S, A> = (state: S, action: A) => State;
type State = { items: []; totalAmount: number };
type Action = {
  type: 'ADD_ITEM' | 'REMOVE_ITEM';
  item: {};
  totalAmount: number;
};

const AuthContext = React.createContext({
  orderList: [{}],
  cartListState: [],
  totalAmount: 0,
  isCartModal: false,
  onAddCartList: (item: any) => {},
  onDeleteCartItem: (itemID: number) => {},
  openModalCart: () => {},
  closeModalCart: () => {},
});
const startOrderList = [
  { id: 'm1', name: 'sushi', decription: 'asian food', price: 22, amount: 1 },
  { id: 'm2', name: 'meat', decription: 'euro food', price: 15, amount: 1 },
  { id: 'm3', name: 'pasta', decription: 'italian food', price: 10, amount: 1 },
  { id: 'm4', name: 'coffee', decription: 'euro drink', price: 4, amount: 1 },
];

const cardReducer = (state: any, action: any) => {
  if (action.type === 'ADD_ITEM') {
    const updateState = state.items.concat(action.item);
    const updateTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;
    return {
      items: updateState,
      totalAmount: updateTotalAmount,
    };
  }
  throw 'error add type';
};
export const AuthContextProvider = (props: any) => {
  const [orderList, setOrderList] = useState(startOrderList);
  const [cartList, setCartList] = useState<ICardList>([]);
  const [isCartModal, setIsCartModal] = useState<boolean>(false);
  const [totalPrice, setTotalPrice] = useState(0);

  // === cartReducer
  const defaultCartState = { items: [], totalAmount: 0 };

  const [cartListState, dispatchCartListAction] = useReducer(
    cardReducer,
    defaultCartState,
  );

  const addItemToCartHandler = (item: {}) => {
    dispatchCartListAction({
      type: 'ADD_ITEM',
      item: item,
    });
  };
  const removeItemFromCartHandler = (id: number) => {};

  // === modal status
  const openModalCartHandler = () => {
    setIsCartModal(true);
    sumCartItems();
  };
  const closeModalCartHandler = () => {
    setIsCartModal(false);
  };

  //=== state cart handler

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

    cartListState: cartListState.items,
    totalAmount: cartListState.totalAmount,
    onAddCartList: addItemToCartHandler,
    onDeleteCartItem: removeItemFromCartHandler,

    isCartModal: isCartModal,
    openModalCart: openModalCartHandler,
    closeModalCart: closeModalCartHandler,
  };
  return (
    <AuthContext.Provider value={CartContext}>
      {props.children}
    </AuthContext.Provider>
  );
};
export default AuthContext;
