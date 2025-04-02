import React, { forwardRef, KeyboardEvent, ForwardedRef } from 'react';
import classNames from 'classnames';
import { IconCheck, IconMinus, IconLoader2 } from '@tabler/icons-react';
import './Checkbox.css';

export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'> {
  /**
   * The label for the checkbox
   */
  label?: string;

  /**
   * Whether to hide the label visually but keep it for screen readers
   * @default false
   */
  hideLabel?: boolean;

  /**
   * Whether the checkbox is in an error state
   * @default false
   */
  error?: boolean;

  /**
   * Error message to display
   */
  errorMessage?: string;

  /**
   * Whether the checkbox is in an indeterminate state
   * @default false
   */
  indeterminate?: boolean;

  /**
   * Optional helper text
   */
  helperText?: string;

  /**
   * Whether the checkbox is in a loading state
   * @default false
   */
  loading?: boolean;

  /**
   * Size of the checkbox
   * @default "md"
   */
  size?: 'sm' | 'md' | 'lg';

  /**
   * Optional class name
   */
  className?: string;

  /**
   * Default checked state for uncontrolled usage
   */
  defaultChecked?: boolean;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(({
  label,
  hideLabel = false,
  error = false,
  errorMessage,
  indeterminate = false,
  helperText,
  loading = false,
  size = 'md',
  className,
  id,
  disabled,
  checked,
  defaultChecked,
  onChange,
  onKeyDown,
  ...props
}, ref: ForwardedRef<HTMLInputElement>) => {
  const checkboxId = id || `checkbox-${Math.random().toString(36).substr(2, 9)}`;
  const checkboxRef = React.useRef<HTMLInputElement | null>(null);

  // CSS Variables for icon sizing
  const iconStyle = React.useMemo(() => ({
    '--ku-checkbox-current-icon-size': 'var(--ku-checkbox-icon-size)',
    '--ku-checkbox-current-icon-stroke': 'var(--ku-checkbox-icon-stroke-width)'
  } as React.CSSProperties), []);

  // Merge refs
  React.useEffect(() => {
    if (typeof ref === 'function') {
      ref(checkboxRef.current);
    } else if (ref) {
      ref.current = checkboxRef.current;
    }
  }, [ref]);

  // Handle indeterminate state
  React.useEffect(() => {
    if (checkboxRef.current) {
      checkboxRef.current.indeterminate = indeterminate;
    }
  }, [indeterminate]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!disabled && !loading && onChange) {
      onChange(e);
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    // Handle space and enter keys
    if ((e.key === ' ' || e.key === 'Enter') && !disabled && !loading) {
      e.preventDefault();
      const newEvent = new Event('change', { bubbles: true });
      checkboxRef.current?.dispatchEvent(newEvent);
    }

    // Call the original onKeyDown handler if provided
    if (onKeyDown) {
      onKeyDown(e);
    }
  };

  const renderIcon = () => {
    if (loading) {
      return (
        <IconLoader2
          className="ku-checkbox__icon ku-checkbox__icon--loading"
          aria-hidden="true"
          size="var(--ku-checkbox-current-icon-size)"
          strokeWidth="var(--ku-checkbox-current-icon-stroke)"
          style={iconStyle}
        />
      );
    }
    if (indeterminate) {
      return (
        <IconMinus
          className="ku-checkbox__icon"
          aria-hidden="true"
          size="var(--ku-checkbox-current-icon-size)"
          strokeWidth="var(--ku-checkbox-current-icon-stroke)"
          style={iconStyle}
        />
      );
    }
    if (checked) {
      return (
        <IconCheck
          className="ku-checkbox__icon"
          aria-hidden="true"
          size="var(--ku-checkbox-current-icon-size)"
          strokeWidth="var(--ku-checkbox-current-icon-stroke)"
          style={iconStyle}
        />
      );
    }
    return null;
  };

  return (
    <div
      className={classNames(
        'ku-checkbox-wrapper',
        `ku-checkbox-wrapper--${size}`,
        {
          'ku-checkbox-wrapper--error': error,
          'ku-checkbox-wrapper--disabled': disabled,
          'ku-checkbox-wrapper--loading': loading,
        },
        className
      )}
    >
      <div className="ku-checkbox-container">
        <input
          {...props}
          ref={checkboxRef}
          type="checkbox"
          id={checkboxId}
          className="ku-checkbox__input"
          disabled={disabled || loading}
          checked={checked}
          defaultChecked={defaultChecked}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          aria-invalid={error}
          aria-busy={loading}
          aria-describedby={
            (errorMessage || helperText) 
              ? `${checkboxId}-description`
              : undefined
          }
          aria-checked={indeterminate ? 'mixed' : checked}
        />
        <div 
          className="ku-checkbox__box" 
          aria-hidden="true"
          role="presentation"
        >
          {renderIcon()}
        </div>
        {label && (
          <label
            htmlFor={checkboxId}
            className={classNames('ku-checkbox__label', {
              'ku-checkbox__label--hidden': hideLabel,
            })}
          >
            {label}
          </label>
        )}
      </div>
      {(errorMessage || helperText) && (
        <div
          id={`${checkboxId}-description`}
          className={classNames('ku-checkbox__message', {
            'ku-checkbox__message--error': error,
          })}
          role={error ? 'alert' : 'status'}
        >
          {error ? errorMessage : helperText}
        </div>
      )}
    </div>
  );
});

Checkbox.displayName = 'Checkbox';

export default Checkbox; 