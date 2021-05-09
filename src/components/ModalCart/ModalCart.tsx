import React, { useContext } from 'react';
import AuthContext from '../store/auth-context';
import './ModalCart.sсss';
const ModalCart = (props: any) => {
  const ctx = useContext(AuthContext);
  return (
    <div>
      <div className='modal-cart__background'>modal background</div>
      <div className='modal-cart'>
        {ctx.cartList.map((item: any) => {
          return (
            <div className='modal-cart__item'>
              <div>
                <p>{item.name}</p>
                <p>${item.price}</p>
              </div>
              <div>
                <button>- </button> <button>+</button>
              </div>
            </div>
          );
        })}
        <div className='modal-cart__total-amount'>
          <div>total amount:</div>
          <div>
            <p>full price</p>
            <button>close</button>
            <button>order</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalCart;
