import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  PlusIcon,
  TrashIcon,
  DownloadIcon,
  EditIcon,
  SearchIcon,
  CheckIcon,
  SettingsIcon,
  RefreshIcon
} from '@ku-design-system/core/src/icons';

const meta = {
  title: 'Components/Forms/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A versatile button component that supports multiple variants, sizes, and states.'
      }
    }
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'outline', 'ghost'],
      description: 'The visual style variant of the button',
      table: {
        type: { summary: 'primary | secondary | outline | ghost' },
        defaultValue: { summary: 'primary' }
      }
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'The size of the button',
      table: {
        type: { summary: 'sm | md | lg' },
        defaultValue: { summary: 'md' }
      }
    },
    isLoading: {
      control: 'boolean',
      description: 'Whether the button is in a loading state',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      }
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the button is disabled',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      }
    },
    fullWidth: {
      control: 'boolean',
      description: 'Whether the button should take up full width',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      }
    },
    leftIcon: {
      control: 'object',
      description: 'Icon component to display before the button text',
      table: {
        type: { summary: 'ReactNode' }
      }
    },
    rightIcon: {
      control: 'object',
      description: 'Icon component to display after the button text',
      table: {
        type: { summary: 'ReactNode' }
      }
    },
    children: {
      control: 'text',
      description: 'The content to be displayed inside the button',
      table: {
        type: { summary: 'ReactNode' }
      }
    },
    onClick: {
      action: 'clicked',
      description: 'Function called when the button is clicked',
      table: {
        type: { summary: '(event: MouseEvent) => void' },
        category: 'Events'
      }
    }
  }
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;

// Base story with interactive controls
export const Playground: Story = {
  args: {
    children: 'Button',
    variant: 'primary',
    size: 'md',
    isLoading: false,
    disabled: false,
    fullWidth: false
  }
};

export const Overview: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
    </div>
  )
};

export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
    </div>
  )
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </div>
  )
};

export const States: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      <Button isLoading>Loading</Button>
      <Button disabled>Disabled</Button>
    </div>
  )
};

export const Icons: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      {/* Navigation buttons */}
      <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center' }}>
        <Button variant="primary" leftIcon={<ArrowLeftIcon size={16} />}>Back</Button>
        <Button variant="primary" rightIcon={<ArrowRightIcon size={16} />}>Next</Button>
      </div>

      {/* Action buttons */}
      <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center' }}>
        <Button variant="primary" leftIcon={<PlusIcon size={16} />}>Add Item</Button>
        <Button variant="secondary" leftIcon={<EditIcon size={16} />}>Edit</Button>
        <Button variant="outline" leftIcon={<TrashIcon size={16} />}>Delete</Button>
        <Button variant="ghost" leftIcon={<SettingsIcon size={16} />}>Settings</Button>
      </div>

      {/* Function buttons */}
      <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center' }}>
        <Button variant="primary" leftIcon={<SearchIcon size={16} />}>Search</Button>
        <Button variant="primary" leftIcon={<DownloadIcon size={16} />}>Download</Button>
        <Button variant="primary" leftIcon={<RefreshIcon size={16} />}>Refresh</Button>
      </div>

      {/* Form buttons */}
      <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center' }}>
        <Button variant="primary" leftIcon={<CheckIcon size={16} />}>Submit</Button>
        <Button variant="secondary" leftIcon={<SearchIcon size={16} />}>Search Files</Button>
      </div>

      {/* Icon-only buttons */}
      <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center' }}>
        <Button variant="primary" aria-label="Edit" leftIcon={<EditIcon size={16} />}>{''}</Button>
        <Button variant="secondary" aria-label="Settings" leftIcon={<SettingsIcon size={16} />}>{''}</Button>
      </div>
    </div>
  )
};

export const FullWidth: Story = {
  render: () => (
    <div style={{ width: '100%', maxWidth: '500px', padding: '1rem', background: '#f5f5f5' }}>
      <Button fullWidth leftIcon={<DownloadIcon size={16} />}>Full Width Button</Button>
    </div>
  )
}; 