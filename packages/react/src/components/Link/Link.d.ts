import React from 'react';
import type { IconProps } from '@tabler/icons-react';
import './Link.css';
export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    /**
     * The content of the link
     */
    children: React.ReactNode;
    /**
     * Icon to display before the link text
     */
    icon?: React.ComponentType<IconProps>;
    /**
     * Icon to display after the link text
     */
    trailingIcon?: React.ComponentType<IconProps>;
    /**
     * Color variant of the link
     */
    variant?: 'default' | 'primary' | 'secondary' | 'inherit';
    /**
     * Whether the link is disabled
     */
    disabled?: boolean;
    /**
     * Whether the link should open in a new tab
     */
    external?: boolean;
    /**
     * Custom className
     */
    className?: string;
}
export declare const Link: React.ForwardRefExoticComponent<LinkProps & React.RefAttributes<HTMLAnchorElement>>;
//# sourceMappingURL=Link.d.ts.map