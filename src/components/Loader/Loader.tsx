import React from 'react';
import { Circles } from 'react-loader-spinner';

import styles from './Loader.module.css';

interface Props {
  isLoading: boolean;
}

export const Loader: React.FC<Props> = ({ isLoading }) => {
  return (
    <>
      {isLoading && (
        <div className={styles.loaderWrapper}>
          <Circles
            visible={isLoading}
            color="var(--accent-color)"
            ariaLabel="Loading"
          />
        </div>
      )}
    </>
  );
};
