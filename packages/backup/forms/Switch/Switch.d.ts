import React from 'react';
import './Switch.css';
export interface SwitchProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
    /**
     * The label for the switch
     * @required
     */
    label: string;
    /**
     * Whether to hide the label visually (still available for screen readers)
     */
    hideLabel?: boolean;
    /**
     * Description for the switch (for additional context)
     */
    description?: string;
    /**
     * Error message to display
     */
    error?: string;
    /**
     * Whether the switch is in an error state
     */
    hasError?: boolean;
    /**
     * Whether the switch is in a loading state
     */
    isLoading?: boolean;
    /**
     * The size of the switch
     * @default "md"
     */
    size?: 'sm' | 'md' | 'lg';
    /**
     * Additional class name for the wrapper element
     */
    wrapperClassName?: string;
    /**
     * Additional class name for the label element
     */
    labelClassName?: string;
}
export declare const Switch: React.ForwardRefExoticComponent<SwitchProps & React.RefAttributes<HTMLInputElement>>;
//# sourceMappingURL=Switch.d.ts.map