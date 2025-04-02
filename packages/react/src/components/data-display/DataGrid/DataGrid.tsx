import React, { forwardRef, useState } from 'react';
import classNames from 'classnames';
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableCell,
  TableFooter,
} from '../Table/Table';
import './DataGrid.css';

export interface Column<T> {
  /** Unique key for the column */
  key: string;
  /** Display title for the column */
  title: string;
  /** Function to render cell content */
  render?: (item: T) => React.ReactNode;
  /** Whether the column is sortable */
  sortable?: boolean;
  /** Whether the column is filterable */
  filterable?: boolean;
  /** Width of the column */
  width?: string | number;
}

export interface DataGridProps<T> extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  /** Array of data items */
  data: T[];
  /** Array of column definitions */
  columns: Column<T>[];
  /** Number of items per page */
  pageSize?: number;
  /** Current page number */
  page?: number;
  /** Total number of items */
  total?: number;
  /** Whether to show pagination */
  pagination?: boolean;
  /** Whether to show filters */
  filters?: boolean;
  /** Whether to show row selection */
  selectable?: boolean;
  /** Selected row keys */
  selectedRows?: string[];
  /** Callback when selection changes */
  onSelectionChange?: (selectedKeys: string[]) => void;
  /** Callback when page changes */
  onPageChange?: (page: number) => void;
  /** Callback when filters change */
  onFiltersChange?: (filters: Record<string, string>) => void;
  /** Callback when sorting changes */
  onSortChange?: (sort: { key: string; direction: 'asc' | 'desc' } | null) => void;
  /** Custom class for the grid wrapper */
  wrapperClassName?: string;
}

function DataGridComponent<T extends { id: string }>(
  props: DataGridProps<T>,
  ref: React.ForwardedRef<HTMLDivElement>
) {
  const {
    data,
    columns,
    pageSize = 10,
    page = 1,
    total = data.length,
    pagination = true,
    filters = true,
    selectable = false,
    selectedRows = [],
    onSelectionChange,
    onPageChange,
    onFiltersChange,
    onSortChange,
    className,
    wrapperClassName,
    ...rest
  } = props;

  const [localFilters, setLocalFilters] = useState<Record<string, string>>({});
  const [sortKey, setSortKey] = useState<string | null>(null);
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');

  const handleSort = (key: string) => {
    if (sortKey === key) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortKey(key);
      setSortDirection('asc');
    }
    onSortChange?.(sortKey === key ? { key, direction: sortDirection === 'asc' ? 'desc' : 'asc' } : { key, direction: 'asc' });
  };

  const handleFilter = (key: string, value: string) => {
    const newFilters = { ...localFilters, [key]: value };
    setLocalFilters(newFilters);
    onFiltersChange?.(newFilters);
  };

  const handleSelectAll = (checked: boolean) => {
    const newSelected = checked ? data.map(item => item.id) : [];
    onSelectionChange?.(newSelected);
  };

  const handleSelectRow = (id: string) => {
    const newSelected = selectedRows.includes(id)
      ? selectedRows.filter(key => key !== id)
      : [...selectedRows, id];
    onSelectionChange?.(newSelected);
  };

  const totalPages = Math.ceil(total / pageSize);

  const gridClasses = classNames('ku-data-grid', className);
  const wrapperClasses = classNames('ku-data-grid-wrapper', wrapperClassName);

  return (
    <div ref={ref} className={wrapperClasses} {...rest}>
      {filters && (
        <div className="ku-data-grid-filters">
          {columns.map(column => (
            column.filterable && (
              <input
                key={column.key}
                type="text"
                placeholder={`Filter ${column.title}...`}
                value={localFilters[column.key] || ''}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleFilter(column.key, e.target.value)}
                className="ku-input"
              />
            )
          ))}
        </div>
      )}
      <Table className={gridClasses}>
        <TableHeader>
          <TableRow>
            {selectable && (
              <TableCell header>
                <input
                  type="checkbox"
                  checked={selectedRows.length === data.length}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleSelectAll(e.target.checked)}
                />
              </TableCell>
            )}
            {columns.map(column => (
              <TableCell
                key={column.key}
                header
                sortable={column.sortable}
                sortDirection={sortKey === column.key ? sortDirection : undefined}
                onSort={column.sortable ? () => handleSort(column.key) : undefined}
                style={{ width: column.width }}
              >
                {column.title}
              </TableCell>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map(item => (
            <TableRow
              key={item.id}
              selected={selectedRows.includes(item.id)}
            >
              {selectable && (
                <TableCell>
                  <input
                    type="checkbox"
                    checked={selectedRows.includes(item.id)}
                    onChange={() => handleSelectRow(item.id)}
                  />
                </TableCell>
              )}
              {columns.map(column => (
                <TableCell key={column.key}>
                  {column.render ? column.render(item) : (item as any)[column.key]}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {pagination && (
        <div className="ku-data-grid-pagination">
          <button
            className="ku-button"
            disabled={page === 1}
            onClick={() => onPageChange?.(page - 1)}
          >
            Previous
          </button>
          <span className="ku-data-grid-pagination-info">
            Page {page} of {totalPages}
          </span>
          <button
            className="ku-button"
            disabled={page === totalPages}
            onClick={() => onPageChange?.(page + 1)}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}

DataGridComponent.displayName = 'DataGrid';

export const DataGrid = forwardRef(DataGridComponent) as <T extends { id: string }>(
  props: DataGridProps<T> & { ref?: React.ForwardedRef<HTMLDivElement> }
) => React.ReactElement; 