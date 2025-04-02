import React, { useEffect, useMemo, forwardRef } from 'react';
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronsLeftIcon,
  ChevronsRightIcon,
  DotsIcon
} from '@ku-design-system/core';
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

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  itemsPerPage,
  itemsPerPageOptions = [10, 20, 50, 100],
  onPageChange,
  onItemsPerPageChange,
  siblingCount = 2,
  showItemsPerPage = true,
  className = '',
  isDeterminate = true,
  hasNextPage,
  totalItems,
}) => {
  // Generate page numbers to display
  const pageNumbers = useMemo(() => {
    if (!isDeterminate) {
      // For indeterminate pagination, show a window around current page
      const start = Math.max(1, currentPage - siblingCount);
      const end = currentPage + siblingCount;
      return Array.from({ length: end - start + 1 }, (_, i) => start + i);
    }

    if (!totalPages) return [];

    const range = (start: number, end: number) =>
      Array.from({ length: end - start + 1 }, (_, i) => start + i);

    const totalPageNumbers = siblingCount * 2 + 3; // siblings + current + first + last
    const maxPages = totalPageNumbers + 2; // +2 for dots

    // If total pages is less than max, show all pages
    if (totalPages <= maxPages) {
      return range(1, totalPages);
    }

    const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
    const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPages);

    const shouldShowLeftDots = leftSiblingIndex > 2;
    const shouldShowRightDots = rightSiblingIndex < totalPages - 1;

    if (!shouldShowLeftDots && shouldShowRightDots) {
      const leftItemCount = 3 + 2 * siblingCount;
      return [...range(1, leftItemCount), -1, totalPages];
    }

    if (shouldShowLeftDots && !shouldShowRightDots) {
      const rightItemCount = 3 + 2 * siblingCount;
      return [1, -1, ...range(totalPages - rightItemCount + 1, totalPages)];
    }

    return [
      1,
      -1,
      ...range(leftSiblingIndex, rightSiblingIndex),
      -2,
      totalPages,
    ];
  }, [currentPage, totalPages, siblingCount, isDeterminate]);

  // Announce page changes
  useEffect(() => {
    const message = totalItems
      ? `Page ${currentPage} of ${totalPages}, showing ${itemsPerPage} items per page, ${totalItems} items total`
      : `Page ${currentPage}${totalPages ? ` of ${totalPages}` : ''}, showing ${itemsPerPage} items per page`;

    const announcement = document.createElement('div');
    announcement.className = 'ku-pagination__announcement';
    announcement.setAttribute('role', 'status');
    announcement.setAttribute('aria-live', 'polite');
    announcement.textContent = message;
    document.body.appendChild(announcement);

    setTimeout(() => {
      document.body.removeChild(announcement);
    }, 1000);
  }, [currentPage, totalPages, itemsPerPage, totalItems]);

  const handlePageClick = (page: number) => {
    if (page === currentPage) return;
    onPageChange(page);
  };

  const renderPageButton = (pageNumber: number, index: number) => {
    if (pageNumber < 0) {
      return (
        <span key={`dots-${index}`} className="ku-pagination__dots">
          <DotsIcon size={20} />
        </span>
      );
    }

    const isCurrentPage = pageNumber === currentPage;
    const pageLabel = `Page ${pageNumber}${
      isCurrentPage ? ' (current)' : ''
    }`;

    return (
      <button
        key={pageNumber}
        className={`ku-pagination__page${
          isCurrentPage ? ' ku-pagination__page--current' : ''
        }`}
        onClick={() => handlePageClick(pageNumber)}
        aria-label={pageLabel}
        aria-current={isCurrentPage ? 'page' : undefined}
        disabled={isCurrentPage}
      >
        {pageNumber}
      </button>
    );
  };

  return (
    <nav
      className={`ku-pagination ${className}`}
      role="navigation"
      aria-label="Pagination"
    >
      {showItemsPerPage && (
        <div className="ku-pagination__items-per-page">
          <label
            htmlFor="items-per-page"
            className="ku-pagination__items-per-page-label"
          >
            Items per page:
          </label>
          <select
            id="items-per-page"
            className="ku-pagination__items-per-page-select"
            value={itemsPerPage}
            onChange={(e) => onItemsPerPageChange(Number(e.target.value))}
            aria-label="Select number of items per page"
          >
            {itemsPerPageOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      )}

      <div className="ku-pagination__controls">
        {isDeterminate && (
          <button
            type="button"
            className="ku-pagination__button ku-pagination__button--double"
            onClick={() => handlePageClick(1)}
            disabled={currentPage === 1}
            aria-label="Go to first page"
            title="First page"
          >
            <ChevronLeftIcon className="ku-pagination__icon" />
            <ChevronLeftIcon className="ku-pagination__icon" />
          </button>
        )}
        <button
          type="button"
          className="ku-pagination__button"
          onClick={() => handlePageClick(currentPage - 1)}
          disabled={currentPage === 1}
          aria-label="Go to previous page"
          title="Previous page"
        >
          <ChevronLeftIcon className="ku-pagination__icon" />
        </button>

        <div className="ku-pagination__pages" role="list">
          {pageNumbers.map(renderPageButton)}
        </div>

        <button
          type="button"
          className="ku-pagination__button"
          onClick={() => handlePageClick(currentPage + 1)}
          disabled={isDeterminate ? currentPage === totalPages : !hasNextPage}
          aria-label="Go to next page"
          title="Next page"
        >
          <ChevronRightIcon className="ku-pagination__icon" />
        </button>
        {isDeterminate && (
          <button
            type="button"
            className="ku-pagination__button ku-pagination__button--double-right"
            onClick={() => handlePageClick(totalPages || 1)}
            disabled={currentPage === totalPages}
            aria-label="Go to last page"
            title="Last page"
          >
            <ChevronRightIcon className="ku-pagination__icon" />
            <ChevronRightIcon className="ku-pagination__icon" />
          </button>
        )}
      </div>
    </nav>
  );
}; 