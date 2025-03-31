import React, { ReactNode } from 'react';
import './ListItem.css';

export interface ListItemProps extends React.HTMLAttributes<HTMLDivElement> {
  /** The main text content of the list item */
  children: ReactNode;
  /** Optional subtext to display below the main text */
  subText?: string;
  /** Whether to show subtext */
  showSubText?: boolean;
  /** Leading icon component */
  leadingIcon?: ReactNode;
  /** Whether to show the leading icon */
  showLeadingIcon?: boolean;
  /** First trailing icon component */
  trailingIcon1?: ReactNode;
  /** Whether to show the first trailing icon */
  showTrailingIcon1?: boolean;
  /** Second trailing icon component */
  trailingIcon2?: ReactNode;
  /** Whether to show the second trailing icon */
  showTrailingIcon2?: boolean;
  /** Whether to show a checkbox */
  showCheckbox?: boolean;
  /** Whether the checkbox is checked */
  checked?: boolean;
  /** Whether the item is disabled */
  disabled?: boolean;
  /** Whether the item is in loading state */
  loading?: boolean;
  /** Whether the item is clickable */
  clickable?: boolean;
  /** Callback when the item is clicked */
  onClick?: () => void;
  /** Additional CSS class */
  className?: string;
  /** Whether the item is selected/active */
  selected?: boolean;
}

export const ListItem = React.forwardRef<HTMLDivElement, ListItemProps>(({
  children,
  subText,
  showSubText = false,
  leadingIcon,
  showLeadingIcon = false,
  trailingIcon1,
  showTrailingIcon1 = false,
  trailingIcon2,
  showTrailingIcon2 = false,
  showCheckbox = false,
  checked = false,
  selected = false,
  disabled = false,
  loading = false,
  clickable = false,
  className = '',
  onClick,
  ...props
}, ref) => {
  const baseClasses = [
    'ku-list-item',
    clickable && 'ku-list-item--clickable',
    selected && 'ku-list-item--selected',
    disabled && 'ku-list-item--disabled',
    loading && 'ku-list-item--loading',
    className,
  ].filter(Boolean).join(' ');

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (disabled || loading) return;
    
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      onClick?.();
    }
  };

  return (
    <div 
      {...props}
      ref={ref}
      className={baseClasses}
      onClick={disabled || loading ? undefined : onClick}
      onKeyDown={handleKeyDown}
      role={clickable ? 'button' : 'listitem'}
      tabIndex={clickable && !disabled && !loading ? 0 : undefined}
      aria-disabled={disabled}
      aria-selected={selected}
      aria-busy={loading}
    >
      <div className="ku-list-item__content">
        {showCheckbox && (
          <div className="ku-list-item__checkbox">
            <input
              type="checkbox"
              checked={checked}
              disabled={disabled || loading}
              onChange={() => {}}
              aria-label="List item checkbox"
            />
          </div>
        )}
        
        {showLeadingIcon && leadingIcon && (
          <div className="ku-list-item__leading-icon">
            {leadingIcon}
          </div>
        )}
        
        <div className="ku-list-item__text">
          <div className="ku-list-item__primary-text">{children}</div>
          {showSubText && subText && (
            <div className="ku-list-item__sub-text">{subText}</div>
          )}
        </div>
        
        {showTrailingIcon1 && trailingIcon1 && (
          <div className="ku-list-item__trailing-icon">
            {trailingIcon1}
          </div>
        )}
        
        {showTrailingIcon2 && trailingIcon2 && (
          <div className="ku-list-item__trailing-icon">
            {trailingIcon2}
          </div>
        )}
      </div>
      
      {loading && (
        <div className="ku-list-item__loading-indicator" aria-hidden="true">
          <div className="ku-list-item__loading-spinner" />
        </div>
      )}
    </div>
  );
});

ListItem.displayName = 'ListItem'; 