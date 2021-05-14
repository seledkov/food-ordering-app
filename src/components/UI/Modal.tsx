import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import { createTextChangeRange, textSpanContainsPosition } from 'typescript';
import AuthContext from '../store/auth-context';
import './Modal.scss';

const Modal = (props: any) => {
  const BackDrop = () => {
    return <div className='backdrop' onClick={ctx.closeModalCart}></div>;
  };

  const ModalOverlay = (props: any) => {
    return (
      <div className='modal'>
        <div className='content'>{props.children}</div>
      </div>
    );
  };
  // todo  better use props for UI for flexibility
  const ctx = useContext(AuthContext);

  const portalElement = document.getElementById('overlays')!;
  return (
    <React.Fragment>
      {ReactDOM.createPortal(<BackDrop />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement,
      )}
    </React.Fragment>
  );
};

export default Modal;
