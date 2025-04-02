import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { TextField } from './TextField';
import { IconSearch, IconCalendar, IconEye, IconEyeOff } from '@tabler/icons-react';

const meta = {
  title: 'Components/Forms/TextField',
  component: TextField,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof TextField>;

export default meta;
type Story = StoryObj<typeof TextField>;

export const Default: Story = {
  args: {
    label: 'Label',
    placeholder: 'Enter text',
  },
};

export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
      <TextField
        label="Outlined"
        placeholder="Default variant"
        variant="outlined"
      />
      <TextField
        label="Filled"
        placeholder="Filled variant"
        variant="filled"
      />
      <TextField
        label="Subtle"
        placeholder="Subtle variant"
        variant="subtle"
      />
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
      <TextField
        label="Small"
        placeholder="Small size"
        size="sm"
      />
      <TextField
        label="Medium"
        placeholder="Medium size"
        size="md"
      />
      <TextField
        label="Large"
        placeholder="Large size"
        size="lg"
      />
    </div>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
      <TextField
        label="Start Icon"
        placeholder="Search"
        startIcon={<IconSearch size={20} stroke={1.5} />}
      />
      <TextField
        label="End Icon"
        placeholder="Select date"
        endIcon={<IconCalendar size={20} stroke={1.5} />}
      />
      <TextField
        label="Both Icons"
        placeholder="Search date"
        startIcon={<IconSearch size={20} stroke={1.5} />}
        endIcon={<IconCalendar size={20} stroke={1.5} />}
      />
    </div>
  ),
};

export const WithAffixes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
      <TextField
        label="With Prefix"
        placeholder="0.00"
        prefix="$"
      />
      <TextField
        label="With Suffix"
        placeholder="example"
        suffix=".com"
      />
      <TextField
        label="Both Affixes"
        placeholder="0.00"
        prefix="$"
        suffix="USD"
      />
    </div>
  ),
};

export const States: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
      <TextField
        label="Default"
        placeholder="Normal state"
      />
      <TextField
        label="Disabled"
        placeholder="Disabled state"
        disabled
      />
      <TextField
        label="Read Only"
        placeholder="Read only state"
        value="Read only value"
        readOnly
      />
    </div>
  ),
};

export const WithHelperText: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
      <TextField
        label="Username"
        placeholder="Enter username"
        helperText="Must be at least 3 characters"
      />
      <TextField
        label="Password"
        type="password"
        placeholder="Enter password"
        helperText="Must contain at least 8 characters"
      />
    </div>
  ),
};

export const WithError: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
      <TextField
        label="Email"
        placeholder="Enter email"
        error="Please enter a valid email address"
        value="invalid-email"
      />
      <TextField
        label="Password"
        type="password"
        placeholder="Enter password"
        error="Password is too short"
        value="123"
      />
    </div>
  ),
};

export const WithLabelIcon: Story = {
  args: {
    label: 'Important Information',
    labelIcon: <IconSearch size={16} stroke={1.5} />,
    placeholder: 'Enter important details',
    variant: 'outlined',
  },
};

export const WithActionButton: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--ku-spacing-6)' }}>
      <TextField
        label="Email"
        placeholder="Enter your email"
        startIcon={<IconSearch size={20} stroke={1.5} />}
        actionButton={
          <button
            type="button"
            style={{
              border: 'none',
              background: 'none',
              cursor: 'pointer',
              padding: 'var(--ku-spacing-2)',
              color: 'var(--ku-color-primary-500)',
              display: 'flex',
              alignItems: 'center'
            }}
          >
            <IconSearch size={20} stroke={1.5} />
          </button>
        }
        variant="filled"
      />
      <TextField
        label="Password"
        type="password"
        placeholder="Enter your password"
        showPasswordToggle
        variant="outlined"
      />
    </div>
  ),
};

