import React, { forwardRef } from 'react';
import { ChevronDownIcon, ExclamationCircleIcon } from '@ku-design-system/core';
import './Select.css';

export interface SelectOption {
  /**
   * The value of the option
   */
  value: string;
  /**
   * The label to display for the option
   */
  label: string;
  /**
   * Optional icon to display before the option
   */
  icon?: React.ReactNode;
  /**
   * Optional prefix content (e.g., country flag)
   */
  prefix?: React.ReactNode;
  /**
   * Whether the option is disabled
   */
  disabled?: boolean;
}

export interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'prefix'> {
  /**
   * The options to display in the select
   */
  options: SelectOption[];
  /**
   * The label for the select
   */
  label?: string;
  /**
   * Additional helper text
   */
  helperText?: string;
  /**
   * Error message to display
   */
  error?: string;
  /**
   * Whether the select is in an error state
   */
  hasError?: boolean;
  /**
   * Hide the label visually but keep it accessible to screen readers
   */
  hideLabel?: boolean;
  /**
   * Icon to display at the start of the select
   */
  icon?: React.ReactNode;
  /**
   * Prefix content to display before the value
   */
  prefix?: React.ReactNode;
  /**
   * Additional class name
   */
  className?: string;
  /**
   * Placeholder text when no value is selected
   */
  placeholder?: string;
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>((
  {
    options,
    label,
    helperText,
    error,
    hasError,
    hideLabel,
    icon,
    prefix,
    className,
    id,
    disabled,
    placeholder,
    required,
    'aria-label': ariaLabel,
    ...props
  },
  ref
) => {
  const selectId = id || `select-${Math.random().toString(36).substr(2, 9)}`;
  const helperId = helperText ? `${selectId}-helper` : undefined;
  const errorId = error ? `${selectId}-error` : undefined;
  const describedBy = [helperId, errorId].filter(Boolean).join(' ') || undefined;

  return (
    <div 
      className={[
        'ku-select',
        disabled && 'ku-select--disabled',
        hasError && 'ku-select--error',
        icon && 'ku-select--has-icon',
        prefix && 'ku-select--has-prefix',
        className
      ].filter(Boolean).join(' ')}
    >
      {label && (
        <label
          htmlFor={selectId}
          className={[
            'ku-select__label',
            hideLabel && 'ku-select__label--hidden',
            required && 'ku-select__label--required'
          ].filter(Boolean).join(' ')}
        >
          {label}
        </label>
      )}
      
      <div className="ku-select__input-wrapper">
        {icon && (
          <div className="ku-select__icon" aria-hidden="true">
            {icon}
          </div>
        )}
        
        {prefix && (
          <div className="ku-select__prefix" aria-hidden="true">
            {prefix}
          </div>
        )}

        <select
          {...props}
          ref={ref}
          id={selectId}
          disabled={disabled}
          aria-invalid={hasError}
          aria-describedby={describedBy}
          aria-label={hideLabel ? label || ariaLabel : ariaLabel}
          required={required}
          className="ku-select__input"
        >
          {placeholder && (
            <option value="" disabled={required}>
              {placeholder}
            </option>
          )}
          {options.map((option) => (
            <option 
              key={option.value} 
              value={option.value}
              disabled={option.disabled}
            >
              {option.label}
            </option>
          ))}
        </select>

        <div className="ku-select__chevron" aria-hidden="true">
          {ChevronDownIcon({ size: 16 })}
        </div>

        {hasError && (
          <div className="ku-select__error-icon" aria-hidden="true">
            {ExclamationCircleIcon({ size: 16 })}
          </div>
        )}
      </div>

      {helperText && (
        <div id={helperId} className="ku-select__helper">
          {helperText}
        </div>
      )}

      {error && (
        <div id={errorId} className="ku-select__error">
          {error}
        </div>
      )}
    </div>
  );
});

Select.displayName = 'Select'; 