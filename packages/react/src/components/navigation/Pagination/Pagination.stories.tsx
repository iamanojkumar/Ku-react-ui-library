import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Pagination } from './Pagination';

const meta = {
  title: 'Components/Pagination',
  component: Pagination,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
A flexible pagination component that supports both determinate and indeterminate pagination.

## Features
- Multiple page display ranges
- Items per page selection
- Indeterminate pagination support
- Full accessibility support
- Dynamic state announcements
- Dark theme support
- Navigation controls:
  - First page (double chevron left)
  - Previous page (single chevron left)
  - Numbered pages with ellipsis
  - Next page (single chevron right)
  - Last page (double chevron right)

## Usage
The component provides two main modes:
1. Determinate pagination (when total number of pages is known)
2. Indeterminate pagination (for infinite scroll or dynamic loading scenarios)

## Accessibility
- Fully keyboard navigable
- ARIA labels for all controls
- Live announcements for page changes
- Proper ARIA roles and states
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    currentPage: {
      control: 'number',
      description: 'Current page number (1-based)',
    },
    totalPages: {
      control: 'number',
      description: 'Total number of pages (optional for indeterminate pagination)',
    },
    itemsPerPage: {
      control: 'number',
      description: 'Number of items shown per page',
    },
    siblingCount: {
      control: 'number',
      description: 'Number of page buttons to show around current page',
      defaultValue: 2,
    },
    isDeterminate: {
      control: 'boolean',
      description: 'Whether the total number of pages is known',
      defaultValue: true,
    },
    showItemsPerPage: {
      control: 'boolean',
      description: 'Whether to show the items per page selector',
      defaultValue: true,
    },
    hasNextPage: {
      control: 'boolean',
      description: 'For indeterminate pagination: whether more pages are available',
    },
    totalItems: {
      control: 'number',
      description: 'Optional: total number of items (for accessibility announcements)',
    },
  },
} satisfies Meta<typeof Pagination>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic pagination
export const Default: Story = {
  args: {
    currentPage: 1,
    totalPages: 10,
    itemsPerPage: 10,
    onPageChange: () => {},
    onItemsPerPageChange: () => {},
  },
};

// Controlled pagination example
export const Controlled: Story = {
  args: {
    currentPage: 1,
    totalPages: 10,
    itemsPerPage: 10,
    onPageChange: () => {},
    onItemsPerPageChange: () => {},
  },
  render: function Render(args) {
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const totalItems = 187;
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    return (
      <div style={{ width: '100%', maxWidth: '800px' }}>
        <div style={{ marginBottom: 'var(--ku-spacing-4)' }}>
          Showing items {(currentPage - 1) * itemsPerPage + 1} to{' '}
          {Math.min(currentPage * itemsPerPage, totalItems)} of {totalItems}
        </div>
        <Pagination
          {...args}
          currentPage={currentPage}
          totalPages={totalPages}
          itemsPerPage={itemsPerPage}
          onPageChange={setCurrentPage}
          onItemsPerPageChange={setItemsPerPage}
          totalItems={totalItems}
        />
      </div>
    );
  },
};

// Many pages example
export const ManyPages: Story = {
  args: {
    currentPage: 5,
    totalPages: 100,
    itemsPerPage: 20,
    onPageChange: () => {},
    onItemsPerPageChange: () => {},
  },
};

// Indeterminate pagination example
export const Indeterminate: Story = {
  args: {
    currentPage: 1,
    itemsPerPage: 10,
    isDeterminate: false,
    onPageChange: () => {},
    onItemsPerPageChange: () => {},
  },
  render: function Render(args) {
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const [hasNextPage, setHasNextPage] = useState(true);

    const handlePageChange = (page: number) => {
      setCurrentPage(page);
      // Simulate running out of pages at page 10
      setHasNextPage(page < 10);
    };

    return (
      <div style={{ width: '100%', maxWidth: '800px' }}>
        <div style={{ marginBottom: 'var(--ku-spacing-4)' }}>
          Loading page {currentPage}...
        </div>
        <Pagination
          {...args}
          currentPage={currentPage}
          itemsPerPage={itemsPerPage}
          onPageChange={handlePageChange}
          onItemsPerPageChange={setItemsPerPage}
          isDeterminate={false}
          hasNextPage={hasNextPage}
        />
      </div>
    );
  },
};

// Custom items per page options
export const CustomItemsPerPage: Story = {
  args: {
    currentPage: 1,
    totalPages: 10,
    itemsPerPage: 25,
    itemsPerPageOptions: [25, 50, 75, 100],
    onPageChange: () => {},
    onItemsPerPageChange: () => {},
  },
}; 