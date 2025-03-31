import React, { forwardRef } from 'react';
import classNames from 'classnames';
import { CheckIcon, MinusIcon } from '@ku-design-system/core';
import './Checkbox.css';

export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
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
   * Optional class name
   */
  className?: string;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(({
  label,
  hideLabel = false,
  error = false,
  errorMessage,
  indeterminate = false,
  helperText,
  className,
  id,
  disabled,
  checked,
  onChange,
  ...props
}, ref) => {
  const checkboxId = id || `checkbox-${Math.random().toString(36).substr(2, 9)}`;

  // Handle indeterminate state
  React.useEffect(() => {
    if (ref && 'current' in ref && ref.current) {
      ref.current.indeterminate = indeterminate;
    }
  }, [indeterminate, ref]);

  return (
    <div
      className={classNames(
        'ku-checkbox-wrapper',
        {
          'ku-checkbox-wrapper--error': error,
          'ku-checkbox-wrapper--disabled': disabled,
        },
        className
      )}
    >
      <div className="ku-checkbox-container">
        <input
          {...props}
          ref={ref}
          type="checkbox"
          id={checkboxId}
          className="ku-checkbox__input"
          disabled={disabled}
          checked={checked}
          onChange={onChange}
          aria-invalid={error}
          aria-describedby={
            (errorMessage || helperText) 
              ? `${checkboxId}-description`
              : undefined
          }
        />
        <div className="ku-checkbox__box" aria-hidden="true">
          {indeterminate ? (
            React.createElement(MinusIcon, {
              size: 12,
              stroke: 2,
              className: 'ku-checkbox__icon'
            })
          ) : (
            React.createElement(CheckIcon, {
              size: 12,
              stroke: 2,
              className: 'ku-checkbox__icon'
            })
          )}
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
        >
          {error ? errorMessage : helperText}
        </div>
      )}
    </div>
  );
});

Checkbox.displayName = 'Checkbox';

export default Checkbox; 