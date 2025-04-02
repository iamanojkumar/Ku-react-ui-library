import React from 'react';
import './List.css';
export type ListVariant = 'unordered' | 'ordered' | 'none';
export type ListMarker = 'disc' | 'circle' | 'square' | 'decimal' | 'alpha' | 'roman' | 'none';
export interface ListProps extends React.HTMLAttributes<HTMLUListElement | HTMLOListElement> {
    /**
     * The content of the list (should be ListItem components)
     */
    children: React.ReactNode;
    /**
     * The type of list
     */
    variant?: ListVariant;
    /**
     * The marker style for the list items
     */
    marker?: ListMarker;
    /**
     * Whether the list is nested within another list
     * @internal
     */
    nested?: boolean;
    /**
     * Custom className
     */
    className?: string;
}
export interface ListItemProps extends React.LiHTMLAttributes<HTMLLIElement> {
    /**
     * The content of the list item
     */
    children: React.ReactNode;
    /**
     * Custom className
     */
    className?: string;
}
export declare const ListItem: React.ForwardRefExoticComponent<ListItemProps & React.RefAttributes<HTMLLIElement>>;
export declare const List: React.ForwardRefExoticComponent<ListProps & React.RefAttributes<HTMLOListElement | HTMLUListElement>>;
//# sourceMappingURL=List.d.ts.map