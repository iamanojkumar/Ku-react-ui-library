import React from 'react';
import './Pagination.css';
export interface PaginationProps {
    /**
     * Current page number (1-based)
     */
    currentPage: number;
    /**
     * Total number of pages (optional for indeterminate pagination)
     */
    totalPages?: number;
    /**
     * Number of items per page
     */
    itemsPerPage: number;
    /**
     * Available options for items per page
     * @default [10, 20, 50, 100]
     */
    itemsPerPageOptions?: number[];
    /**
     * Callback when page changes
     */
    onPageChange: (page: number) => void;
    /**
     * Callback when items per page changes
     */
    onItemsPerPageChange: (itemsPerPage: number) => void;
    /**
     * Number of pages to show around current page
     * @default 2
     */
    siblingCount?: number;
    /**
     * Whether to show items per page selector
     * @default true
     */
    showItemsPerPage?: boolean;
    /**
     * Custom className
     */
    className?: string;
    /**
     * Whether the total number of pages is known
     * @default true
     */
    isDeterminate?: boolean;
    /**
     * Whether there are more pages available (for indeterminate pagination)
     */
    hasNextPage?: boolean;
    /**
     * Total number of items (if known)
     */
    totalItems?: number;
}
export declare const Pagination: React.FC<PaginationProps>;
//# sourceMappingURL=Pagination.d.ts.map