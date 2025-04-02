import type { Meta, StoryObj } from '@storybook/react';
import { SplitButton } from './SplitButton';
import {
  CheckIcon,
  DownloadIcon,
  StarIcon,
  EditIcon,
  TrashIcon
} from '@ku-design-system/core';

const defaultOptions = [
  {
    label: 'Save as Draft',
    value: 'draft',
    onClick: () => console.log('Save as Draft clicked')
  },
  {
    label: 'Save as Template',
    value: 'template',
    onClick: () => console.log('Save as Template clicked')
  },
  {
    label: 'Export as PDF',
    value: 'pdf',
    onClick: () => console.log('Export as PDF clicked')
  }
];

const meta: Meta<typeof SplitButton> = {
  title: 'Components/Forms/SplitButton',
  component: SplitButton,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A split button component that combines a primary action with additional options in a dropdown menu.'
      }
    }
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'outline', 'ghost'],
      description: 'The visual style variant of the button',
      table: {
        type: { summary: 'primary | secondary | outline | ghost' },
        defaultValue: { summary: 'primary' }
      }
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'The size of the button',
      table: {
        type: { summary: 'sm | md | lg' },
        defaultValue: { summary: 'md' }
      }
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the button is disabled',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      }
    }
  }
};

export default meta;
type Story = StoryObj<typeof SplitButton>;

export const Basic: Story = {
  args: {
    children: 'Save',
    onClick: () => console.log('Primary action clicked'),
    options: defaultOptions
  }
};

export const WithIcons: Story = {
  args: {
    children: 'Save',
    leftIcon: <CheckIcon size={16} />,
    onClick: () => console.log('Save clicked'),
    options: [
      {
        label: 'Save as Draft',
        value: 'draft',
        leadingIcon: <EditIcon size={16} />,
        onClick: () => console.log('Save as Draft clicked')
      },
      {
        label: 'Save as Template',
        value: 'template',
        leadingIcon: <StarIcon size={16} />,
        onClick: () => console.log('Save as Template clicked')
      },
      {
        label: 'Export as PDF',
        value: 'pdf',
        leadingIcon: <DownloadIcon size={16} />,
        onClick: () => console.log('Export as PDF clicked')
      }
    ]
  }
};

export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      <SplitButton
        variant="primary"
        onClick={() => {}}
        options={defaultOptions}
      >
        Primary
      </SplitButton>

      <SplitButton
        variant="secondary"
        onClick={() => {}}
        options={defaultOptions}
      >
        Secondary
      </SplitButton>

      <SplitButton
        variant="outline"
        onClick={() => {}}
        options={defaultOptions}
      >
        Outline
      </SplitButton>

      <SplitButton
        variant="ghost"
        onClick={() => {}}
        options={defaultOptions}
      >
        Ghost
      </SplitButton>
    </div>
  )
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
      <SplitButton
        size="sm"
        onClick={() => {}}
        options={defaultOptions}
      >
        Small
      </SplitButton>

      <SplitButton
        size="md"
        onClick={() => {}}
        options={defaultOptions}
      >
        Medium
      </SplitButton>

      <SplitButton
        size="lg"
        onClick={() => {}}
        options={defaultOptions}
      >
        Large
      </SplitButton>
    </div>
  )
};

export const States: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      <SplitButton
        disabled
        onClick={() => {}}
        options={defaultOptions}
      >
        Disabled
      </SplitButton>
    </div>
  )
};

export const FullWidth: Story = {
  render: () => (
    <div style={{ width: '100%', maxWidth: '500px', padding: '1rem', background: '#f5f5f5' }}>
      <SplitButton
        fullWidth
        leftIcon={<CheckIcon size={16} />}
        onClick={() => {}}
        options={defaultOptions}
      >
        Full Width Split Button
      </SplitButton>
    </div>
  )
}; 