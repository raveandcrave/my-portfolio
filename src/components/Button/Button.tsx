import {ForwardedRef, forwardRef} from 'react';
import {motion} from 'framer-motion';
import {ButtonProps} from './Button.props';
import styles from './Button.module.css';

export const Button = forwardRef(({children, className}: ButtonProps, ref: ForwardedRef<HTMLButtonElement>) => {
  return (
    <button ref={ref} className={`${className} ${styles.button}`}>
      {children}
    </button>
  );
});

Button.displayName = 'Button';

export default motion(Button);
