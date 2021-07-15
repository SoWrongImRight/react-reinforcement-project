// Import from framework
import React from 'react';

// Import user created components
import Card from './Card';
import Button from './Button';

// Import css module
import style from './ErrorModal.module.css';

// Create a generic Modal components for error notification.  Receives title and message from props and clears the error state when onConfirm is called.
const ErrorModal = (props) => {
  return (
    <div>
      <div className={style.backdrop} onClick={props.onConfirm} />
      <Card className={style.modal}>
        <header className={style.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={style.content}>
          <p>{props.message}</p>
        </div>
        <footer className={style.actions}>
          <Button onClick={props.onConfirm}>Okay</Button>
        </footer>
      </Card>
    </div>
  );
};

export default ErrorModal;
