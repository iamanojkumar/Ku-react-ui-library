import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { DataGrid, Column } from './DataGrid';

interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  status: string;
}

const meta = {
  title: 'Data Display/DataGrid',
  component: DataGrid,
  tags: ['autodocs'],
  argTypes: {
    pagination: {
      control: 'boolean',
      description: 'Whether to show pagination',
    },
    filters: {
      control: 'boolean',
      description: 'Whether to show filters',
    },
    selectable: {
      control: 'boolean',
      description: 'Whether to show row selection',
    },
    pageSize: {
      control: 'number',
      description: 'Number of items per page',
    },
  },
} satisfies Meta<typeof DataGrid<User>>;

export default meta;
type Story = StoryObj<typeof DataGrid<User>>;

// Sample data
const data: User[] = [
  { id: '1', name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'Active' },
  { id: '2', name: 'Jane Smith', email: 'jane@example.com', role: 'User', status: 'Active' },
  { id: '3', name: 'Bob Johnson', email: 'bob@example.com', role: 'User', status: 'Inactive' },
  { id: '4', name: 'Alice Brown', email: 'alice@example.com', role: 'Admin', status: 'Active' },
  { id: '5', name: 'Charlie Wilson', email: 'charlie@example.com', role: 'User', status: 'Inactive' },
];

// Column definitions
const columns: Column<User>[] = [
  {
    key: 'name',
    title: 'Name',
    sortable: true,
    filterable: true,
  },
  {
    key: 'email',
    title: 'Email',
    sortable: true,
    filterable: true,
  },
  {
    key: 'role',
    title: 'Role',
    sortable: true,
    filterable: true,
  },
  {
    key: 'status',
    title: 'Status',
    sortable: true,
    filterable: true,
    render: (item) => (
      <span style={{ color: item.status === 'Active' ? 'green' : 'red' }}>
        {item.status}
      </span>
    ),
  },
];

export const Basic: Story = {
  render: () => (
    <DataGrid<User>
      data={data}
      columns={columns}
    />
  ),
};

export const WithPagination: Story = {
  render: () => (
    <DataGrid<User>
      data={data}
      columns={columns}
      pagination
      pageSize={2}
    />
  ),
};

export const WithFilters: Story = {
  render: () => (
    <DataGrid<User>
      data={data}
      columns={columns}
      filters
    />
  ),
};

export const Selectable: Story = {
  render: () => (
    <DataGrid<User>
      data={data}
      columns={columns}
      selectable
    />
  ),
};

export const FullFeatured: Story = {
  render: () => (
    <DataGrid<User>
      data={data}
      columns={columns}
      pagination
      filters
      selectable
      pageSize={2}
    />
  ),
};

export const CustomStyling: Story = {
  render: () => (
    <DataGrid<User>
      data={data}
      columns={columns.map(column => ({
        ...column,
        width: column.key === 'name' ? '200px' : undefined,
      }))}
      pagination
      filters
      selectable
      className="custom-grid"
    />
  ),
};

export const Controlled: Story = {
  render: () => {
    const [page, setPage] = useState(1);
    const [selectedRows, setSelectedRows] = useState<string[]>([]);
    const [filters, setFilters] = useState<Record<string, string>>({});
    const [sort, setSort] = useState<{ key: string; direction: 'asc' | 'desc' } | null>(null);

    return (
      <DataGrid<User>
        data={data}
        columns={columns}
        page={page}
        selectedRows={selectedRows}
        onPageChange={setPage}
        onSelectionChange={setSelectedRows}
        onFiltersChange={setFilters}
        onSortChange={setSort}
        pagination
        filters
        selectable
      />
    );
  },
}; 