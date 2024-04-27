import { Circles } from "react-loader-spinner";

import styles from './Loader.module.css';

export const Loader = ({ isLoading }) => {
  return (
    <>
      {isLoading && (
        <Circles
          className={styles.loader}
                  visible={isLoading}
                  color="var(--accent-color)"
          ariaLabel="Loading"
        />
      )}
    </>
  );
};
