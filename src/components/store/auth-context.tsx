import React, { useState, useReducer } from 'react';

type FoodItem = {
  id: string;
  name: string;
  description?: string;
  price: number;
  amount: number;
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
const startOrderList: FoodItem[] = [
  {
    id: 'm1',
    name: 'Rolls',
    description: 'asian food',
    price: 12.49,
    amount: 1,
  },
  {
    id: 'm2',
    name: 'Steak',
    description: 'euro food',
    price: 15.99,
    amount: 1,
  },
  {
    id: 'm3',
    name: 'Pasta',
    description: 'italian food',
    price: 10.99,
    amount: 1,
  },
  {
    id: 'm4',
    name: 'Green Salad',
    description: 'euro food',
    price: 4.6,
    amount: 1,
  },
];

const cardReducer = (state: any, action: any) => {
  if (action.type === 'ADD_ITEM') {
    // todo-add modalcart logic
    const updateTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;
    const updateState = state.items.concat(action.item);
    return {
      items: updateState,
      totalAmount: updateTotalAmount,
    };
  }
  throw 'error add type';
};
export const AuthContextProvider = (props: any) => {
  const [orderList, setOrderList] = useState(startOrderList);
  const [isCartModal, setIsCartModal] = useState<boolean>(false);

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
  };
  const closeModalCartHandler = () => {
    setIsCartModal(false);
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
