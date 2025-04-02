import React from 'react';
import './Radio.css';
export interface RadioProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
    /**
     * The label for the radio button
     */
    label?: string;
    /**
     * Additional description text
     */
    description?: string;
    /**
     * Error message to display
     */
    error?: string;
    /**
     * Whether the radio is in an error state
     */
    hasError?: boolean;
    /**
     * Hide the label visually but keep it accessible to screen readers
     */
    hideLabel?: boolean;
    /**
     * Additional class name
     */
    className?: string;
}
export interface RadioGroupProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
    /**
     * The name attribute for the radio group
     */
    name: string;
    /**
     * The currently selected value
     */
    value?: string;
    /**
     * Callback when selection changes
     */
    onChange?: (value: string) => void;
    /**
     * Label for the radio group
     */
    label?: string;
    /**
     * Whether the radio group is required
     */
    required?: boolean;
    /**
     * Error message to display
     */
    error?: string;
    /**
     * Additional class name
     */
    className?: string;
}
export declare const Radio: React.ForwardRefExoticComponent<RadioProps & React.RefAttributes<HTMLInputElement>>;
export declare const RadioGroup: React.ForwardRefExoticComponent<RadioGroupProps & React.RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=Radio.d.ts.map