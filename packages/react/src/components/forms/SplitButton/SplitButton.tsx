import React, { useState, useRef } from 'react';
import { Button, ButtonProps } from '../Button/Button';
import { Menu, MenuItem, MenuItemProps } from '../../navigation/Menu/Menu';
import { ChevronDownIcon } from '@ku-design-system/core';
import classNames from 'classnames';
import './SplitButton.css';

export interface SplitButtonOption extends Omit<MenuItemProps, 'onClick'> {
  label: string;
  onClick: () => void;
}

export interface SplitButtonProps extends Omit<ButtonProps, 'onClick'> {
  /**
   * Primary action callback
   */
  onClick: () => void;
  
  /**
   * Array of menu options
   */
  options: SplitButtonOption[];
  
  /**
   * Whether the menu is open
   */
  open?: boolean;
  
  /**
   * Callback when menu open state changes
   */
  onOpenChange?: (open: boolean) => void;
}

export const SplitButton = React.forwardRef<HTMLDivElement, SplitButtonProps>(({
  children,
  onClick,
  options,
  variant = 'primary',
  size = 'md',
  disabled = false,
  className,
  open: controlledOpen,
  onOpenChange,
  ...props
}, ref) => {
  const [uncontrolledOpen, setUncontrolledOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  const isOpen = controlledOpen ?? uncontrolledOpen;
  const setIsOpen = (newOpen: boolean) => {
    setUncontrolledOpen(newOpen);
    onOpenChange?.(newOpen);
  };

  // Close menu when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        !triggerRef.current?.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  return (
    <div 
      ref={ref}
      className={classNames(
        'ku-split-button',
        `ku-split-button--${variant}`,
        `ku-split-button--${size}`,
        className
      )}
    >
      <Button
        variant={variant}
        size={size}
        disabled={disabled}
        onClick={onClick}
        className="ku-split-button__main"
        {...props}
      >
        {children}
      </Button>

      <Button
        ref={triggerRef}
        variant={variant}
        size={size}
        disabled={disabled}
        onClick={() => setIsOpen(!isOpen)}
        className="ku-split-button__trigger"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <ChevronDownIcon size={16} />
      </Button>

      {isOpen && (
        <div ref={menuRef} className="ku-split-button__menu">
          <Menu>
            {options.map((option, index) => (
              <MenuItem
                key={index}
                value={option.value}
                leadingIcon={option.leadingIcon}
                trailingIcon={option.trailingIcon}
                disabled={option.disabled}
                onClick={() => {
                  option.onClick();
                  setIsOpen(false);
                }}
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

SplitButton.displayName = 'SplitButton'; 