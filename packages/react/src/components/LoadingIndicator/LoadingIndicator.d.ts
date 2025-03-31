import React from 'react';
import './LoadingIndicator.css';
export type LoadingVariant = 'spinner' | 'dots' | 'pulse';
export type LoadingSize = 'small' | 'medium' | 'large';
export interface LoadingIndicatorProps extends React.HTMLAttributes<HTMLDivElement> {
    /**
     * The visual style of the loading indicator
     * @default 'spinner'
     */
    variant?: LoadingVariant;
    /**
     * The size of the loading indicator
     * @default 'medium'
     */
    size?: LoadingSize;
    /**
     * The color variant of the loading indicator
     * Inherits from parent by default
     */
    color?: string;
    /**
     * The label for screen readers
     * @default 'Loading...'
     */
    ariaLabel?: string;
    /**
     * The duration of the loading in seconds (if known)
     */
    duration?: number;
    /**
     * Custom className
     */
    className?: string;
}
export declare const LoadingIndicator: React.ForwardRefExoticComponent<LoadingIndicatorProps & React.RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=LoadingIndicator.d.ts.map