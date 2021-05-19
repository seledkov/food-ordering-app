import React, { useState, useReducer } from 'react';
import { IFoodItem } from '../../interface';

type Reducer<S, A> = (state: S, action: A) => State;
type State = { items: any; totalAmount: number };
type Action = {
  type: 'ADD_ITEM' | 'REMOVE_ITEM';
  item?: any;
  id?: number;
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
const startOrderList: IFoodItem[] = [
  {
    id: 1,
    name: 'Rolls',
    description: 'asian food',
    price: 12.49,
    amount: 1,
  },
  {
    id: 2,
    name: 'Steak',
    description: 'euro food',
    price: 15.99,
    amount: 1,
  },
  {
    id: 3,
    name: 'Pasta',
    description: 'italian food',
    price: 10.99,
    amount: 1,
  },
  {
    id: 4,
    name: 'Green Salad',
    description: 'euro food',
    price: 4.6,
    amount: 1,
  },
];
const defaultCartState = { items: [], totalAmount: 0 };
const cardReducer = (state: State, action: Action) => {
  if (action.type === 'ADD_ITEM') {
    console.log(action);
    const updateTotalAmount: number = state.totalAmount + action.item!.price * action.item!.amount;
    const existingCartItemIndex: number = state.items.findIndex(
      (item: any) => item.id === action.item!.id,
    );
    // reducer v146
    let updatedItems;
    const existingCartItem = state.items[existingCartItemIndex];
    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item!.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }

    return {
      items: updatedItems,
      totalAmount: updateTotalAmount,
    };
  }
  if (action.type === 'REMOVE_ITEM') {
    const existingCartItemIndex = state.items.findIndex((item: any) => item.id === action.id);
    const existingCartItem = state.items[existingCartItemIndex];
    const updateTotalAmount: number = state.totalAmount - +existingCartItem.price;
    let updatedItems;
    if (existingCartItem.amount === 1) {
      updatedItems = state.items.filter((item: any) => item.id !== action.id);
    }
    if (existingCartItem.amount > 1) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount - 1,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    }
    return {
      items: updatedItems,
      totalAmount: updateTotalAmount,
    };
  }
  throw 'error add type';
};
export const AuthContextProvider = (props: any) => {
  const [orderList, setOrderList] = useState(startOrderList);
  const [isCartModal, setIsCartModal] = useState<boolean>(false);

  // === cartReducer

  const [cartListState, dispatchCartListAction] = useReducer<Reducer<State, Action>>(
    cardReducer,
    defaultCartState,
  );

  const addItemToCartHandler = (item: {}) => {
    dispatchCartListAction({
      type: 'ADD_ITEM',
      item: item,
    });
  };
  const removeItemFromCartHandler = (id: number) => {
    dispatchCartListAction({
      type: 'REMOVE_ITEM',
      id: id,
    });
  };

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
  return <AuthContext.Provider value={CartContext}>{props.children}</AuthContext.Provider>;
};
export default AuthContext;
