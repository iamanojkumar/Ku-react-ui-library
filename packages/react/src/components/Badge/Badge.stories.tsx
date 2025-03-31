import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { InfoCircleIcon } from '@ku-design-system/core';
import { Badge } from './Badge';

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg'],
      defaultValue: 'md',
    },
    variant: {
      control: 'select',
      options: ['solid', 'subtle', 'outline'],
      defaultValue: 'solid',
    },
    color: {
      control: 'select',
      options: ['default', 'primary', 'success', 'warning', 'error', 'info'],
      defaultValue: 'default',
    },
    dismissible: {
      control: 'boolean',
      defaultValue: false,
    },
    empty: {
      control: 'boolean',
      defaultValue: false,
    },
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

// Basic badge
export const Basic: Story = {
  args: {
    children: 'Badge',
    size: 'md',
    variant: 'solid',
    color: 'primary',
  },
};

// Different variants
export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <Badge variant="solid">Solid</Badge>
      <Badge variant="subtle">Subtle</Badge>
      <Badge variant="outline">Outline</Badge>
    </div>
  ),
};

// Different sizes
export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <Badge size="xs">Extra Small</Badge>
      <Badge size="sm">Small</Badge>
      <Badge size="md">Medium</Badge>
      <Badge size="lg">Large</Badge>
    </div>
  ),
};

// Different colors
export const Colors: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <Badge color="default">Default</Badge>
      <Badge color="primary">Primary</Badge>
      <Badge color="success">Success</Badge>
      <Badge color="warning">Warning</Badge>
      <Badge color="error">Error</Badge>
      <Badge color="info">Info</Badge>
    </div>
  ),
};

// With icons
export const WithIcons: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <Badge
        icon={React.createElement(InfoCircleIcon, { size: 12, stroke: 2 })}
        color="warning"
      >
        With Icon
      </Badge>
    </div>
  ),
};

// Dismissible
export const Dismissible: Story = {
  args: {
    children: 'Click × to dismiss',
    dismissible: true,
    onDismiss: () => alert('Badge dismissed!'),
  },
};

// Empty (dot)
export const Empty: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <Badge empty color="success" />
      <Badge empty color="warning" />
      <Badge empty color="error" />
    </div>
  ),
};

// Positioned
export const Positioned: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '3rem', padding: '2rem' }}>
      <div style={{ position: 'relative', width: '40px', height: '40px', background: '#eee' }}>
        <Badge empty color="error" position="top-right" absolute />
      </div>
      <div style={{ position: 'relative', width: '40px', height: '40px', background: '#eee' }}>
        <Badge color="primary" size="xs" position="bottom-right" absolute>
          99+
        </Badge>
      </div>
    </div>
  ),
}; 