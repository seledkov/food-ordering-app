import './ModalCartFoodItem.scss';

const ModalFoodCartItem = (props: any) => {
  const price = `$${props.price.toFixed(2)}`;

  return (
    <li className='modal-cart-item'>
      <div>
        <h2>{props.name}</h2>
        <div className='modal-cart-item__summary'>
          <span className='modal-cart-item__price'>{price}</span>
          <span className='modal-cart-item__amount'>x {props.amount}</span>
        </div>
      </div>
      <div className='modal-cart-item__actions'>
        <button onClick={props.onRemove}>−</button>
        <button onClick={props.onAdd}>+</button>
      </div>
    </li>
  );
};

export default ModalFoodCartItem;
