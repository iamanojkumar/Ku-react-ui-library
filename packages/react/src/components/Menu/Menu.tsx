import React, { createContext, useContext } from 'react';
import { ListItem } from '../ListItem/ListItem';
import classNames from 'classnames';
import './Menu.css';

interface MenuContextValue {
  onSelect?: (value: string) => void;
  selectedValue?: string;
}

const MenuContext = createContext<MenuContextValue>({});

export interface MenuProps extends React.ComponentPropsWithoutRef<'div'> {
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
}

export interface MenuItemProps extends Omit<React.ComponentPropsWithoutRef<'div'>, 'onClick'> {
  /**
   * Value associated with this item
   */
  value: string;
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
}

export const Menu = React.forwardRef<HTMLDivElement, MenuProps>(({
  children,
  className,
  onSelect,
  selectedValue,
  dense = false,
  ...props
}, ref) => {
  return (
    <MenuContext.Provider value={{ onSelect, selectedValue }}>
      <div
        ref={ref}
        role="menu"
        className={classNames('ku-menu', className, {
          'ku-menu--dense': dense
        })}
        {...props}
      >
        {children}
      </div>
    </MenuContext.Provider>
  );
});

export const MenuItem = React.forwardRef<HTMLDivElement, MenuItemProps>(({
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
      className={classNames('ku-menu-item', className)}
      onClick={handleClick}
      selected={isSelected}
      disabled={disabled}
      loading={loading}
      leadingIcon={leadingIcon}
      trailingIcon={
        <>
          {shortcutText && (
            <span className="ku-menu-item__shortcut">{shortcutText}</span>
          )}
          {trailingIcon}
        </>
      }
      showLeadingIcon={!!leadingIcon}
      showTrailingIcon1={!!(shortcutText || trailingIcon)}
      subText={subText}
      showSubText={!!subText}
      clickable
      {...props}
    >
      {children}
    </ListItem>
  );
});

Menu.displayName = 'Menu';
MenuItem.displayName = 'MenuItem'; 