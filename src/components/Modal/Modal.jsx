import React from 'react';
import './Modal.scss';
import CloseButton from '../../assets/images/icons/close.svg';

const Modal = ({ children, show, close }) => {
  if (!show) return null;

  return (
    <div className="Modal">
      <div className="Modal__card">
        <img
          src={CloseButton}
          className="Modal__card--image"
          alt="X"
          onClick={close}
        />
        <br />

        <div className="Modal__card__content">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
