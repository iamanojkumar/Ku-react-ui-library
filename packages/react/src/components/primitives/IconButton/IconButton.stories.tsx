import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import {
  HeartIcon,
  TrashIcon,
  PlusIcon,
  EditIcon,
  SearchIcon,
  XIcon,
  MenuIcon,
  InfoCircleIcon,
} from '@ku-design-system/core';
import { IconButton } from './IconButton';
import { ThemeProvider } from '../ThemeProvider/ThemeProvider';

const meta = {
  title: 'Components/IconButton',
  component: IconButton,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
A versatile icon button component that supports multiple variants and states.
It follows the KU Design System token system and provides excellent accessibility support.

## Features
- Multiple variants (default, primary, secondary, ghost, danger)
- Multiple sizes (sm, md, lg)
- Loading state
- Disabled state
- Tooltip support
- Dark theme support
- Reduced motion support
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'primary', 'secondary', 'ghost', 'danger'],
      description: 'The variant of the button',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'The size of the button',
    },
    loading: {
      control: 'boolean',
      description: 'Whether the button is in loading state',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the button is disabled',
    },
    showTooltip: {
      control: 'boolean',
      description: 'Whether to show a tooltip',
    },
    tooltipText: {
      control: 'text',
      description: 'The text to show in the tooltip',
    },
  },
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof IconButton>;

// Default icon button
export const Default: Story = {
  args: {
    icon: React.createElement(HeartIcon, { size: 20, stroke: 2 }),
    tooltipText: 'Like',
    showTooltip: true,
  },
};

// All variants
export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <IconButton
        icon={React.createElement(HeartIcon, { size: 20, stroke: 2 })}
        variant="default"
        tooltipText="Default"
        showTooltip
      />
      <IconButton
        icon={React.createElement(PlusIcon, { size: 20, stroke: 2 })}
        variant="primary"
        tooltipText="Primary"
        showTooltip
      />
      <IconButton
        icon={React.createElement(EditIcon, { size: 20, stroke: 2 })}
        variant="secondary"
        tooltipText="Secondary"
        showTooltip
      />
      <IconButton
        icon={React.createElement(SearchIcon, { size: 20, stroke: 2 })}
        variant="ghost"
        tooltipText="Ghost"
        showTooltip
      />
      <IconButton
        icon={React.createElement(TrashIcon, { size: 20, stroke: 2 })}
        variant="danger"
        tooltipText="Danger"
        showTooltip
      />
    </div>
  ),
};

// All sizes
export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <IconButton
        icon={React.createElement(MenuIcon, { size: 16, stroke: 2 })}
        size="sm"
        tooltipText="Small"
        showTooltip
      />
      <IconButton
        icon={React.createElement(MenuIcon, { size: 20, stroke: 2 })}
        size="md"
        tooltipText="Medium"
        showTooltip
      />
      <IconButton
        icon={React.createElement(MenuIcon, { size: 24, stroke: 2 })}
        size="lg"
        tooltipText="Large"
        showTooltip
      />
    </div>
  ),
};

// States
export const States: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <IconButton
        icon={React.createElement(InfoCircleIcon, { size: 20, stroke: 2 })}
        tooltipText="Normal"
        showTooltip
      />
      <IconButton
        icon={React.createElement(InfoCircleIcon, { size: 20, stroke: 2 })}
        loading
        tooltipText="Loading"
        showTooltip
      />
      <IconButton
        icon={React.createElement(InfoCircleIcon, { size: 20, stroke: 2 })}
        disabled
        tooltipText="Disabled"
        showTooltip
      />
    </div>
  ),
};

// With tooltip
export const WithTooltip: Story = {
  args: {
    icon: React.createElement(XIcon, { size: 20, stroke: 2 }),
    tooltipText: 'Close dialog',
    showTooltip: true,
    variant: 'ghost',
  },
}; 