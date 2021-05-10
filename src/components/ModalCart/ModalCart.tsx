import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import AuthContext from '../store/auth-context';
import './ModalCart.scss';
import Card from '../UI/Card';
const ModalCart = (props: any) => {
  const ctx = useContext(AuthContext);
  // const clicked = (index: any) => {
  //   ctx.onDeleteCartItem(index);
  // };
  return (
    <React.Fragment>
      {ctx.isCartModal &&
        ReactDOM.createPortal(
          <div className='modal-cart__background'>modal background</div>,
          document.getElementById('modal__bcg')!,
        )}

      {ctx.isCartModal &&
        ReactDOM.createPortal(
          <Card>
            <div className='modal-cart'>
              {ctx.cartList.map((item: any, index: number) => {
                return (
                  <div className='modal-cart__item' key={index}>
                    <div>
                      <p>{item.name}</p>
                      <p>${item.price}</p>
                    </div>
                    <div>
                      <button> - </button> <button> + </button>
                    </div>
                  </div>
                );
              })}
              <div className='modal-cart__total'>
                <div>total amount: {ctx.totalPrice}</div>
                <div>
                  <button onClick={ctx.closeModalCart}>close</button>
                  <button>order</button>
                </div>
              </div>
            </div>
          </Card>,
          document.getElementById('modal__cart')!,
        )}
    </React.Fragment>
  );
};

export default ModalCart;
