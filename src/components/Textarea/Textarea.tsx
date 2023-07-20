import {ForwardedRef, forwardRef} from 'react';
import cn from 'classnames';
import {TextareaProps} from './Textarea.props';
import styles from './Textarea.module.css';

const Textarea = forwardRef(({className, error, ...props}: TextareaProps, ref: ForwardedRef<HTMLTextAreaElement>) => {
  return (
    <div className={cn(className, 'relative')}>
      <textarea
        className={cn(styles.textarea, 'dark:bg-slate-700', {
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

Textarea.displayName = 'Textarea';

export default Textarea;
