import React from 'react';
import './IconButton.css';
export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    /**
     * The icon to display
     */
    icon: React.ReactNode;
    /**
     * The variant of the button
     * @default 'default'
     */
    variant?: 'default' | 'primary' | 'secondary' | 'ghost' | 'danger';
    /**
     * The size of the button
     * @default 'md'
     */
    size?: 'sm' | 'md' | 'lg';
    /**
     * Whether the button is in a loading state
     * @default false
     */
    loading?: boolean;
    /**
     * Whether to show a tooltip on hover
     * @default false
     */
    showTooltip?: boolean;
    /**
     * The tooltip text
     */
    tooltipText?: string;
    /**
     * Additional CSS class
     */
    className?: string;
}
export declare const IconButton: React.ForwardRefExoticComponent<IconButtonProps & React.RefAttributes<HTMLButtonElement>>;
//# sourceMappingURL=IconButton.d.ts.map