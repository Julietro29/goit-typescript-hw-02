import React from 'react';
import { ERR_EMPTY_LOAD } from '../../notifications/constants';
import styles from './ErrorMessage.module.css';

interface Props {
  isError: boolean;
}

const ErrorMessage: React.FC<Props> = ({ isError }) => {
  return isError && <p className={styles.empty}>{ERR_EMPTY_LOAD}</p>;
};

export default ErrorMessage;