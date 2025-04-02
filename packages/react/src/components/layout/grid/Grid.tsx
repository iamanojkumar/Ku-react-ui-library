import React, { forwardRef } from 'react';
import classNames from 'classnames';
import './Grid.css';

export interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Number of columns in the grid */
  columns?: 1 | 2 | 3 | 4 | 5 | 6 | 8 | 10 | 12;
  /** Gap between grid items */
  gap?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  /** Whether to make the grid responsive */
  responsive?: boolean;
  /** Whether to make the grid equal height */
  equalHeight?: boolean;
  /** Whether to make the grid auto-fit */
  autoFit?: boolean;
  /** Whether to make the grid auto-fill */
  autoFill?: boolean;
  /** Whether to make the grid auto-columns */
  autoColumns?: boolean;
  /** Whether to make the grid auto-rows */
  autoRows?: boolean;
}

const Grid = forwardRef<HTMLDivElement, GridProps>(
  (
    {
      columns = 12,
      gap = 'md',
      responsive = true,
      equalHeight = false,
      autoFit = false,
      autoFill = false,
      autoColumns = false,
      autoRows = false,
      className,
      ...rest
    },
    ref
  ) => {
    const gridClasses = classNames(
      'ku-grid',
      {
        [`ku-grid--${columns}-columns`]: columns,
        [`ku-grid--gap-${gap}`]: gap,
        'ku-grid--responsive': responsive,
        'ku-grid--equal-height': equalHeight,
        'ku-grid--auto-fit': autoFit,
        'ku-grid--auto-fill': autoFill,
        'ku-grid--auto-columns': autoColumns,
        'ku-grid--auto-rows': autoRows,
      },
      className
    );

    return <div ref={ref} className={gridClasses} {...rest} />;
  }
);

Grid.displayName = 'Grid';

export { Grid }; 