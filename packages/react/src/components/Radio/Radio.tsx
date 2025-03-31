import React, { forwardRef } from 'react';
import { CircleIcon, CircleDotIcon } from '@ku-design-system/core';
import './Radio.css';

export interface RadioProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  /**
   * The label for the radio button
   */
  label?: string;
  /**
   * Additional description text
   */
  description?: string;
  /**
   * Error message to display
   */
  error?: string;
  /**
   * Whether the radio is in an error state
   */
  hasError?: boolean;
  /**
   * Hide the label visually but keep it accessible to screen readers
   */
  hideLabel?: boolean;
  /**
   * Additional class name
   */
  className?: string;
}

export interface RadioGroupProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  /**
   * The name attribute for the radio group
   */
  name: string;
  /**
   * The currently selected value
   */
  value?: string;
  /**
   * Callback when selection changes
   */
  onChange?: (value: string) => void;
  /**
   * Label for the radio group
   */
  label?: string;
  /**
   * Whether the radio group is required
   */
  required?: boolean;
  /**
   * Error message to display
   */
  error?: string;
  /**
   * Additional class name
   */
  className?: string;
}

export const Radio = forwardRef<HTMLInputElement, RadioProps>((
  {
    label,
    description,
    error,
    hasError,
    hideLabel,
    className,
    id,
    disabled,
    checked,
    ...props
  },
  ref
) => {
  const radioId = id || `radio-${Math.random().toString(36).substr(2, 9)}`;
  const descriptionId = description ? `${radioId}-description` : undefined;
  const errorId = error ? `${radioId}-error` : undefined;

  return (
    <div 
      className={[
        'ku-radio',
        disabled && 'ku-radio--disabled',
        hasError && 'ku-radio--error',
        className
      ].filter(Boolean).join(' ')}
    >
      <div className="ku-radio__input-wrapper">
        <input
          {...props}
          ref={ref}
          type="radio"
          id={radioId}
          disabled={disabled}
          checked={checked}
          aria-describedby={[descriptionId, errorId].filter(Boolean).join(' ') || undefined}
          className="ku-radio__input"
        />
        <div className="ku-radio__control" aria-hidden="true">
          {checked ? <CircleDotIcon size={16} /> : <CircleIcon size={16} />}
        </div>
      </div>
      {label && (
        <label
          htmlFor={radioId}
          className={[
            'ku-radio__label',
            hideLabel && 'ku-radio__label--hidden'
          ].filter(Boolean).join(' ')}
        >
          {label}
        </label>
      )}
      {description && (
        <div id={descriptionId} className="ku-radio__description">
          {description}
        </div>
      )}
      {error && (
        <div id={errorId} className="ku-radio__error">
          {error}
        </div>
      )}
    </div>
  );
});

export const RadioGroup = forwardRef<HTMLDivElement, RadioGroupProps>((
  {
    children,
    name,
    value,
    onChange,
    label,
    required,
    error,
    className,
    ...props
  },
  ref
) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(event.target.value);
  };

  const groupId = `radio-group-${Math.random().toString(36).substr(2, 9)}`;
  const errorId = error ? `${groupId}-error` : undefined;

  return (
    <div
      ref={ref}
      role="radiogroup"
      aria-labelledby={label ? `${groupId}-label` : undefined}
      aria-required={required}
      aria-invalid={!!error}
      aria-errormessage={errorId}
      className={[
        'ku-radio-group',
        error && 'ku-radio-group--error',
        className
      ].filter(Boolean).join(' ')}
      {...props}
    >
      {label && (
        <div id={`${groupId}-label`} className="ku-radio-group__label">
          {label}
          {required && <span className="ku-radio-group__required">*</span>}
        </div>
      )}
      <div className="ku-radio-group__options">
        {React.Children.map(children, child => {
          if (!React.isValidElement(child)) return null;
          
          return React.cloneElement(child as React.ReactElement<RadioProps>, {
            name,
            checked: value === (child.props as RadioProps).value,
            onChange: handleChange,
            hasError: !!error,
          });
        })}
      </div>
      {error && (
        <div id={errorId} className="ku-radio-group__error">
          {error}
        </div>
      )}
    </div>
  );
});

Radio.displayName = 'Radio';
RadioGroup.displayName = 'RadioGroup'; 