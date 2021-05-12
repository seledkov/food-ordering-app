import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import AuthContext from '../store/auth-context';
import './Modal.scss';
const BackDrop = () => {
  return <div className='backdrop'></div>;
};

const ModalOverlay = (props: any) => {
  return (
    <div className='modal'>
      <div className='content'>{props.children}</div>
    </div>
  );
};
const Modal = (props: any) => {
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
