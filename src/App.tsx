import React, { Fragment, useContext } from 'react';
import './App.css';
import FoodList from './components/FoodList/FoodList';
import Header from './components/Header/Header';
import ModalCart from './components/ModalCart/ModalCart';
import AuthContext from './components/store/auth-context';
import FoodListDescription from './components/FoodList/FoodListDescription';
// ========== App ==============
const App: React.FC = (props: any) => {
  const ctx = useContext(AuthContext);
  return (
    <Fragment>
      <Header />
      <main>
        <FoodListDescription />
        <FoodList foodList={ctx.orderList} />
      </main>
      <ModalCart />
    </Fragment>
  );
};

export default App;
