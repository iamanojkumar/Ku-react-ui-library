import React from 'react';
import './Button.css';
export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    /**
     * The variant of the button
     * @default 'primary'
     */
    variant?: ButtonVariant;
    /**
     * The size of the button
     * @default 'md'
     */
    size?: ButtonSize;
    /**
     * Whether the button is in a loading state
     * @default false
     */
    isLoading?: boolean;
    /**
     * Optional icon to show before the button text
     */
    leftIcon?: React.ReactNode;
    /**
     * Optional icon to show after the button text
     */
    rightIcon?: React.ReactNode;
    /**
     * Optional class name
     */
    className?: string;
    /**
     * Whether the button should take up the full width of its container
     * @default false
     */
    fullWidth?: boolean;
    /**
     * The loading text to be announced to screen readers
     * @default 'Loading, please wait'
     */
    loadingText?: string;
    /**
     * Whether to show the spinner when loading
     * @default true
     */
    spinnerInButton?: boolean;
}
export declare const Button: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>>;
export default Button;
//# sourceMappingURL=Button.d.ts.map