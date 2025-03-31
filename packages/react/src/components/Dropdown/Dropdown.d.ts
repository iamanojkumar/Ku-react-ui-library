import React from 'react';
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
export declare const Dropdown: React.ForwardRefExoticComponent<DropdownProps & React.RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=Dropdown.d.ts.map