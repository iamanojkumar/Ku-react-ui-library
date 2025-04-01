import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { TextArea } from './TextArea';

const meta = {
  title: 'Components/Forms/TextArea',
  component: TextArea,
  parameters: {
    docs: {
      description: {
        component: `
A versatile textarea component for multiline text input. Features:

- Three visual variants: outlined, filled, and subtle
- Three sizes: small, medium, and large
- Support for labels, helper text, and error messages
- Consistent typography using design tokens
- Fully accessible with ARIA support
- Dark theme and high contrast mode support
- Responsive design with fluid sizing
        `,
      },
    },
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Controls the size of the textarea',
      table: {
        type: { summary: "'sm' | 'md' | 'lg'" },
        defaultValue: { summary: 'md' },
      },
    },
    variant: {
      control: 'select',
      options: ['outlined', 'filled', 'subtle'],
      description: 'Visual style variant of the textarea',
      table: {
        type: { summary: "'outlined' | 'filled' | 'subtle'" },
        defaultValue: { summary: 'outlined' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the textarea input',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    error: {
      control: 'text',
      description: 'Error message to display below the textarea',
    },
    helperText: {
      control: 'text',
      description: 'Helper text to provide additional context',
    },
    label: {
      control: 'text',
      description: 'Label text displayed above the textarea',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text shown when textarea is empty',
    },
  },
} satisfies Meta<typeof TextArea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    label: 'Message',
    placeholder: 'Type your message here...',
    helperText: 'Maximum 500 characters',
    variant: 'outlined',
    size: 'md',
  },
};

export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <TextArea
        label="Outlined Variant"
        placeholder="Clean and structured appearance with a visible border"
        helperText="Default variant for most use cases"
        variant="outlined"
      />
      <TextArea
        label="Filled Variant"
        placeholder="Distinct background color that changes on interaction"
        helperText="Great for forms with multiple inputs"
        variant="filled"
      />
      <TextArea
        label="Subtle Variant"
        placeholder="Minimal visual style for a cleaner interface"
        helperText="Perfect for in-place editing"
        variant="subtle"
      />
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <TextArea
        label="Small Size"
        placeholder="Compact size: 80px minimum height"
        helperText="Uses var(--ku-textarea-min-height-sm)"
        size="sm"
      />
      <TextArea
        label="Medium Size"
        placeholder="Standard size: 120px minimum height"
        helperText="Uses var(--ku-textarea-min-height-md)"
        size="md"
      />
      <TextArea
        label="Large Size"
        placeholder="Expanded size: 160px minimum height"
        helperText="Uses var(--ku-textarea-min-height-lg)"
        size="lg"
      />
    </div>
  ),
};

export const States: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <TextArea
        label="Default State"
        placeholder="Regular textarea with standard styling"
      />
      <TextArea
        label="Disabled State"
        placeholder="This textarea cannot be edited"
        helperText="Reduced opacity and non-interactive"
        disabled
      />
      <TextArea
        label="Error State"
        placeholder="This textarea has an error"
        error="Please enter a valid message"
        value="Invalid input"
      />
      <TextArea
        label="With Helper Text"
        placeholder="This textarea has helper text"
        helperText="Additional information to guide users"
      />
    </div>
  ),
};

export const Responsive: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <TextArea
        label="Auto-resizing Textarea"
        placeholder="This textarea will grow with content but maintain minimum height"
        helperText="Try typing multiple lines"
      />
      <TextArea
        label="Full-width Textarea"
        placeholder="This textarea spans the full width of its container"
        helperText="Adapts to parent container width"
        variant="filled"
      />
    </div>
  ),
};

export const WithFormValidation: Story = {
  render: () => {
    const [value, setValue] = React.useState('');
    const [error, setError] = React.useState('');
    
    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      const newValue = e.target.value;
      setValue(newValue);
      
      if (newValue.length === 0) {
        setError('This field is required');
      } else if (newValue.length < 10) {
        setError('Message must be at least 10 characters');
      } else {
        setError('');
      }
    };
    
    return (
      <TextArea
        label="Feedback"
        placeholder="Enter your feedback (minimum 10 characters)"
        helperText="We value your input"
        value={value}
        onChange={handleChange}
        error={error}
      />
    );
  },
};

export const Spacing: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <TextArea
        label="Label Spacing Example"
        placeholder="Notice the consistent spacing between label and textarea"
        helperText="Helper text with proper margin"
      />
      <TextArea
        label="Error Message Spacing"
        placeholder="See how error messages maintain vertical rhythm"
        error="Error message with consistent spacing"
      />
      <TextArea
        label="Combined Spacing"
        placeholder="All spacing tokens working together"
        helperText="Helper text"
        error="Error message"
        variant="filled"
      />
    </div>
  ),
};

export const DarkTheme: Story = {
  render: () => (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      gap: '2rem',
      padding: '2rem',
      backgroundColor: 'var(--ku-color-background-surface-1-dark)',
      color: 'var(--ku-color-text-primary-dark)'
    }} data-theme="dark">
      <TextArea
        label="Dark Theme - Outlined"
        placeholder="Dark theme with outlined variant"
        helperText="Notice the adjusted colors and contrast"
        variant="outlined"
      />
      <TextArea
        label="Dark Theme - Filled"
        placeholder="Dark theme with filled variant"
        helperText="Background colors are adjusted for dark mode"
        variant="filled"
      />
      <TextArea
        label="Dark Theme - Error State"
        placeholder="Error state in dark theme"
        error="Error message with dark theme colors"
        variant="filled"
      />
    </div>
  ),
};

export const AutoHeight: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <TextArea
        label="Auto-height TextArea"
        placeholder="Start typing to see the textarea grow..."
        helperText="This textarea will automatically grow with content"
      />
      <TextArea
        label="Auto-height with Max Height"
        placeholder="This textarea will show a scrollbar after reaching max height..."
        helperText="Maximum height is set to 200px"
        maxHeight="200px"
      />
    </div>
  ),
}; 