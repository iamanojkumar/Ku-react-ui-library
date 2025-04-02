import React, { forwardRef, useState, useRef, useEffect } from 'react';
import { ChevronDownIcon, ExclamationCircleIcon, XIcon } from '@ku-design-system/core';
import { Menu, MenuItem } from '../Menu/Menu';
import { Badge } from '../Badge/Badge';
import './ComboSelect.css';

export interface ComboSelectOption {
  value: string;
  label: string;
  icon?: React.ReactNode;
  prefix?: React.ReactNode;
  disabled?: boolean;
}

export interface ComboSelectProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'prefix' | 'value' | 'onChange'> {
  options: ComboSelectOption[];
  label?: string;
  helperText?: string;
  error?: string;
  hasError?: boolean;
  hideLabel?: boolean;
  icon?: React.ReactNode;
  prefix?: React.ReactNode;
  className?: string;
  placeholder?: string;
  isMulti?: boolean;
  value?: string | string[];
  onChange?: (value: string | string[]) => void;
}

export const ComboSelect = forwardRef<HTMLInputElement, ComboSelectProps>((
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
    isMulti = false,
    value,
    onChange,
    'aria-label': ariaLabel,
    ...props
  },
  ref
) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [selectedValues, setSelectedValues] = useState<string[]>(
    isMulti ? (Array.isArray(value) ? value : []) : (value ? [value as string] : [])
  );
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const selectId = id || `select-${Math.random().toString(36).substr(2, 9)}`;
  const helperId = helperText ? `${selectId}-helper` : undefined;
  const errorId = error ? `${selectId}-error` : undefined;
  const describedBy = [helperId, errorId].filter(Boolean).join(' ') || undefined;

  // Filter options based on search value
  const filteredOptions = options.filter(option =>
    option.label.toLowerCase().includes(searchValue.toLowerCase())
  );

  // Handle click outside to close menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Handle option selection
  const handleSelect = (optionValue: string) => {
    if (isMulti) {
      const newValues = selectedValues.includes(optionValue)
        ? selectedValues.filter(v => v !== optionValue)
        : [...selectedValues, optionValue];
      setSelectedValues(newValues);
      onChange?.(newValues);
    } else {
      setSelectedValues([optionValue]);
      onChange?.(optionValue);
      setIsOpen(false);
    }
    setSearchValue('');
  };

  // Remove selected value (for multi-select)
  const handleRemoveValue = (valueToRemove: string) => {
    const newValues = selectedValues.filter(v => v !== valueToRemove);
    setSelectedValues(newValues);
    onChange?.(newValues);
  };

  // Get display value for input
  const getDisplayValue = () => {
    if (searchValue) return searchValue;
    if (!isMulti) {
      const selectedOption = options.find(opt => opt.value === selectedValues[0]);
      return selectedOption?.label || '';
    }
    return '';
  };

  return (
    <div 
      ref={containerRef}
      className={[
        'ku-combo-select',
        disabled && 'ku-combo-select--disabled',
        hasError && 'ku-combo-select--error',
        icon && 'ku-combo-select--has-icon',
        prefix && 'ku-combo-select--has-prefix',
        isOpen && 'ku-combo-select--open',
        className
      ].filter(Boolean).join(' ')}
    >
      {label && (
        <label
          htmlFor={selectId}
          className={[
            'ku-combo-select__label',
            hideLabel && 'ku-combo-select__label--hidden',
            required && 'ku-combo-select__label--required'
          ].filter(Boolean).join(' ')}
        >
          {label}
        </label>
      )}
      
      <div className="ku-combo-select__input-wrapper">
        {icon && (
          <div className="ku-combo-select__icon" aria-hidden="true">
            {icon}
          </div>
        )}
        
        {prefix && (
          <div className="ku-combo-select__prefix" aria-hidden="true">
            {prefix}
          </div>
        )}

        <div className="ku-combo-select__values">
          {isMulti && selectedValues.map(val => {
            const option = options.find(opt => opt.value === val);
            if (!option) return null;
            return (
              <Badge
                key={val}
                size="sm"
                variant="subtle"
                color="default"
                dismissible
                onDismiss={() => handleRemoveValue(val)}
              >
                {option.label}
              </Badge>
            );
          })}
          <input
            {...props}
            ref={inputRef}
            type="text"
            id={selectId}
            disabled={disabled}
            value={getDisplayValue()}
            onChange={(e) => {
              setSearchValue(e.target.value);
              setIsOpen(true);
            }}
            onFocus={() => setIsOpen(true)}
            placeholder={selectedValues.length === 0 ? placeholder : ''}
            aria-invalid={hasError}
            aria-describedby={describedBy}
            aria-label={hideLabel ? label || ariaLabel : ariaLabel}
            aria-expanded={isOpen}
            aria-controls={`${selectId}-menu`}
            aria-haspopup="listbox"
            role="combobox"
            className="ku-combo-select__input"
          />
        </div>

        <div className="ku-combo-select__chevron" aria-hidden="true">
          {ChevronDownIcon({ size: 16 })}
        </div>

        {hasError && (
          <div className="ku-combo-select__error-icon" aria-hidden="true">
            {ExclamationCircleIcon({ size: 16 })}
          </div>
        )}
      </div>

      {isOpen && (
        <div className="ku-combo-select__menu-container">
          <Menu
            id={`${selectId}-menu`}
            role="listbox"
            aria-multiselectable={isMulti}
          >
            {filteredOptions.map(option => (
              <MenuItem
                key={option.value}
                value={option.value}
                disabled={option.disabled}
                leadingIcon={option.icon}
                role="option"
                aria-selected={selectedValues.includes(option.value)}
                onClick={() => handleSelect(option.value)}
              >
                {option.prefix && (
                  <span className="ku-combo-select__option-prefix">
                    {option.prefix}
                  </span>
                )}
                {option.label}
              </MenuItem>
            ))}
            {filteredOptions.length === 0 && (
              <MenuItem value="no-results" disabled>
                No results found
              </MenuItem>
            )}
          </Menu>
        </div>
      )}

      {helperText && (
        <div id={helperId} className="ku-combo-select__helper">
          {helperText}
        </div>
      )}

      {error && (
        <div id={errorId} className="ku-combo-select__error">
          {error}
        </div>
      )}
    </div>
  );
});

ComboSelect.displayName = 'ComboSelect'; 