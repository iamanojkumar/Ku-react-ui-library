import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useMemo } from 'react';
import { ChevronLeftIcon, ChevronRightIcon, DotsIcon } from '@ku-design-system/core';
import './Pagination.css';
export const Pagination = ({ currentPage, totalPages, itemsPerPage, itemsPerPageOptions = [10, 20, 50, 100], onPageChange, onItemsPerPageChange, siblingCount = 2, showItemsPerPage = true, className = '', isDeterminate = true, hasNextPage, totalItems, }) => {
    // Generate page numbers to display
    const pageNumbers = useMemo(() => {
        if (!isDeterminate) {
            // For indeterminate pagination, show a window around current page
            const start = Math.max(1, currentPage - siblingCount);
            const end = currentPage + siblingCount;
            return Array.from({ length: end - start + 1 }, (_, i) => start + i);
        }
        if (!totalPages)
            return [];
        const range = (start, end) => Array.from({ length: end - start + 1 }, (_, i) => start + i);
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
    const handlePageClick = (page) => {
        if (page === currentPage)
            return;
        onPageChange(page);
    };
    const renderPageButton = (pageNumber, index) => {
        if (pageNumber < 0) {
            return (_jsx("span", { className: "ku-pagination__dots", children: _jsx(DotsIcon, { size: 20 }) }, `dots-${index}`));
        }
        const isCurrentPage = pageNumber === currentPage;
        const pageLabel = `Page ${pageNumber}${isCurrentPage ? ' (current)' : ''}`;
        return (_jsx("button", { className: `ku-pagination__page${isCurrentPage ? ' ku-pagination__page--current' : ''}`, onClick: () => handlePageClick(pageNumber), "aria-label": pageLabel, "aria-current": isCurrentPage ? 'page' : undefined, disabled: isCurrentPage, children: pageNumber }, pageNumber));
    };
    return (_jsxs("nav", { className: `ku-pagination ${className}`, role: "navigation", "aria-label": "Pagination", children: [showItemsPerPage && (_jsxs("div", { className: "ku-pagination__items-per-page", children: [_jsx("label", { htmlFor: "items-per-page", className: "ku-pagination__items-per-page-label", children: "Items per page:" }), _jsx("select", { id: "items-per-page", className: "ku-pagination__items-per-page-select", value: itemsPerPage, onChange: (e) => onItemsPerPageChange(Number(e.target.value)), "aria-label": "Select number of items per page", children: itemsPerPageOptions.map((option) => (_jsx("option", { value: option, children: option }, option))) })] })), _jsxs("div", { className: "ku-pagination__controls", children: [isDeterminate && (_jsxs("button", { type: "button", className: "ku-pagination__button ku-pagination__button--double", onClick: () => handlePageClick(1), disabled: currentPage === 1, "aria-label": "Go to first page", title: "First page", children: [_jsx(ChevronLeftIcon, { className: "ku-pagination__icon" }), _jsx(ChevronLeftIcon, { className: "ku-pagination__icon" })] })), _jsx("button", { type: "button", className: "ku-pagination__button", onClick: () => handlePageClick(currentPage - 1), disabled: currentPage === 1, "aria-label": "Go to previous page", title: "Previous page", children: _jsx(ChevronLeftIcon, { className: "ku-pagination__icon" }) }), _jsx("div", { className: "ku-pagination__pages", role: "list", children: pageNumbers.map(renderPageButton) }), _jsx("button", { type: "button", className: "ku-pagination__button", onClick: () => handlePageClick(currentPage + 1), disabled: isDeterminate ? currentPage === totalPages : !hasNextPage, "aria-label": "Go to next page", title: "Next page", children: _jsx(ChevronRightIcon, { className: "ku-pagination__icon" }) }), isDeterminate && (_jsxs("button", { type: "button", className: "ku-pagination__button ku-pagination__button--double-right", onClick: () => handlePageClick(totalPages || 1), disabled: currentPage === totalPages, "aria-label": "Go to last page", title: "Last page", children: [_jsx(ChevronRightIcon, { className: "ku-pagination__icon" }), _jsx(ChevronRightIcon, { className: "ku-pagination__icon" })] }))] })] }));
};
//# sourceMappingURL=Pagination.js.map