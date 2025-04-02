import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Radio, RadioGroup } from './Radio';

const meta = {
  title: 'Components/Radio',
  component: Radio,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
A form element used for selecting one option from a list.

## Features
- Label support with click interaction
- Accessible label even when visually hidden
- Error states with validation messages
- Radio group support
- Full keyboard navigation
- Dark theme support
- High contrast mode support
        `,
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Radio>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic radio button
export const Default: Story = {
  args: {
    label: 'Radio option',
    value: 'option',
  },
};

// Radio with description
export const WithDescription: Story = {
  args: {
    label: 'Radio with description',
    description: 'Additional information about this option',
    value: 'option',
  },
};

// Radio with error
export const WithError: Story = {
  args: {
    label: 'Radio with error',
    error: 'This field is required',
    hasError: true,
    value: 'option',
  },
};

// Disabled radio
export const Disabled: Story = {
  args: {
    label: 'Disabled radio',
    disabled: true,
    value: 'option',
  },
};

// Hidden label
export const HiddenLabel: Story = {
  args: {
    label: 'Hidden label',
    hideLabel: true,
    value: 'option',
  },
};

// Radio group example
const RadioGroupExample = () => {
  const [value, setValue] = useState('');

  return (
    <RadioGroup
      name="favorite-color"
      label="Choose your favorite color"
      value={value}
      onChange={setValue}
      required
    >
      <Radio value="red" label="Red" />
      <Radio value="blue" label="Blue" />
      <Radio value="green" label="Green" />
      <Radio value="yellow" label="Yellow" />
    </RadioGroup>
  );
};

export const Group: Story = {
  render: () => <RadioGroupExample />,
};

// Radio group with error
const RadioGroupWithErrorExample = () => {
  const [value, setValue] = useState('');

  return (
    <RadioGroup
      name="terms"
      label="Terms and Conditions"
      value={value}
      onChange={setValue}
      error="Please accept the terms to continue"
      required
    >
      <Radio
        value="accept"
        label="I accept"
        description="By accepting, you agree to our terms of service and privacy policy"
      />
      <Radio
        value="decline"
        label="I decline"
      />
    </RadioGroup>
  );
};

export const GroupWithError: Story = {
  render: () => <RadioGroupWithErrorExample />,
}; 