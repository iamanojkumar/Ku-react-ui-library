import React from 'react';
import './Menu.css';
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
export declare const Menu: React.ForwardRefExoticComponent<MenuProps & React.RefAttributes<HTMLDivElement>>;
export declare const MenuItem: React.ForwardRefExoticComponent<MenuItemProps & React.RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=Menu.d.ts.map