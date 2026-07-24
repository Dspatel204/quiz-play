import React from 'react';
import ReactDOM from 'react-dom';

const Modal = ({ children, open = false }) => {
  if (!open) return null;

  const modalRootEl = document.getElementById('modal-root') || document.body;

  return ReactDOM.createPortal(
    <div className="modal-container">
      {children}
    </div>,
    modalRootEl
  );
};

export default Modal;
