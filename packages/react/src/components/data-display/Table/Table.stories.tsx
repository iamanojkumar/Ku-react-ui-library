import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableCell,
  TableFooter,
} from './Table';

const meta: Meta<typeof Table> = {
  title: 'Data Display/Table',
  component: Table,
  tags: ['autodocs'],
  argTypes: {
    bordered: {
      control: 'boolean',
      description: 'Whether the table has borders',
    },
    striped: {
      control: 'boolean',
      description: 'Whether the table is striped',
    },
    compact: {
      control: 'boolean',
      description: 'Whether the table is compact',
    },
    hoverable: {
      control: 'boolean',
      description: 'Whether the table has hover effects',
    },
    responsive: {
      control: 'boolean',
      description: 'Whether the table is responsive',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Table>;

// Sample data
const data = [
  { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User' },
  { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'User' },
];

export const Basic: Story = {
  args: {
    bordered: false,
    striped: false,
    compact: false,
    hoverable: false,
    responsive: false,
  },
  render: (args) => (
    <Table {...args}>
      <TableHeader>
        <TableRow>
          <TableCell header>Name</TableCell>
          <TableCell header>Email</TableCell>
          <TableCell header>Role</TableCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((item) => (
          <TableRow key={item.id}>
            <TableCell>{item.name}</TableCell>
            <TableCell>{item.email}</TableCell>
            <TableCell>{item.role}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
};

export const Bordered: Story = {
  args: {
    bordered: true,
  },
  render: (args) => (
    <Table {...args}>
      <TableHeader>
        <TableRow>
          <TableCell header>Name</TableCell>
          <TableCell header>Email</TableCell>
          <TableCell header>Role</TableCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((item) => (
          <TableRow key={item.id}>
            <TableCell>{item.name}</TableCell>
            <TableCell>{item.email}</TableCell>
            <TableCell>{item.role}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
};

export const Striped: Story = {
  args: {
    striped: true,
  },
  render: (args) => (
    <Table {...args}>
      <TableHeader>
        <TableRow>
          <TableCell header>Name</TableCell>
          <TableCell header>Email</TableCell>
          <TableCell header>Role</TableCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((item) => (
          <TableRow key={item.id}>
            <TableCell>{item.name}</TableCell>
            <TableCell>{item.email}</TableCell>
            <TableCell>{item.role}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
};

export const Compact: Story = {
  args: {
    compact: true,
  },
  render: (args) => (
    <Table {...args}>
      <TableHeader>
        <TableRow>
          <TableCell header>Name</TableCell>
          <TableCell header>Email</TableCell>
          <TableCell header>Role</TableCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((item) => (
          <TableRow key={item.id}>
            <TableCell>{item.name}</TableCell>
            <TableCell>{item.email}</TableCell>
            <TableCell>{item.role}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
};

export const Hoverable: Story = {
  args: {
    hoverable: true,
  },
  render: (args) => (
    <Table {...args}>
      <TableHeader>
        <TableRow>
          <TableCell header>Name</TableCell>
          <TableCell header>Email</TableCell>
          <TableCell header>Role</TableCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((item) => (
          <TableRow key={item.id}>
            <TableCell>{item.name}</TableCell>
            <TableCell>{item.email}</TableCell>
            <TableCell>{item.role}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
};

export const Sortable: Story = {
  args: {
    hoverable: true,
  },
  render: (args) => {
    const [sortField, setSortField] = useState<string | null>(null);
    const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');

    const handleSort = (field: string) => {
      if (sortField === field) {
        setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
      } else {
        setSortField(field);
        setSortDirection('asc');
      }
    };

    return (
      <Table {...args}>
        <TableHeader>
          <TableRow>
            <TableCell
              header
              sortable
              sortDirection={sortField === 'name' ? sortDirection : undefined}
              onSort={() => handleSort('name')}
            >
              Name
            </TableCell>
            <TableCell
              header
              sortable
              sortDirection={sortField === 'email' ? sortDirection : undefined}
              onSort={() => handleSort('email')}
            >
              Email
            </TableCell>
            <TableCell
              header
              sortable
              sortDirection={sortField === 'role' ? sortDirection : undefined}
              onSort={() => handleSort('role')}
            >
              Role
            </TableCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.email}</TableCell>
              <TableCell>{item.role}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  },
};

export const WithFooter: Story = {
  args: {
    bordered: true,
  },
  render: (args) => (
    <Table {...args}>
      <TableHeader>
        <TableRow>
          <TableCell header>Name</TableCell>
          <TableCell header>Email</TableCell>
          <TableCell header>Role</TableCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((item) => (
          <TableRow key={item.id}>
            <TableCell>{item.name}</TableCell>
            <TableCell>{item.email}</TableCell>
            <TableCell>{item.role}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={2}>Total Users</TableCell>
          <TableCell>{data.length}</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  ),
};

export const Responsive: Story = {
  args: {
    responsive: true,
    bordered: true,
  },
  render: (args) => (
    <Table {...args}>
      <TableHeader>
        <TableRow>
          <TableCell header>Name</TableCell>
          <TableCell header>Email</TableCell>
          <TableCell header>Role</TableCell>
          <TableCell header>Department</TableCell>
          <TableCell header>Location</TableCell>
          <TableCell header>Status</TableCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((item) => (
          <TableRow key={item.id}>
            <TableCell>{item.name}</TableCell>
            <TableCell>{item.email}</TableCell>
            <TableCell>{item.role}</TableCell>
            <TableCell>Engineering</TableCell>
            <TableCell>San Francisco</TableCell>
            <TableCell>Active</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
}; 