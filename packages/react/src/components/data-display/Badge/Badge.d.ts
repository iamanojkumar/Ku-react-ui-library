import React from 'react';
import './Badge.css';
export type BadgeSize = 'xs' | 'sm' | 'md' | 'lg';
export type BadgeVariant = 'solid' | 'subtle' | 'outline';
export type BadgeColor = 'default' | 'primary' | 'success' | 'warning' | 'error' | 'info';
export type BadgePosition = 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
    /** The size of the badge */
    size?: BadgeSize;
    /** The visual style variant of the badge */
    variant?: BadgeVariant;
    /** The color scheme of the badge */
    color?: BadgeColor;
    /** The content of the badge */
    children?: React.ReactNode;
    /** Icon to display before the content */
    icon?: React.ReactNode;
    /** Whether the badge is dismissible */
    dismissible?: boolean;
    /** Callback when dismiss button is clicked */
    onDismiss?: () => void;
    /** Whether the badge is empty (dot style) */
    empty?: boolean;
    /** Position of the badge when used as a status indicator */
    position?: BadgePosition;
    /** Whether the badge is positioned absolutely */
    absolute?: boolean;
    /** Additional class name */
    className?: string;
}
export declare const Badge: React.ForwardRefExoticComponent<BadgeProps & React.RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=Badge.d.ts.map