import React from 'react';
import './Checkbox.css';
export interface CheckboxGroupOption {
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
     * The label of the checkbox group
     */
    label: string;
    /**
     * The options for the checkbox group
     */
    options: CheckboxGroupOption[];
    /**
     * The selected values
     */
    value: string[];
    /**
     * Callback when selection changes
     */
    onChange: (value: string[]) => void;
    /**
     * Whether the checkbox group is in error state
     */
    error?: boolean;
    /**
     * Error message to display
     */
    errorMessage?: string;
    /**
     * Helper text to display
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