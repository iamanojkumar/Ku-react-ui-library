import React from 'react';
import classNames from 'classnames';
import { Checkbox } from './Checkbox';
import './Checkbox.css';

export interface CheckboxOption {
  /**
   * The value of the checkbox
   */
  value: string;
  
  /**
   * The label of the checkbox
   */
  label: string;
  
  /**
   * Whether the checkbox is disabled
   */
  disabled?: boolean;
}

export interface CheckboxGroupProps {
  /**
   * The name of the checkbox group
   */
  name: string;
  
  /**
   * Array of checkbox options
   */
  options: CheckboxOption[];
  
  /**
   * Array of selected values
   */
  value: string[];
  
  /**
   * Callback fired when any checkbox is changed
   */
  onChange: (values: string[]) => void;
  
  /**
   * Label for the checkbox group
   */
  label?: string;
  
  /**
   * Whether the group is in error state
   */
  error?: boolean;
  
  /**
   * Error message to display
   */
  errorMessage?: string;
  
  /**
   * Helper text for the group
   */
  helperText?: string;
  
  /**
   * Whether the entire group is disabled
   */
  disabled?: boolean;
  
  /**
   * Optional class name
   */
  className?: string;
}

export const CheckboxGroup: React.FC<CheckboxGroupProps> = ({
  name,
  options,
  value = [],
  onChange,
  label,
  error = false,
  errorMessage,
  helperText,
  disabled = false,
  className,
}) => {
  const groupId = `checkbox-group-${Math.random().toString(36).substr(2, 9)}`;

  const handleChange = (optionValue: string, checked: boolean) => {
    const newValues = checked
      ? [...value, optionValue]
      : value.filter(v => v !== optionValue);
    
    onChange(newValues);
  };

  // Calculate indeterminate state for "Select All" checkbox
  const allSelected = options.length > 0 && options.every(opt => value.includes(opt.value));
  const someSelected = options.some(opt => value.includes(opt.value));
  const isIndeterminate = someSelected && !allSelected;

  // Handle "Select All" checkbox
  const handleSelectAll = (checked: boolean) => {
    const newValues = checked
      ? options.filter(opt => !opt.disabled).map(opt => opt.value)
      : [];
    onChange(newValues);
  };

  return (
    <div
      className={classNames(
        'ku-checkbox-group',
        {
          'ku-checkbox-group--error': error,
          'ku-checkbox-group--disabled': disabled,
        },
        className
      )}
      role="group"
      aria-labelledby={label ? `${groupId}-label` : undefined}
      aria-describedby={
        (errorMessage || helperText)
          ? `${groupId}-description`
          : undefined
      }
    >
      {label && (
        <div id={`${groupId}-label`} className="ku-checkbox-group__label">
          {label}
        </div>
      )}
      
      {options.length > 1 && (
        <Checkbox
          label="Select All"
          checked={allSelected}
          indeterminate={isIndeterminate}
          onChange={(e) => handleSelectAll(e.target.checked)}
          disabled={disabled}
        />
      )}

      <div className="ku-checkbox-group__options">
        {options.map((option) => (
          <Checkbox
            key={option.value}
            name={name}
            label={option.label}
            checked={value.includes(option.value)}
            onChange={(e) => handleChange(option.value, e.target.checked)}
            disabled={disabled || option.disabled}
          />
        ))}
      </div>

      {(errorMessage || helperText) && (
        <div
          id={`${groupId}-description`}
          className={classNames('ku-checkbox-group__message', {
            'ku-checkbox-group__message--error': error,
          })}
        >
          {error ? errorMessage : helperText}
        </div>
      )}
    </div>
  );
};

CheckboxGroup.displayName = 'CheckboxGroup';

export default CheckboxGroup; 