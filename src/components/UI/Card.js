// Import from framework
import React from 'react';

// Import css module
import style from './Card.module.css';

// Create generic Card component that will wrap children objects and take css classes as props.
const Card = (props) => {
  return (
    <div className={`${style.card} ${props.className}`}>{props.children}</div>
  );
};

export default Card;
