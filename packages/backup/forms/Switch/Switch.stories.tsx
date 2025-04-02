import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Switch } from './Switch';

const meta = {
  title: 'Components/Forms/Switch',
  component: Switch,
  parameters: {
    layout: 'centered',
  },
  args: {
    label: 'Enable notifications',
  },
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof Switch>;

export const Default: Story = {};

export const WithDescription: Story = {
  args: {
    description: 'You will receive updates about system changes',
  },
};

export const WithLabels: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Switch 
        label="Visible label"
        description="Switch with a visible label"
      />
      <Switch 
        label="Hidden label"
        description="Switch with a visually hidden label (still accessible)"
        hideLabel
      />
      <Switch 
        label="With description"
        description="Additional context for the switch"
      />
      <Switch 
        label="Checked with label"
        description="Switch in checked state with a label"
        checked
      />
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Switch 
        label="Disabled unchecked"
        description="Switch cannot be interacted with"
        disabled
      />
      <Switch 
        label="Disabled checked"
        description="Switch is checked and cannot be changed"
        disabled
        checked
      />
      <Switch 
        label="Disabled with error"
        description="Switch is disabled with error state"
        disabled
        error="This setting has an error"
        hasError
      />
      <Switch 
        label="Disabled with hidden label"
        description="Disabled switch with visually hidden label"
        disabled
        hideLabel
      />
    </div>
  ),
};

export const WithError: Story = {
  args: {
    error: 'This setting is required',
    hasError: true,
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Switch
        label="Small size"
        size="sm"
        description="Compact switch for dense UIs"
      />
      <Switch
        label="Medium size"
        size="md"
        description="Default size for most cases"
      />
      <Switch
        label="Large size"
        size="lg"
        description="Large switch for better visibility"
      />
    </div>
  ),
};

export const States: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Switch
        label="Default state"
        description="Regular switch in its default state"
      />
      <Switch
        label="Checked state"
        description="Switch in checked state"
        checked
      />
      <Switch
        label="With error"
        description="Switch with error state"
        error="This setting is required"
        hasError
      />
      <Switch
        label="Disabled unchecked"
        description="Cannot be interacted with"
        disabled
      />
      <Switch
        label="Disabled checked"
        description="Checked but cannot be changed"
        disabled
        checked
      />
    </div>
  ),
};

export const Loading: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Switch
        label="Loading unchecked"
        description="Switch is processing"
        isLoading
      />
      <Switch
        label="Loading checked"
        description="Switch is processing"
        isLoading
        checked
      />
    </div>
  ),
};

export const WithHiddenLabel: Story = {
  args: {
    hideLabel: true,
    description: 'The label is hidden visually but available for screen readers',
  },
};

export const Interactive: Story = {
  render: () => {
    const [checked, setChecked] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string>();

    const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
      setIsLoading(true);
      setError(undefined);

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));

      if (e.target.checked && Math.random() > 0.5) {
        setError('Failed to enable. Please try again.');
        setChecked(false);
      } else {
        setChecked(e.target.checked);
      }
      
      setIsLoading(false);
    };

    return (
      <Switch
        label="Enable feature"
        description="This switch simulates an async operation with possible failure"
        checked={checked}
        onChange={handleChange}
        isLoading={isLoading}
        error={error}
        hasError={!!error}
      />
    );
  },
}; 