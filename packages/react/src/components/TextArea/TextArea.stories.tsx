import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { TextArea } from './TextArea';

const meta = {
  title: 'Components/TextArea',
  component: TextArea,
  parameters: {
    docs: {
      description: {
        component: `
Form field to enter and edit multiline text. Features:
- Uses Roboto Flex font family for consistent typography
- Supports various states, sizes, and visual variants
- Follows design token system for colors, spacing, and typography
- Fully accessible with ARIA support
- Dark theme and high contrast mode support
        `,
      },
    },
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size variant of the textarea',
      table: {
        defaultValue: { summary: 'md' },
      },
    },
    variant: {
      control: 'select',
      options: ['outlined', 'filled', 'subtle'],
      description: 'Visual variant of the textarea',
      table: {
        defaultValue: { summary: 'outlined' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the textarea is disabled',
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
      description: 'Label for the textarea',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text when empty',
    },
  },
} satisfies Meta<typeof TextArea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Description',
    placeholder: 'Enter your description here',
    variant: 'outlined',
  },
};

export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--ku-spacing-6)' }}>
      <TextArea
        label="Outlined Textarea (Default)"
        placeholder="Clean border style with white background"
        variant="outlined"
      />
      <TextArea
        label="Filled Textarea"
        placeholder="Light gray background with hover effect"
        variant="filled"
      />
      <TextArea
        label="Subtle Textarea"
        placeholder="Minimal visual style for inline editing"
        variant="subtle"
      />
    </div>
  ),
};

export const WithHelperText: Story = {
  args: {
    label: 'Bio',
    helperText: 'Write a short bio about yourself (maximum 500 characters)',
    placeholder: 'Tell us about yourself',
    variant: 'filled',
  },
};

export const WithError: Story = {
  args: {
    label: 'Comments',
    error: 'Comments cannot be empty',
    placeholder: 'Enter your comments',
    variant: 'outlined',
  },
};

export const Disabled: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--ku-spacing-6)' }}>
      <TextArea
        label="Outlined Disabled"
        disabled
        value="Disabled outlined textarea with reduced opacity"
        variant="outlined"
      />
      <TextArea
        label="Filled Disabled"
        disabled
        value="Disabled filled textarea with gray background"
        variant="filled"
      />
      <TextArea
        label="Subtle Disabled"
        disabled
        value="Disabled subtle textarea with minimal styling"
        variant="subtle"
      />
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--ku-spacing-4)' }}>
      <TextArea
        label="Small Textarea"
        placeholder="Compact size for tight spaces"
        size="sm"
        variant="filled"
      />
      <TextArea
        label="Medium Textarea"
        placeholder="Default size for most use cases"
        size="md"
        variant="filled"
      />
      <TextArea
        label="Large Textarea"
        placeholder="Larger size for enhanced visibility"
        size="lg"
        variant="filled"
      />
    </div>
  ),
};

export const WithAriaLabel: Story = {
  args: {
    ariaLabel: 'Enter your message',
    placeholder: 'Type your message here (with Roboto Flex font)',
    variant: 'subtle',
  },
};

export const FullExample: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--ku-spacing-6)' }}>
      <TextArea
        label="Personal Bio"
        helperText="Tell us about yourself in a few sentences"
        placeholder="Enter your bio here using Roboto Flex font..."
        size="lg"
        variant="outlined"
      />
      <TextArea
        label="Project Description"
        error="Description is required"
        placeholder="Describe your project with consistent typography"
        size="md"
        variant="filled"
      />
      <TextArea
        label="Additional Notes"
        placeholder="Any additional comments with proper font rendering..."
        size="sm"
        variant="subtle"
      />
    </div>
  ),
}; 