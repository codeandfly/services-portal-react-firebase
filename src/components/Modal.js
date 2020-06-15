import React, { useState } from 'react';

const Modal = ({ openButtonText, onModalSubmit, children }) => {
  const [isActive, setIsActive] = useState(false);

  const changeModalState = modalState => {
    setIsActive(modalState);
  };

  return (
    <div>
      <button
        onClick={() => changeModalState(true)}
        type="button"
        className="button is-medium is-info is-outlined"
        data-toggle="modal"
        data-target="#exampleModal"
      >
        {openButtonText || 'Open'}
      </button>
      <div className={`modal ${isActive ? 'is-active' : ''}`}>
        <div className="modal-background"></div>
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">Make a Deal</p>
            <button
              onClick={() => changeModalState(false)}
              className="delete"
              aria-label="close"
            ></button>
          </header>
          <section className="modal-card-body">{children}</section>
          <footer className="modal-card-foot">
            <button onClick={onModalSubmit} className="button is-success">
              Save changes
            </button>
            <button onClick={() => changeModalState(false)} className="button">
              Cancel
            </button>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Modal;
