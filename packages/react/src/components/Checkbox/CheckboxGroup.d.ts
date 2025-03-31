import React from 'react';
import './Checkbox.css';
export interface CheckboxOption {
    /**
     * The value of the checkbox
     */
    value: string;
    /**
     * The label of the checkbox
     */
    label: string;
    /**
     * Whether the checkbox is disabled
     */
    disabled?: boolean;
}
export interface CheckboxGroupProps {
    /**
     * The name of the checkbox group
     */
    name: string;
    /**
     * Array of checkbox options
     */
    options: CheckboxOption[];
    /**
     * Array of selected values
     */
    value: string[];
    /**
     * Callback fired when any checkbox is changed
     */
    onChange: (values: string[]) => void;
    /**
     * Label for the checkbox group
     */
    label?: string;
    /**
     * Whether the group is in error state
     */
    error?: boolean;
    /**
     * Error message to display
     */
    errorMessage?: string;
    /**
     * Helper text for the group
     */
    helperText?: string;
    /**
     * Whether the entire group is disabled
     */
    disabled?: boolean;
    /**
     * Optional class name
     */
    className?: string;
}
export declare const CheckboxGroup: React.FC<CheckboxGroupProps>;
export default CheckboxGroup;
//# sourceMappingURL=CheckboxGroup.d.ts.map