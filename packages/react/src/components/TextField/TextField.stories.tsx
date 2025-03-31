import React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { TextField } from './TextField';
import {
  IconSearch,
  IconCreditCard,
  IconCheck,
  IconInfoCircle,
  IconMail,
  IconSend,
  IconEye,
  IconEyeOff,
  IconX,
  IconAlertCircle
} from '@tabler/icons-react';

const meta: ComponentMeta<typeof TextField> = {
  title: 'Components/TextField',
  component: TextField,
  parameters: {
    docs: {
      description: {
        component: `
Form field to enter and edit single-line text. Features:
- Uses Roboto Flex font family for consistent typography
- Supports labels, error states, and helper text
- Icons in label, leading/trailing positions
- Action buttons inside the field
- Multiple sizes and visual variants
- Dark theme and high contrast mode support
- Full accessibility support with ARIA labels
        `,
      },
    },
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size variant of the text field',
      table: {
        defaultValue: { summary: 'md' },
      },
    },
    variant: {
      control: 'select',
      options: ['outlined', 'filled', 'subtle'],
      description: 'Visual variant of the text field',
      table: {
        defaultValue: { summary: 'outlined' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the text field is disabled',
    },
    error: {
      control: 'text',
      description: 'Error message to display',
    },
    helperText: {
      control: 'text',
      description: 'Helper text to provide additional context',
    },
    label: {
      control: 'text',
      description: 'Label for the text field',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text when empty',
    },
    labelIcon: {
      control: 'boolean',
      description: 'Whether to show an icon next to the label',
    },
    hasLeadingIcon: {
      control: 'boolean',
      description: 'Whether to show a leading icon container',
    },
    hasTrailingIcon: {
      control: 'boolean',
      description: 'Whether to show a trailing icon container',
    },
  },
};

export default meta;

const Template: ComponentStory<typeof TextField> = (args) => <TextField {...args} />;

const StoryContainer = ({ children }: { children: React.ReactNode }) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--ku-spacing-6)' }}>
    {children}
  </div>
);

export const Default = Template.bind({});
Default.args = {
  label: 'Full Name',
  placeholder: 'Enter your full name',
  variant: 'outlined',
};

export const WithLabelIcon = Template.bind({});
WithLabelIcon.args = {
  label: 'Important Information',
  labelIcon: <IconInfoCircle size={16} stroke={1.5} />,
  placeholder: 'Enter important details',
  variant: 'outlined',
};

export const WithActionButton = () => (
  <StoryContainer>
    <TextField
      label="Email"
      placeholder="Enter your email"
      startIcon={<IconMail size={20} stroke={1.5} />}
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
          <IconSend size={20} stroke={1.5} />
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
  </StoryContainer>
);

export const WithIconContainers = () => (
  <StoryContainer>
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
      endIcon={<IconX size={20} stroke={1.5} />}
      variant="outlined"
    />
    <TextField
      label="With Both Icons"
      placeholder="Enter text..."
      hasLeadingIcon
      hasTrailingIcon
      startIcon={<IconAlertCircle size={20} stroke={1.5} />}
      endIcon={<IconCheck size={20} stroke={1.5} />}
      variant="subtle"
    />
  </StoryContainer>
);

export const Variants = () => (
  <StoryContainer>
    <TextField
      label="Outlined TextField (Default)"
      labelIcon={<IconInfoCircle size={16} stroke={1.5} />}
      placeholder="Clean border style with white background"
      variant="outlined"
    />
    <TextField
      label="Filled TextField"
      labelIcon={<IconInfoCircle size={16} stroke={1.5} />}
      placeholder="Light gray background with hover effect"
      variant="filled"
    />
    <TextField
      label="Subtle TextField"
      labelIcon={<IconInfoCircle size={16} stroke={1.5} />}
      placeholder="Minimal visual style for inline editing"
      variant="subtle"
    />
  </StoryContainer>
);

export const WithHelperText = Template.bind({});
WithHelperText.args = {
  label: 'Email',
  labelIcon: <IconMail size={16} stroke={1.5} />,
  helperText: 'We will never share your email with anyone',
  placeholder: 'Enter your email address',
  type: 'email',
  variant: 'filled',
};

export const WithError = Template.bind({});
WithError.args = {
  label: 'Password',
  labelIcon: <IconAlertCircle size={16} stroke={1.5} />,
  error: 'Password must be at least 8 characters long',
  placeholder: 'Enter your password',
  type: 'password',
  variant: 'outlined',
};

