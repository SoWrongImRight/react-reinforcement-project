// Imported from frameworks
import React from 'react';

// Import css module
import style from './Button.module.css';

// Create generic button component that will taks css classes, type, and onClick funtionality from props
const Button = (props) => {
  return (
    <button
      className={style.button}
      type={props.type || 'button'}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
