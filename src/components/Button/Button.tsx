import {FC} from 'react';
import {ButtonProps} from './Button.props';
import styles from './Button.module.css';

const Button: FC<ButtonProps> = ({children, className}) => {
  return <button className={`${className} ${styles.button}`}>{children}</button>;
};

export default Button;
