import React from 'react';
import ReactDOM from 'react-dom';

const modalRootEl = document.getElementById('modal-root');

const Modal = ({ children, open = false }) => {
  if (!open) return null;

  return ReactDOM.createPortal(
    <div className="modal-container">
      {children}
    </div>,
    modalRootEl
  );
};

export default Modal;
