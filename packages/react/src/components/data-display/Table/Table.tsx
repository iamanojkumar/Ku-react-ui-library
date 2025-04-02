import React, { forwardRef } from 'react';
import classNames from 'classnames';
import './Table.css';

export interface TableProps extends React.TableHTMLAttributes<HTMLTableElement> {
  /** Whether the table has borders */
  bordered?: boolean;
  /** Whether the table is striped */
  striped?: boolean;
  /** Whether the table is compact */
  compact?: boolean;
  /** Whether the table has hover effects */
  hoverable?: boolean;
  /** Whether the table is responsive */
  responsive?: boolean;
  /** Custom class for the table wrapper */
  wrapperClassName?: string;
}

export interface TableHeaderProps extends React.HTMLAttributes<HTMLTableSectionElement> {
  /** Whether the header is sticky */
  sticky?: boolean;
}

export interface TableBodyProps extends React.HTMLAttributes<HTMLTableSectionElement> {}

export interface TableRowProps extends React.HTMLAttributes<HTMLTableRowElement> {
  /** Whether the row is selected */
  selected?: boolean;
}

export interface TableCellProps extends React.TdHTMLAttributes<HTMLTableCellElement> {
  /** Whether the cell is a header cell */
  header?: boolean;
  /** Whether the cell is sortable */
  sortable?: boolean;
  /** Sort direction */
  sortDirection?: 'asc' | 'desc';
  /** Sort handler */
  onSort?: () => void;
}

export interface TableFooterProps extends React.HTMLAttributes<HTMLTableSectionElement> {}

const Table = forwardRef<HTMLTableElement, TableProps>((props, ref) => {
  const {
    bordered = false,
    striped = false,
    compact = false,
    hoverable = false,
    responsive = false,
    className,
    wrapperClassName,
    children,
    ...rest
  } = props;

  const tableClasses = classNames(
    'ku-table',
    {
      'ku-table--bordered': bordered,
      'ku-table--striped': striped,
      'ku-table--compact': compact,
      'ku-table--hoverable': hoverable,
    },
    className
  );

  const wrapperClasses = classNames(
    'ku-table-wrapper',
    {
      'ku-table-wrapper--responsive': responsive,
    },
    wrapperClassName
  );

  return (
    <div className={wrapperClasses}>
      <table ref={ref} className={tableClasses} {...rest}>
        {children}
      </table>
    </div>
  );
});

const TableHeader = forwardRef<HTMLTableSectionElement, TableHeaderProps>((props, ref) => {
  const { sticky = false, className, ...rest } = props;

  const headerClasses = classNames(
    'ku-table__header',
    {
      'ku-table__header--sticky': sticky,
    },
    className
  );

  return <thead ref={ref} className={headerClasses} {...rest} />;
});

const TableBody = forwardRef<HTMLTableSectionElement, TableBodyProps>((props, ref) => {
  const { className, ...rest } = props;

  return <tbody ref={ref} className={classNames('ku-table__body', className)} {...rest} />;
});

const TableRow = forwardRef<HTMLTableRowElement, TableRowProps>((props, ref) => {
  const { selected = false, className, ...rest } = props;

  const rowClasses = classNames(
    'ku-table__row',
    {
      'ku-table__row--selected': selected,
    },
    className
  );

  return <tr ref={ref} className={rowClasses} {...rest} />;
});

const TableCell = forwardRef<HTMLTableCellElement, TableCellProps>((props, ref) => {
  const {
    header = false,
    sortable = false,
    sortDirection,
    onSort,
    className,
    children,
    ...rest
  } = props;

  const cellClasses = classNames(
    'ku-table__cell',
    {
      'ku-table__cell--header': header,
      'ku-table__cell--sortable': sortable,
      [`ku-table__cell--sort-${sortDirection}`]: sortDirection,
    },
    className
  );

  const Component = header ? 'th' : 'td';

  return (
    <Component
      ref={ref}
      className={cellClasses}
      onClick={sortable ? onSort : undefined}
      {...rest}
    >
      {children}
    </Component>
  );
});

const TableFooter = forwardRef<HTMLTableSectionElement, TableFooterProps>((props, ref) => {
  const { className, ...rest } = props;

  return <tfoot ref={ref} className={classNames('ku-table__footer', className)} {...rest} />;
});

Table.displayName = 'Table';
TableHeader.displayName = 'TableHeader';
TableBody.displayName = 'TableBody';
TableRow.displayName = 'TableRow';
TableCell.displayName = 'TableCell';
TableFooter.displayName = 'TableFooter';

export { Table, TableHeader, TableBody, TableRow, TableCell, TableFooter }; 