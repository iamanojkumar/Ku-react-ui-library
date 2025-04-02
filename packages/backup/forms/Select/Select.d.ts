import React from 'react';
import './Select.css';
export interface SelectOption {
    /**
     * The value of the option
     */
    value: string;
    /**
     * The label to display for the option
     */
    label: string;
    /**
     * Optional icon to display before the option
     */
    icon?: React.ReactNode;
    /**
     * Optional prefix content (e.g., country flag)
     */
    prefix?: React.ReactNode;
    /**
     * Whether the option is disabled
     */
    disabled?: boolean;
}
export interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'prefix'> {
    /**
     * The options to display in the select
     */
    options: SelectOption[];
    /**
     * The label for the select
     */
    label?: string;
    /**
     * Additional helper text
     */
    helperText?: string;
    /**
     * Error message to display
     */
    error?: string;
    /**
     * Whether the select is in an error state
     */
    hasError?: boolean;
    /**
     * Hide the label visually but keep it accessible to screen readers
     */
    hideLabel?: boolean;
    /**
     * Icon to display at the start of the select
     */
    icon?: React.ReactNode;
    /**
     * Prefix content to display before the value
     */
    prefix?: React.ReactNode;
    /**
     * Additional class name
     */
    className?: string;
    /**
     * Placeholder text when no value is selected
     */
    placeholder?: string;
}
export declare const Select: React.ForwardRefExoticComponent<SelectProps & React.RefAttributes<HTMLSelectElement>>;
//# sourceMappingURL=Select.d.ts.map