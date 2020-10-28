import React from 'react';
import './Modal.scss';
import CloseButton from '../../assets/images/icons/close.svg'

const Modal = ({ children, show, close }) => {
  if (!show) return null;

  return (
    <div className="Modal">
      <div className="Modal__content">
        <img
          src={CloseButton}
          className="Modal__content--image"
          alt="X"
          onClick={close}
        />
        {children}
      </div>
    </div>
  );
};

export default Modal;
