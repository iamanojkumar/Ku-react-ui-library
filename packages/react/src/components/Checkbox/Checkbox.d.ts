import React from 'react';
import './Checkbox.css';
export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
    /**
     * The label for the checkbox
     */
    label?: string;
    /**
     * Whether to hide the label visually but keep it for screen readers
     * @default false
     */
    hideLabel?: boolean;
    /**
     * Whether the checkbox is in an error state
     * @default false
     */
    error?: boolean;
    /**
     * Error message to display
     */
    errorMessage?: string;
    /**
     * Whether the checkbox is in an indeterminate state
     * @default false
     */
    indeterminate?: boolean;
    /**
     * Optional helper text
     */
    helperText?: string;
    /**
     * Optional class name
     */
    className?: string;
}
export declare const Checkbox: React.ForwardRefExoticComponent<CheckboxProps & React.RefAttributes<HTMLInputElement>>;
export default Checkbox;
//# sourceMappingURL=Checkbox.d.ts.map