export const WithIcons = () => (
  <StoryContainer>
    <TextField
      label="Search"
      labelIcon={<IconSearch size={16} stroke={1.5} />}
      placeholder="Search anything..."
      startIcon={<IconSearch size={20} stroke={1.5} />}
      variant="filled"
    />
    <TextField
      label="Card Number"
      labelIcon={<IconCreditCard size={16} stroke={1.5} />}
      placeholder="1234 5678 9012 3456"
      startIcon={<IconCreditCard size={20} stroke={1.5} />}
      endIcon={<IconCheck size={20} stroke={1.5} />}
      variant="outlined"
    />
  </StoryContainer>
);

export const WithAffixes = () => (
  <StoryContainer>
    <TextField
      label="Price"
      labelIcon={<IconInfoCircle size={16} stroke={1.5} />}
      placeholder="0.00"
      prefix="$"
      variant="outlined"
    />
    <TextField
      label="Website"
      labelIcon={<IconInfoCircle size={16} stroke={1.5} />}
      placeholder="example"
      prefix="https://"
      suffix=".com"
      variant="filled"
    />
  </StoryContainer>
);

export const Sizes = () => (
  <StoryContainer>
    <TextField
      label="Small TextField"
      labelIcon={<IconInfoCircle size={16} stroke={1.5} />}
      placeholder="Compact size for tight spaces"
      size="sm"
      variant="filled"
    />
    <TextField
      label="Medium TextField"
      labelIcon={<IconInfoCircle size={16} stroke={1.5} />}
      placeholder="Default size for most use cases"
      size="md"
      variant="filled"
    />
    <TextField
      label="Large TextField"
      labelIcon={<IconInfoCircle size={16} stroke={1.5} />}
      placeholder="Larger size for enhanced visibility"
      size="lg"
      variant="filled"
    />
  </StoryContainer>
);

export const Disabled = () => (
  <StoryContainer>
    <TextField
      label="Outlined Disabled"
      labelIcon={<IconInfoCircle size={16} stroke={1.5} />}
      disabled
      value="Disabled outlined text field"
      variant="outlined"
    />
    <TextField
      label="Filled Disabled"
      labelIcon={<IconInfoCircle size={16} stroke={1.5} />}
      disabled
      value="Disabled filled text field"
      variant="filled"
    />
    <TextField
      label="Subtle Disabled"
      labelIcon={<IconInfoCircle size={16} stroke={1.5} />}
      disabled
      value="Disabled subtle text field"
      variant="subtle"
    />
  </StoryContainer>
);

export const WithAriaLabel = Template.bind({});
WithAriaLabel.args = {
  ariaLabel: 'Search input',
  placeholder: 'Search...',
  startIcon: <IconSearch size={20} stroke={1.5} />,
  variant: 'subtle',
};

export const WithPasswordToggle = () => (
  <StoryContainer>
    <TextField
      label="Password with Toggle"
      labelIcon={<IconAlertCircle size={16} stroke={1.5} />}
      type="password"
      placeholder="Enter your password"
      showPasswordToggle
      variant="outlined"
    />
    <TextField
      label="Password with Error"
      labelIcon={<IconAlertCircle size={16} stroke={1.5} />}
      type="password"
      placeholder="Enter your password"
      error="Password must be at least 8 characters long"
      showPasswordToggle
      variant="filled"
    />
    <TextField
      label="Password with Helper Text"
      labelIcon={<IconAlertCircle size={16} stroke={1.5} />}
      type="password"
      placeholder="Enter your password"
      helperText="Password must be at least 8 characters long"
      showPasswordToggle
      variant="subtle"
    />
  </StoryContainer>
);

export const FullExample = () => (
  <StoryContainer>
    <TextField
      label="Credit Card"
      labelIcon={<IconCreditCard size={16} stroke={1.5} />}
      helperText="Enter your 16-digit card number"
      placeholder="1234 5678 9012 3456"
      startIcon={<IconCreditCard size={20} stroke={1.5} />}
      showPasswordToggle
      type="password"
      size="lg"
      variant="outlined"
    />
    <TextField
      label="Email Address"
      labelIcon={<IconMail size={16} stroke={1.5} />}
      error="Please enter a valid email address"
      placeholder="example@domain.com"
      type="email"
      hasLeadingIcon
      hasTrailingIcon
      startIcon={<IconMail size={20} stroke={1.5} />}
      endIcon={<IconAlertCircle size={20} stroke={1.5} />}
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
          <IconSend size={20} stroke={1.5} />
        </button>
      }
      size="sm"
      variant="subtle"
    />
  </StoryContainer>
); 