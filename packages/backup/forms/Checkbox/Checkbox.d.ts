import React from 'react';
import './Checkbox.css';
export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'> {
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
     * Whether the checkbox is in a loading state
     * @default false
     */
    loading?: boolean;
    /**
     * Size of the checkbox
     * @default "md"
     */
    size?: 'sm' | 'md' | 'lg';
    /**
     * Optional class name
     */
    className?: string;
    /**
     * Default checked state for uncontrolled usage
     */
    defaultChecked?: boolean;
}
export declare const Checkbox: React.ForwardRefExoticComponent<CheckboxProps & React.RefAttributes<HTMLInputElement>>;
export default Checkbox;
//# sourceMappingURL=Checkbox.d.ts.map