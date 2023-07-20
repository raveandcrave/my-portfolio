'use client';
import {ForwardedRef, forwardRef} from 'react';
import {motion} from 'framer-motion';
import {ButtonProps} from './Button.props';
import styles from './Button.module.css';

export const Button = forwardRef(
  ({children, className, ...props}: ButtonProps, ref: ForwardedRef<HTMLButtonElement>) => {
    return (
      <button ref={ref} className={`${className} ${styles.button}`} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default motion(Button);
