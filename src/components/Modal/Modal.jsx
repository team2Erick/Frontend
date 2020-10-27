import React from 'react';
import './Modal.scss';

const Modal = ({ children, show, close }) => {
  if (!show) return null

  return (
    <div className="Modal">
      <div className="Modal__content">
        <img
          src=""
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
