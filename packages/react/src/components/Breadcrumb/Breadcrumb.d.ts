import React from 'react';
import './Breadcrumb.css';
export interface BreadcrumbItemProps {
    /** The content of the breadcrumb item */
    children: React.ReactNode;
    /** Optional icon to display before the content */
    icon?: React.ReactNode;
    /** Whether the item is disabled */
    disabled?: boolean;
    /** URL for the breadcrumb item */
    href?: string;
    /** Click handler for the breadcrumb item */
    onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
    /** Additional CSS class name */
    className?: string;
}
export interface BreadcrumbProps {
    /** Array of breadcrumb items */
    items: BreadcrumbItemProps[];
    /** Custom separator between items */
    separator?: React.ReactNode;
    /** Maximum number of items to show before collapsing */
    maxItems?: number;
    /** Whether to show icons */
    showIcons?: boolean;
    /** Additional CSS class name */
    className?: string;
}
export declare const Breadcrumb: React.FC<BreadcrumbProps>;
//# sourceMappingURL=Breadcrumb.d.ts.map