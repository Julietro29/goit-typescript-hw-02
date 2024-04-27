import styles from './Button.module.css';

const Button = ({ onClick, typeBtn, children }) => {
  return (
    <button className={styles.btn} onClick={onClick} type={typeBtn}>
      {children}
    </button>
  );
};
export default Button;