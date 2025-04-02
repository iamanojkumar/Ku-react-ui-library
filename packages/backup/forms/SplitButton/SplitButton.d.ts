import React from 'react';
import { ButtonProps } from '../Button/Button';
import { MenuItemProps } from '../../navigation/Menu/Menu';
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
export declare const SplitButton: React.ForwardRefExoticComponent<SplitButtonProps & React.RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=SplitButton.d.ts.map