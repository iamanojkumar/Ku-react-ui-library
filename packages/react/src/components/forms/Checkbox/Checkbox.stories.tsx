import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from './Checkbox';
import { CheckboxGroup } from './CheckboxGroup';

const meta = {
  title: 'Components/Forms/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
A versatile checkbox component that supports multiple states and grouping.
It follows the KU Design System token system and provides excellent accessibility support.

## Features
- Label support with screen reader compatibility
- Error state with validation messages
- Disabled state
- Indeterminate state for parent-child relationships
- Checkbox grouping with "Select All" functionality
- Keyboard navigation
- Dark theme support
- Reduced motion support
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'The label for the checkbox',
    },
    checked: {
      control: 'boolean',
      description: 'Whether the checkbox is checked',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the checkbox is disabled',
    },
    error: {
      control: 'boolean',
      description: 'Whether the checkbox is in error state',
    },
    errorMessage: {
      control: 'text',
      description: 'Error message to display',
    },
    indeterminate: {
      control: 'boolean',
      description: 'Whether the checkbox is in indeterminate state',
    },
    helperText: {
      control: 'text',
      description: 'Helper text to display below the checkbox',
    },
    hideLabel: {
      control: 'boolean',
      description: 'Whether to visually hide the label',
    },
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof Checkbox>;

// Basic checkbox
export const Default: Story = {
  render: () => {
    const [checked, setChecked] = React.useState(false);
    return (
      <Checkbox
        label="Accept terms and conditions"
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
      />
    );
  }
};

// Checkbox with helper text
export const WithHelperText: Story = {
  render: () => {
    const [checked, setChecked] = React.useState(false);
    return (
      <Checkbox
        label="Subscribe to newsletter"
        helperText="You will receive updates about our products"
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
      />
    );
  }
};

// Error state
export const Error: Story = {
  render: () => {
    const [checked, setChecked] = React.useState(false);
    return (
      <Checkbox
        label="Accept terms and conditions"
        error={true}
        errorMessage="You must accept the terms to continue"
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
      />
    );
  }
};

// Disabled state
export const Disabled: Story = {
  args: {
    label: 'Disabled option',
    disabled: true,
    checked: false
  },
};

// Indeterminate state
export const Indeterminate: Story = {
  render: () => {
    const [checked, setChecked] = React.useState(false);
    return (
      <Checkbox
        label="Select all items"
        indeterminate={true}
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
      />
    );
  }
};

// Hidden label
export const HiddenLabel: Story = {
  render: () => {
    const [checked, setChecked] = React.useState(false);
    return (
      <Checkbox
        label="Hidden label for screen readers"
        hideLabel={true}
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
      />
    );
  }
};

// Checkbox group component
const CheckboxGroupExample: React.FC<{
  name: string;
  label: string;
  options: Array<{ value: string; label: string; disabled?: boolean }>;
  error?: boolean;
  errorMessage?: string;
  helperText?: string;
  disabled?: boolean;
}> = (props) => {
  const [selected, setSelected] = useState<string[]>([]);
  return (
    <CheckboxGroup
      {...props}
      value={selected}
      onChange={setSelected}
    />
  );
};

// Checkbox group
export const Group: Story = {
  render: () => (
    <CheckboxGroupExample
      name="fruits"
      label="Select your favorite fruits"
      options={[
        { value: 'apple', label: 'Apple' },
        { value: 'banana', label: 'Banana' },
        { value: 'orange', label: 'Orange' },
        { value: 'mango', label: 'Mango' },
      ]}
      helperText="You can select multiple options"
    />
  ),
};

// Checkbox group with error
export const GroupError: Story = {
  render: () => (
    <CheckboxGroupExample
      name="terms"
      label="Terms and Conditions"
      options={[
        { value: 'privacy', label: 'Accept Privacy Policy' },
        { value: 'terms', label: 'Accept Terms of Service' },
      ]}
      error={true}
      errorMessage="You must accept both terms to continue"
    />
  ),
};

// Checkbox group with disabled options
export const GroupWithDisabledOptions: Story = {
  render: () => (
    <CheckboxGroupExample
      name="plans"
      label="Select subscription plans"
      options={[
        { value: 'basic', label: 'Basic Plan' },
        { value: 'pro', label: 'Pro Plan' },
        { value: 'enterprise', label: 'Enterprise Plan', disabled: true },
      ]}
      helperText="Enterprise plan requires contacting sales"
    />
  ),
}; 