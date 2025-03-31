import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { LoadingIndicator } from './LoadingIndicator';

const meta = {
  title: 'Components/LoadingIndicator',
  component: LoadingIndicator,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
A flexible loading indicator component that supports multiple variants, sizes, and accessibility features.

## Features
- Multiple visual variants (spinner, dots, pulse)
- Different sizes (small, medium, large)
- Color inheritance
- Progress indication (when duration is known)
- Reduced motion support
- Proper accessibility labels
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['spinner', 'dots', 'pulse'],
      description: 'The visual style of the loading indicator',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'The size of the loading indicator',
    },
    color: {
      control: 'color',
      description: 'The color of the loading indicator',
    },
    ariaLabel: {
      control: 'text',
      description: 'The accessibility label',
    },
    duration: {
      control: 'number',
      description: 'Loading duration in seconds (if known)',
    },
  },
} satisfies Meta<typeof LoadingIndicator>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic loading indicator
export const Default: Story = {
  args: {
    variant: 'spinner',
    size: 'medium',
    ariaLabel: 'Loading...',
  },
};

// All variants
export const Variants: Story = {
  args: {},
  render: (args) => (
    <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
      <LoadingIndicator {...args} variant="spinner" ariaLabel="Loading with spinner" />
      <LoadingIndicator {...args} variant="dots" ariaLabel="Loading with dots" />
      <LoadingIndicator {...args} variant="pulse" ariaLabel="Loading with pulse" />
    </div>
  ),
};

// Different sizes
export const Sizes: Story = {
  args: {},
  render: (args) => (
    <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
      <LoadingIndicator {...args} size="small" ariaLabel="Small loading indicator" />
      <LoadingIndicator {...args} size="medium" ariaLabel="Medium loading indicator" />
      <LoadingIndicator {...args} size="large" ariaLabel="Large loading indicator" />
    </div>
  ),
};

// Custom colors
export const Colors: Story = {
  args: {},
  render: (args) => (
    <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
      <LoadingIndicator {...args} color="var(--ku-color-primary)" ariaLabel="Primary color" />
      <LoadingIndicator {...args} color="var(--ku-color-success)" ariaLabel="Success color" />
      <LoadingIndicator {...args} color="var(--ku-color-error)" ariaLabel="Error color" />
    </div>
  ),
};

// With known duration
export const WithDuration: Story = {
  args: {
    variant: 'spinner',
    duration: 5,
    ariaLabel: 'Loading... (5 seconds remaining)',
  },
};

// Inside different contexts
export const InContext: Story = {
  args: {},
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <button
        style={{
          padding: '0.5rem 1rem',
          background: 'var(--ku-color-primary)',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
        }}
      >
        <LoadingIndicator {...args} size="small" color="currentColor" ariaLabel="Loading button" />
        <span style={{ marginLeft: '0.5rem' }}>Loading...</span>
      </button>

      <div
        style={{
          padding: '2rem',
          background: 'var(--ku-color-surface)',
          borderRadius: '8px',
          textAlign: 'center',
        }}
      >
        <LoadingIndicator {...args} size="large" ariaLabel="Loading content" />
        <div style={{ marginTop: '1rem' }}>Loading content...</div>
      </div>
    </div>
  ),
}; 