// Modal.js
import React from 'react';

const Modal = ({ isOpen, onClose, children }) => {
  return (
    isOpen && (
      <div>
        <div>
          {children}
        </div>
        <button onClick={onClose}>Close</button>
      </div>
    )
  );
};

export default Modal;
