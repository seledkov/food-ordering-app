import React, { useContext } from 'react';
import './App.css';
import FoodList from './components/FoodList/FoodList';
import Header from './components/Header/Header';
import ModalCart from './components/ModalCart/ModalCart';
import AuthContext from './components/store/auth-context';

// ========== App ==============
const App: React.FC = (props: any) => {
  const ctx = useContext(AuthContext);
  return (
    <div className='App'>
      <Header />
      <FoodList foodList={ctx.orderList} />
      <ModalCart />
    </div>
  );
};

export default App;
