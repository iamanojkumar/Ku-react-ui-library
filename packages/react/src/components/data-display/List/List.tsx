import React, { forwardRef } from 'react';
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

export const ListItem = forwardRef<HTMLLIElement, ListItemProps>(
  ({ children, className = '', ...props }, ref) => {
    return (
      <li ref={ref} className={`ku-list__item ${className}`} {...props}>
        {children}
      </li>
    );
  }
);

ListItem.displayName = 'ListItem';

export const List = forwardRef<HTMLUListElement | HTMLOListElement, ListProps>(
  (
    {
      children,
      variant = 'unordered',
      marker = 'disc',
      nested = false,
      className = '',
      ...props
    },
    ref
  ) => {
    const isOrdered = variant === 'ordered';
    const Component = isOrdered ? 'ol' : 'ul';

    // Get the marker style class
    const getMarkerClass = () => {
      if (variant === 'none') return 'ku-list--no-marker';
      return `ku-list--${marker}`;
    };

    // Count direct ListItem children for aria-count
    const itemCount = React.Children.toArray(children).filter(
      (child) => React.isValidElement(child) && child.type === ListItem
    ).length;

    return (
      <Component
        ref={ref as any}
        className={`ku-list ${getMarkerClass()} ${nested ? 'ku-list--nested' : ''} ${className}`}
        role={variant === 'none' ? 'list' : undefined}
        aria-label={`${variant} list with ${itemCount} items`}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

List.displayName = 'List'; 