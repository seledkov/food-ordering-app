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
const defaultCartState = { items: [], totalAmount: 0 };
const cardReducer = (state: any, action: any) => {
  if (action.type === 'ADD_ITEM') {
    // todo-add modalcart logic
    console.log(action);
    const updateTotalAmount: number =
      state.totalAmount + action.item.price * action.item.amount;
    //find item
    const existingCartItemIndex: number = state.items.findIndex(
      (item: any) => item.id === action.item.id,
    );
    // let item todo study reducer v146
    let updatedItems;
    const existingCartItem = state.items[existingCartItemIndex];
    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
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
    const existingCartItemIndex = state.items.findIndex(
      (item: any) => item.id === action.id,
    );
    const existingCartItem = state.items[existingCartItemIndex];
    const updateTotalAmount: number =
      state.totalAmount - +existingCartItem.price;
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
  return (
    <AuthContext.Provider value={CartContext}>
      {props.children}
    </AuthContext.Provider>
  );
};
export default AuthContext;
