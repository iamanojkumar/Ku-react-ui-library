import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Select } from './Select';
import { SettingsIcon, BellIcon, MapIcon } from '@ku-design-system/core';

const meta = {
  title: 'Components/Forms/Select',
  component: Select,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
Select lets you choose a single value from a list of options.

## Features
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
type Story = StoryObj<typeof Select>;

// Basic select with label
export const Default: Story = {
  args: {
    label: 'Select an option',
    placeholder: 'Choose an option',
  },
};

// Select with helper text
export const WithHelper: Story = {
  args: {
    label: 'Select an option',
    helperText: 'Choose the option that best fits your needs',
    placeholder: 'Choose an option',
  },
};

// Select with error state
export const WithError: Story = {
  args: {
    label: 'Select an option',
    placeholder: 'Choose an option',
    error: 'Please select a valid option',
    hasError: true,
  },
};

// Disabled select
export const Disabled: Story = {
  args: {
    label: 'Select an option',
    placeholder: 'Choose an option',
    disabled: true,
  },
};

// Select with icon
export const WithIcon: Story = {
  args: {
    label: 'Select an option',
    placeholder: 'Choose an option',
    icon: MapIcon({ size: 16 }),
    options: [
      { value: 'profile', label: 'Profile Settings', icon: SettingsIcon({ size: 16 }) },
      { value: 'notifications', label: 'Notifications', icon: BellIcon({ size: 16 }) },
      { value: 'location', label: 'Location', icon: MapIcon({ size: 16 }) },
    ],
  },
};

// Select with prefix (e.g., country flags)
export const WithPrefix: Story = {
  args: {
    label: 'Select a country',
    placeholder: 'Choose a country',
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
    placeholder: 'Choose an option',
    required: true,
  },
};

// Select with hidden label (a11y)
export const HiddenLabel: Story = {
  args: {
    label: 'Select an option',
    placeholder: 'Choose an option',
    hideLabel: true,
    'aria-label': 'Select an option',
  },
};

// Select with disabled options
export const DisabledOptions: Story = {
  args: {
    label: 'Select an option',
    placeholder: 'Choose an option',
    options: [
      { value: 'option1', label: 'Option 1' },
      { value: 'option2', label: 'Option 2', disabled: true },
      { value: 'option3', label: 'Option 3' },
    ],
  },
}; 