import React, { createContext, useContext } from 'react';
import { List, ListItem } from '../../data-display/List/List';
import classNames from 'classnames';
import './Menu.css';

interface MenuContextValue {
  onSelect?: (value: string) => void;
  selectedValue?: string;
}

const MenuContext = createContext<MenuContextValue>({});

export interface MenuProps {
  /**
   * The content of the menu
   */
  children: React.ReactNode;
  /**
   * Callback fired when a menu item is selected
   */
  onSelect?: (value: string) => void;
  /**
   * The currently selected value
   */
  selectedValue?: string;
  /**
   * Whether the menu items should be compact
   */
  dense?: boolean;
  /**
   * Additional CSS class name
   */
  className?: string;
}

export interface MenuItemProps {
  /**
   * Value associated with this item
   */
  value: string;
  /**
   * The content of the menu item
   */
  children: React.ReactNode;
  /**
   * Icon to display before the item text
   */
  leadingIcon?: React.ReactNode;
  /**
   * Icon to display after the item text
   */
  trailingIcon?: React.ReactNode;
  /**
   * Additional text to display below the item text
   */
  subText?: string;
  /**
   * Whether the item is disabled
   */
  disabled?: boolean;
  /**
   * Whether the item is in a loading state
   */
  loading?: boolean;
  /**
   * Keyboard shortcut text to display
   */
  shortcutText?: string;
  /**
   * Callback fired when the item is clicked
   */
  onClick?: () => void;
  /**
   * Additional CSS class name
   */
  className?: string;
}

export const Menu = React.forwardRef<HTMLUListElement, MenuProps>(({
  children,
  className,
  onSelect,
  selectedValue,
  dense = false,
  ...props
}, ref) => {
  return (
    <MenuContext.Provider value={{ onSelect, selectedValue }}>
      <List
        ref={ref}
        variant="none"
        className={classNames('ku-menu', className, {
          'ku-menu--dense': dense
        })}
        role="menu"
        {...props}
      >
        {children}
      </List>
    </MenuContext.Provider>
  );
});

export const MenuItem = React.forwardRef<HTMLLIElement, MenuItemProps>(({
  children,
  className,
  value,
  leadingIcon,
  trailingIcon,
  subText,
  disabled,
  loading,
  shortcutText,
  onClick,
  ...props
}, ref) => {
  const { onSelect, selectedValue } = useContext(MenuContext);
  const isSelected = selectedValue === value;

  const handleClick = () => {
    if (!disabled && !loading) {
      onSelect?.(value);
      onClick?.();
    }
  };

  return (
    <ListItem
      ref={ref}
      role="menuitem"
      className={classNames('ku-menu-item', className, {
        'ku-menu-item--selected': isSelected,
        'ku-menu-item--disabled': disabled,
        'ku-menu-item--loading': loading
      })}
      onClick={handleClick}
      {...props}
    >
      {leadingIcon && (
        <span className="ku-menu-item__icon ku-menu-item__icon--leading">
          {leadingIcon}
        </span>
      )}
      <span className="ku-menu-item__content">
        {children}
        {subText && <span className="ku-menu-item__subtext">{subText}</span>}
      </span>
      {(shortcutText || trailingIcon) && (
        <span className="ku-menu-item__icon ku-menu-item__icon--trailing">
          {shortcutText && (
            <span className="ku-menu-item__shortcut">{shortcutText}</span>
          )}
          {trailingIcon}
        </span>
      )}
    </ListItem>
  );
});

Menu.displayName = 'Menu';
MenuItem.displayName = 'MenuItem'; 