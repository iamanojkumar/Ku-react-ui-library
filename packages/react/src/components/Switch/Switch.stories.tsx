import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Switch } from './Switch';

const meta = {
  title: 'Components/Switch',
  component: Switch,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
A Switch component is used to toggle between two states. It's commonly used for binary settings where changes take immediate effect.

## Features
- Label support with click interaction
- Checked and unchecked states
- Disabled state
- Keyboard navigation (Tab and Space)
- Screen reader support
- Dark theme support
- High contrast mode support
- Reduced motion support
        `,
      },
    },
  },
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic switch with label
export const Default: Story = {
  args: {
    label: 'Enable notifications',
    checked: false,
    onChange: () => {},
  },
};

// Switch without visible label but with aria-label
export const WithoutLabel: Story = {
  args: {
    'aria-label': 'Enable notifications',
    checked: false,
    onChange: () => {},
  },
};

// Switch with hidden label (visually hidden but accessible)
export const HiddenLabel: Story = {
  args: {
    label: 'Enable notifications',
    hideLabel: true,
    checked: false,
    onChange: () => {},
  },
};

// Checked switch
export const Checked: Story = {
  args: {
    label: 'Notifications',
    checked: true,
    onChange: () => {},
  },
};

// Disabled switch
export const Disabled: Story = {
  args: {
    label: 'Notifications',
    checked: false,
    disabled: true,
    onChange: () => {},
  },
};

// Disabled and checked switch
export const DisabledChecked: Story = {
  args: {
    label: 'Notifications',
    checked: true,
    disabled: true,
    onChange: () => {},
  },
};

// Interactive example
export const Interactive: Story = {
  args: {
    label: 'Interactive switch',
    checked: false,
    onChange: () => {},
  },
  render: function Render(args) {
    const [checked, setChecked] = React.useState(args.checked);
    return (
      <Switch
        {...args}
        checked={checked}
        onChange={setChecked}
      />
    );
  },
}; 