import React from 'react';
import './Divider.css';
export interface DividerProps {
    /** The orientation of the divider */
    orientation?: 'horizontal' | 'vertical';
    /** Whether the divider is decorative (if false, it will have a semantic role) */
    decorative?: boolean;
    /** Optional label for the divider (makes it semantic by default) */
    label?: React.ReactNode;
    /** Additional CSS class name */
    className?: string;
    /** Additional CSS styles */
    style?: React.CSSProperties;
    /** The HTML element to render the divider as */
    as?: 'hr' | 'div';
}
type DividerElement = HTMLDivElement | HTMLHRElement;
/**
 * Divider component for visual content separation
 */
export declare const Divider: React.ForwardRefExoticComponent<DividerProps & React.RefAttributes<DividerElement>>;
export {};
//# sourceMappingURL=Divider.d.ts.map