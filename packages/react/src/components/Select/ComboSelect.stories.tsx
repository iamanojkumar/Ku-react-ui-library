import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ComboSelect } from './ComboSelect';
import { SettingsIcon, BellIcon, MapIcon } from '@ku-design-system/core';

const meta: Meta<typeof ComboSelect> = {
  title: 'Components/ComboSelect',
  component: ComboSelect,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
ComboSelect is an enhanced select component that supports searching and multi-selection.

## Features
- Searchable options with keyboard support
- Multi-select with removable badges
- Text labels with click interaction
- Error state with validation icon
- Disabled state
- Placeholder text
- Helper text for additional context
- Icon support for visual context
- Prefix support for custom content
- Full keyboard navigation
- Screen reader support
        `,
      },
    },
  },
  args: {
    options: [
      { value: 'option1', label: 'Option 1' },
      { value: 'option2', label: 'Option 2' },
      { value: 'option3', label: 'Option 3' },
    ],
  },
};

export default meta;
type Story = StoryObj<typeof ComboSelect>;

// Basic searchable select
export const Default: Story = {
  args: {
    label: 'Select an option',
    placeholder: 'Search and select an option',
  },
};

// Multi-select
export const MultiSelect: Story = {
  args: {
    label: 'Select multiple options',
    placeholder: 'Search and select options',
    isMulti: true,
  },
};

// With helper text
export const WithHelper: Story = {
  args: {
    label: 'Select an option',
    helperText: 'Search and choose the option that best fits your needs',
    placeholder: 'Search and select an option',
  },
};

// With error state
export const WithError: Story = {
  args: {
    label: 'Select an option',
    placeholder: 'Search and select an option',
    error: 'Please select a valid option',
    hasError: true,
  },
};

// Disabled state
export const Disabled: Story = {
  args: {
    label: 'Select an option',
    placeholder: 'Search and select an option',
    disabled: true,
  },
};

// With icons
export const WithIcons: Story = {
  args: {
    label: 'Select an option',
    placeholder: 'Search and select an option',
    icon: MapIcon({ size: 16 }),
    options: [
      { value: 'profile', label: 'Profile Settings', icon: SettingsIcon({ size: 16 }) },
      { value: 'notifications', label: 'Notifications', icon: BellIcon({ size: 16 }) },
      { value: 'location', label: 'Location', icon: MapIcon({ size: 16 }) },
    ],
  },
};

// Multi-select with icons
export const MultiSelectWithIcons: Story = {
  args: {
    label: 'Select multiple options',
    placeholder: 'Search and select options',
    isMulti: true,
    icon: MapIcon({ size: 16 }),
    options: [
      { value: 'profile', label: 'Profile Settings', icon: SettingsIcon({ size: 16 }) },
      { value: 'notifications', label: 'Notifications', icon: BellIcon({ size: 16 }) },
      { value: 'location', label: 'Location', icon: MapIcon({ size: 16 }) },
    ],
  },
};

// With prefix (e.g., country flags)
export const WithPrefix: Story = {
  args: {
    label: 'Select a country',
    placeholder: 'Search and select a country',
    options: [
      { 
        value: 'us', 
        label: 'United States', 
        prefix: <span className="flag-icon">🇺🇸</span> 
      },
      { 
        value: 'gb', 
        label: 'United Kingdom', 
        prefix: <span className="flag-icon">🇬🇧</span> 
      },
      { 
        value: 'fr', 
        label: 'France', 
        prefix: <span className="flag-icon">🇫🇷</span> 
      },
    ],
  },
};

// Required select
export const Required: Story = {
  args: {
    label: 'Select an option',
    placeholder: 'Search and select an option',
    required: true,
  },
};

// With hidden label (a11y)
export const HiddenLabel: Story = {
  args: {
    label: 'Select an option',
    placeholder: 'Search and select an option',
    hideLabel: true,
    'aria-label': 'Select an option',
  },
};

// With disabled options
export const DisabledOptions: Story = {
  args: {
    label: 'Select an option',
    placeholder: 'Search and select an option',
    options: [
      { value: 'option1', label: 'Option 1' },
      { value: 'option2', label: 'Option 2', disabled: true },
      { value: 'option3', label: 'Option 3' },
    ],
  },
}; 