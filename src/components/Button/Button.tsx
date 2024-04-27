import React, { ReactNode } from 'react';
import styles from './Button.module.css';

interface Props {
  onClick: () => void;
  typeBtn?: 'button' | 'submit' | 'reset';
  children: ReactNode; // Явне вказання типу ReactNode для children
}

const Button: React.FC<Props> = ({ onClick, typeBtn = 'button', children }) => {
  return (
    <button className={styles.btn} onClick={onClick} type={typeBtn}>
      {children}
    </button>
  );
};

export default Button;
