import React from 'react';
import './TextField.css';
export interface TextFieldBaseProps {
    /**
     * The label for the text field
     */
    label?: string;
    /**
     * Icon to display next to the label
     */
    labelIcon?: React.ReactNode;
    /**
     * Helper text to display below the text field
     */
    helperText?: string;
    /**
     * Error message to display below the text field
     */
    error?: string;
    /**
     * The size of the text field
     * @default "md"
     */
    size?: 'sm' | 'md' | 'lg';
    /**
     * The visual style variant of the text field
     * @default "outlined"
     */
    variant?: 'outlined' | 'filled' | 'subtle';
    /**
     * Icon to display at the start of the text field
     */
    startIcon?: React.ReactNode;
    /**
     * Icon to display at the end of the text field
     */
    endIcon?: React.ReactNode;
    /**
     * Text or element to display before the input
     */
    prefix?: React.ReactNode;
    /**
     * Text or element to display after the input
     */
    suffix?: React.ReactNode;
    /**
     * Action button to display at the end of the text field
     */
    actionButton?: React.ReactNode;
    /**
     * Whether to show a password toggle button
     */
    showPasswordToggle?: boolean;
    /**
     * Whether the text field has a leading icon
     */
    hasLeadingIcon?: boolean;
    /**
     * Whether the text field has a trailing icon
     */
    hasTrailingIcon?: boolean;
    /**
     * Additional class name for the wrapper element
     */
    wrapperClassName?: string;
    /**
     * Additional class name for the label element
     */
    labelClassName?: string;
    /**
     * Additional class name for the input element
     */
    inputClassName?: string;
    /**
     * Additional class name for the helper text element
     */
    helperClassName?: string;
    /**
     * Additional class name for the error message element
     */
    errorClassName?: string;
    /**
     * The type of the input field
     */
    type?: string;
}
export declare const TextField: React.ForwardRefExoticComponent<TextFieldBaseProps & Omit<React.InputHTMLAttributes<HTMLInputElement>, "size" | "prefix"> & React.RefAttributes<HTMLInputElement>>;
//# sourceMappingURL=TextField.d.ts.map