export const WithIconContainers: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--ku-spacing-6)' }}>
      <TextField
        label="Search with Leading Icon"
        placeholder="Type to search..."
        hasLeadingIcon
        startIcon={<IconSearch size={20} stroke={1.5} />}
        variant="filled"
      />
      <TextField
        label="Clear Text Field"
        placeholder="Type something..."
        hasTrailingIcon
        endIcon={<IconSearch size={20} stroke={1.5} />}
        variant="outlined"
      />
      <TextField
        label="With Both Icons"
        placeholder="Enter text..."
        hasLeadingIcon
        hasTrailingIcon
        startIcon={<IconSearch size={20} stroke={1.5} />}
        endIcon={<IconSearch size={20} stroke={1.5} />}
        variant="subtle"
      />
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--ku-spacing-6)' }}>
      <TextField
        label="Outlined Disabled"
        labelIcon={<IconSearch size={16} stroke={1.5} />}
        disabled
        value="Disabled outlined text field"
        variant="outlined"
      />
      <TextField
        label="Filled Disabled"
        labelIcon={<IconSearch size={16} stroke={1.5} />}
        disabled
        value="Disabled filled text field"
        variant="filled"
      />
      <TextField
        label="Subtle Disabled"
        labelIcon={<IconSearch size={16} stroke={1.5} />}
        disabled
        value="Disabled subtle text field"
        variant="subtle"
      />
    </div>
  ),
};

export const WithAriaLabel: Story = {
  args: {
    'aria-label': 'Search input',
    placeholder: 'Search...',
    startIcon: <IconSearch size={20} stroke={1.5} />,
    variant: 'subtle',
  },
};

export const WithPasswordToggle: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--ku-spacing-6)' }}>
      <TextField
        label="Password with Toggle"
        labelIcon={<IconSearch size={16} stroke={1.5} />}
        type="password"
        placeholder="Enter your password"
        showPasswordToggle
        endIcon={<IconEyeOff size={20} stroke={1.5} />}
        variant="outlined"
      />
      <TextField
        label="Password with Error"
        labelIcon={<IconSearch size={16} stroke={1.5} />}
        type="password"
        placeholder="Enter your password"
        error="Password must be at least 8 characters long"
        showPasswordToggle
        endIcon={<IconEyeOff size={20} stroke={1.5} />}
        variant="filled"
      />
      <TextField
        label="Password with Helper Text"
        labelIcon={<IconSearch size={16} stroke={1.5} />}
        type="password"
        placeholder="Enter your password"
        helperText="Password must be at least 8 characters long"
        showPasswordToggle
        endIcon={<IconEyeOff size={20} stroke={1.5} />}
        variant="subtle"
      />
    </div>
  ),
};

export const FullExample: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--ku-spacing-6)' }}>
      <TextField
        label="Credit Card"
        labelIcon={<IconSearch size={16} stroke={1.5} />}
        helperText="Enter your 16-digit card number"
        placeholder="1234 5678 9012 3456"
        startIcon={<IconSearch size={20} stroke={1.5} />}
        showPasswordToggle
        type="password"
        size="lg"
        variant="outlined"
      />
      <TextField
        label="Email Address"
        labelIcon={<IconSearch size={16} stroke={1.5} />}
        error="Please enter a valid email address"
        placeholder="example@domain.com"
        type="email"
        hasLeadingIcon
        hasTrailingIcon
        startIcon={<IconSearch size={20} stroke={1.5} />}
        endIcon={<IconSearch size={20} stroke={1.5} />}
        size="md"
        variant="filled"
      />
      <TextField
        label="Search"
        labelIcon={<IconSearch size={16} stroke={1.5} />}
        placeholder="Type to search..."
        startIcon={<IconSearch size={20} stroke={1.5} />}
        actionButton={
          <button
            type="button"
            style={{
              border: 'none',
              background: 'none',
              cursor: 'pointer',
              padding: 'var(--ku-spacing-2)',
              color: 'var(--ku-color-primary-500)',
              display: 'flex',
              alignItems: 'center'
            }}
          >
            <IconSearch size={20} stroke={1.5} />
          </button>
        }
        size="sm"
        variant="subtle"
      />
    </div>
  ),
}; 