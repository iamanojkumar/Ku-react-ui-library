import React from 'react';
import classNames from 'classnames';
import { Checkbox } from './Checkbox';
import './Checkbox.css';

export interface CheckboxGroupOption {
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
   * The label of the checkbox group
   */
  label: string;
  
  /**
   * The options for the checkbox group
   */
  options: CheckboxGroupOption[];
  
  /**
   * The selected values
   */
  value: string[];
  
  /**
   * Callback when selection changes
   */
  onChange: (value: string[]) => void;
  
  /**
   * Whether the checkbox group is in error state
   */
  error?: boolean;
  
  /**
   * Error message to display
   */
  errorMessage?: string;
  
  /**
   * Helper text to display
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
  label,
  options,
  value = [],
  onChange,
  error = false,
  errorMessage,
  helperText,
  disabled = false,
  className,
}) => {
  const [selectAllChecked, setSelectAllChecked] = React.useState(false);
  const [isIndeterminate, setIsIndeterminate] = React.useState(false);

  // Update select all state when values change
  React.useEffect(() => {
    const enabledOptions = options.filter(opt => !opt.disabled);
    const selectedEnabledCount = value.filter(v => 
      enabledOptions.some(opt => opt.value === v)
    ).length;

    setSelectAllChecked(selectedEnabledCount === enabledOptions.length && enabledOptions.length > 0);
    setIsIndeterminate(selectedEnabledCount > 0 && selectedEnabledCount < enabledOptions.length);
  }, [value, options]);

  const handleSelectAll = (checked: boolean) => {
    if (disabled) return;
    
    const newValues = checked
      ? options
          .filter(opt => !opt.disabled)
          .map(opt => opt.value)
      : [];
    
    onChange(newValues);
  };

  const handleOptionChange = (optionValue: string, checked: boolean) => {
    if (disabled) return;

    const newValues = checked
      ? [...value, optionValue]
      : value.filter(v => v !== optionValue);
    
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
      aria-labelledby={`${name}-group-label`}
    >
      <div id={`${name}-group-label`} className="ku-checkbox-group__label">
        {label}
      </div>
      <div className="ku-checkbox-group__options">
        {options.length > 1 && (
          <Checkbox
            label="Select All"
            checked={selectAllChecked}
            indeterminate={isIndeterminate}
            onChange={(e) => handleSelectAll(e.target.checked)}
            disabled={disabled}
            error={error}
          />
        )}
        {options.map((option) => (
          <Checkbox
            key={option.value}
            name={name}
            label={option.label}
            checked={value.includes(option.value)}
            onChange={(e) => handleOptionChange(option.value, e.target.checked)}
            disabled={disabled || option.disabled}
            error={error}
          />
        ))}
      </div>
      {(errorMessage || helperText) && (
        <div
          className={classNames('ku-checkbox-group__message', {
            'ku-checkbox-group__message--error': error,
          })}
          role={error ? 'alert' : 'status'}
        >
          {error ? errorMessage : helperText}
        </div>
      )}
    </div>
  );
};

export default CheckboxGroup; 