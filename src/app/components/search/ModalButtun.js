import React from 'react';
import styles from './styles.css';

const ModalButton = props => (
  <button onClick={props.handleClick}>
    {props.children}
  </button>);

export default ModalButton;