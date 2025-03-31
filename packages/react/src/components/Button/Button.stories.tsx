import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ArrowLeftIcon, ArrowRightIcon } from '@ku-design-system/core';
import { Button } from './Button';

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
A versatile button component that supports multiple variants, sizes, and states.
It follows the KU Design System token system and provides excellent accessibility support.

## Features
- Multiple visual variants (primary, secondary, outline, ghost)
- Three sizes (small, medium, large)
- Loading states with customizable spinner
- Icon support (left and right)
- Full width option
- Keyboard navigation and screen reader support
- Reduced motion support
- High contrast mode support
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'outline', 'ghost'],
      description: 'The visual style variant of the button',
      table: {
        defaultValue: { summary: 'primary' },
      },
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'The size of the button',
      table: {
        defaultValue: { summary: 'md' },
      },
    },
    isLoading: {
      control: 'boolean',
      description: 'Whether the button is in a loading state',
      table: {
        defaultValue: { summary: false },
      },
    },
    spinnerInButton: {
      control: 'boolean',
      description: 'Whether to show the loading spinner',
      table: {
        defaultValue: { summary: true },
      },
    },
    loadingText: {
      control: 'text',
      description: 'Text announced to screen readers during loading',
      table: {
        defaultValue: { summary: 'Loading, please wait' },
      },
    },
    fullWidth: {
      control: 'boolean',
      description: 'Whether the button should take full width',
      table: {
        defaultValue: { summary: false },
      },
    },
    leftIcon: {
      control: 'boolean',
      description: 'Icon to show before the button text',
      mapping: {
        true: React.createElement(ArrowLeftIcon, { size: 16 }),
        false: undefined,
      },
    },
    rightIcon: {
      control: 'boolean',
      description: 'Icon to show after the button text',
      mapping: {
        true: React.createElement(ArrowRightIcon, { size: 16 }),
        false: undefined,
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the button is disabled',
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic variants
export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Primary Button',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary Button',
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'Outline Button',
  },
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    children: 'Ghost Button',
  },
};

// Sizes
export const Small: Story = {
  args: {
    size: 'sm',
    children: 'Small Button',
  },
};

export const Medium: Story = {
  args: {
    size: 'md',
    children: 'Medium Button',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    children: 'Large Button',
  },
};

// States
export const Loading: Story = {
  args: {
    isLoading: true,
    children: 'Loading Button',
  },
};

export const LoadingWithoutSpinner: Story = {
  args: {
    isLoading: true,
    spinnerInButton: false,
    children: 'Loading without Spinner',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: 'Disabled Button',
  },
};

// Icons
export const WithLeftIcon: Story = {
  args: {
    leftIcon: React.createElement(ArrowLeftIcon, { size: 16 }),
    children: 'Back',
  },
};

export const WithRightIcon: Story = {
  args: {
    rightIcon: React.createElement(ArrowRightIcon, { size: 16 }),
    children: 'Next',
  },
};

export const WithBothIcons: Story = {
  args: {
    leftIcon: React.createElement(ArrowLeftIcon, { size: 16 }),
    rightIcon: React.createElement(ArrowRightIcon, { size: 16 }),
    children: 'Both Icons',
  },
};

// Layout
export const FullWidth: Story = {
  args: {
    fullWidth: true,
    variant: 'primary',
    children: 'Full Width Button',
  },
};

export const FormButton: Story = {
  args: {
    variant: 'primary',
    size: 'lg',
    fullWidth: true,
    children: 'Save Changes',
  },
};

export const NavigationButton: Story = {
  args: {
    variant: 'ghost',
    size: 'sm',
    leftIcon: React.createElement(ArrowLeftIcon, { size: 16 }),
    children: 'Go Back',
  },
}; 