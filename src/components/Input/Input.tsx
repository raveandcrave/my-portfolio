import {ForwardedRef, forwardRef} from 'react';
import cn from 'classnames';
import {InputProps} from './Input.props';
import styles from './Input.module.css';

const Input = forwardRef(({className, error, ...props}: InputProps, ref: ForwardedRef<HTMLInputElement>) => {
  return (
    <div className={cn(className, 'relative')}>
      <input
        className={cn(styles.input, 'dark:bg-slate-700', {
          [styles.error]: error,
        })}
        ref={ref}
        {...props}
      />
      {error && (
        <span role="alert" className="text-red-400 absolute left-0 -bottom-5">
          {error.message}
        </span>
      )}
    </div>
  );
});

Input.displayName = 'Input';

export default Input;
