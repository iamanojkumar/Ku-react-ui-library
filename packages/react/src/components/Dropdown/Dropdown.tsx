import React, { useCallback, useEffect, useRef, useState } from 'react';
import { ChevronDownIcon } from '@ku-design-system/core';
import { Menu, MenuItem } from '../Menu/Menu';
import classNames from 'classnames';
import './Dropdown.css';

export interface DropdownOption {
  value: string;
  label: string;
  disabled?: boolean;
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
  subText?: string;
}

export interface DropdownProps extends Omit<React.ComponentPropsWithoutRef<'div'>, 'onChange'> {
  /**
   * The options to display in the dropdown
   */
  options: DropdownOption[];
  /**
   * The currently selected value
   */
  value?: string;
  /**
   * Callback fired when the selection changes
   */
  onChange?: (value: string) => void;
  /**
   * Placeholder text when no option is selected
   */
  placeholder?: string;
  /**
   * Whether the dropdown is disabled
   */
  disabled?: boolean;
  /**
   * Whether the dropdown is in an error state
   */
  error?: boolean;
  /**
   * Whether the dropdown is in a loading state
   */
  loading?: boolean;
  /**
   * Whether to show a clear button when a value is selected
   */
  clearable?: boolean;
  /**
   * Whether to use a compact style
   */
  dense?: boolean;
}

export const Dropdown = React.forwardRef<HTMLDivElement, DropdownProps>(({
  options,
  value,
  onChange,
  placeholder = 'Select an option',
  disabled = false,
  error = false,
  loading = false,
  clearable = false,
  dense = false,
  className,
  ...props
}, ref) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const selectedOption = options.find(option => option.value === value);

  const handleToggle = () => {
    if (!disabled && !loading) {
      setIsOpen(!isOpen);
    }
  };

  const handleSelect = (optionValue: string) => {
    onChange?.(optionValue);
    setIsOpen(false);
  };

  const handleClear = (event: React.MouseEvent) => {
    event.stopPropagation();
    onChange?.('');
  };

  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, handleClickOutside]);

  return (
    <div
      ref={dropdownRef}
      className={classNames('ku-dropdown', className, {
        'ku-dropdown--open': isOpen,
        'ku-dropdown--disabled': disabled,
        'ku-dropdown--error': error,
        'ku-dropdown--loading': loading,
        'ku-dropdown--dense': dense
      })}
      {...props}
    >
      <button
        ref={buttonRef}
        type="button"
        className="ku-dropdown__trigger"
        onClick={handleToggle}
        disabled={disabled}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <span className="ku-dropdown__trigger-content">
          {selectedOption ? (
            <>
              {selectedOption.leadingIcon && (
                <span className="ku-dropdown__leading-icon">
                  {selectedOption.leadingIcon}
                </span>
              )}
              <span className="ku-dropdown__selected-text">
                {selectedOption.label}
              </span>
            </>
          ) : (
            <span className="ku-dropdown__placeholder">
              {placeholder}
            </span>
          )}
        </span>
        <span className="ku-dropdown__trigger-icons">
          {clearable && selectedOption && (
            <button
              type="button"
              className="ku-dropdown__clear-button"
              onClick={handleClear}
              aria-label="Clear selection"
            >
              ×
            </button>
          )}
          <ChevronDownIcon
            className="ku-dropdown__chevron"
            aria-hidden="true"
          />
        </span>
      </button>

      {isOpen && (
        <div
          ref={menuRef}
          className="ku-dropdown__menu"
          role="listbox"
        >
          <Menu
            dense={dense}
            selectedValue={value}
            onSelect={handleSelect}
          >
            {options.map((option) => (
              <MenuItem
                key={option.value}
                value={option.value}
                disabled={option.disabled}
                leadingIcon={option.leadingIcon}
                trailingIcon={option.trailingIcon}
                subText={option.subText}
              >
                {option.label}
              </MenuItem>
            ))}
          </Menu>
        </div>
      )}
    </div>
  );
});

Dropdown.displayName = 'Dropdown'; 