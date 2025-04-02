import React, { useState } from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { Toast } from './Toast';
import { IconCheck, IconAlertCircle, IconInfoCircle, IconTrash } from '@tabler/icons-react';

const meta: ComponentMeta<typeof Toast> = {
  title: 'Components/Toast',
  component: Toast,
  parameters: {
    docs: {
      description: {
        component: `
Notification message displayed above the page content. Features:
- Multiple variants (success, error, warning, info)
- Icon support with default icons for each variant
- Customizable timeout
- Close button
- Action button support
- Stacking support
- Keyboard navigation
- Dark theme and high contrast mode support
- Reduced motion support
        `,
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['success', 'error', 'warning', 'info'],
      description: 'Visual variant of the toast',
      table: {
        defaultValue: { summary: 'info' },
      },
    },
    timeout: {
      control: 'number',
      description: 'Duration in milliseconds before the toast is automatically closed',
      table: {
        defaultValue: { summary: 5000 },
      },
    },
    showCloseButton: {
      control: 'boolean',
      description: 'Whether to show the close button',
    },
    stacked: {
      control: 'boolean',
      description: 'Whether the toast is stacked',
    },
  },
};

export default meta;

const Template: ComponentStory<typeof Toast> = (args) => <Toast {...args} />;

const StoryContainer = ({ children }: { children: React.ReactNode }) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--ku-spacing-4)' }}>
    {children}
  </div>
);

export const Default = Template.bind({});
Default.args = {
  children: 'This is a default toast message',
};

export const Variants = () => (
  <StoryContainer>
    <Toast variant="success">
      Your changes have been saved successfully.
    </Toast>
    <Toast variant="error">
      An error occurred while saving your changes.
    </Toast>
    <Toast variant="warning">
      Your session will expire in 5 minutes.
    </Toast>
    <Toast variant="info">
      New updates are available.
    </Toast>
  </StoryContainer>
);

export const WithCustomIcon = Template.bind({});
WithCustomIcon.args = {
  children: 'Custom icon toast message',
  icon: <IconCheck size={20} stroke={1.5} />,
};

export const WithAction = Template.bind({});
WithAction.args = {
  children: 'Item deleted successfully',
  action: {
    label: 'Undo',
    onClick: () => console.log('Undo clicked'),
  },
};

export const WithLongMessage = Template.bind({});
WithLongMessage.args = {
  children: 'This is a very long toast message that wraps to multiple lines to demonstrate how the toast handles longer content. The message should be clear and concise while providing enough information to the user.',
};

export const WithoutCloseButton = Template.bind({});
WithoutCloseButton.args = {
  children: 'This toast will auto-dismiss',
  showCloseButton: false,
};

export const CustomTimeout = Template.bind({});
CustomTimeout.args = {
  children: 'This toast will stay visible for 10 seconds',
  timeout: 10000,
};

export const Stacked = () => (
  <StoryContainer>
    <Toast variant="success" stacked>
      First toast message
    </Toast>
    <Toast variant="info" stacked>
      Second toast message
    </Toast>
    <Toast variant="warning" stacked>
      Third toast message
    </Toast>
  </StoryContainer>
);

export const WithDeleteAction = Template.bind({});
WithDeleteAction.args = {
  children: 'Item will be permanently deleted',
  variant: 'error',
  icon: <IconTrash size={20} stroke={1.5} />,
  action: {
    label: 'Delete',
    onClick: () => console.log('Delete clicked'),
  },
};

export const FullExample = () => (
  <StoryContainer>
    <Toast
      variant="success"
      icon={<IconCheck size={20} stroke={1.5} />}
      action={{
        label: 'View Details',
        onClick: () => console.log('View details clicked'),
      }}
      timeout={8000}
    >
      Your profile has been updated successfully.
    </Toast>
    <Toast
      variant="error"
      icon={<IconAlertCircle size={20} stroke={1.5} />}
      action={{
        label: 'Try Again',
        onClick: () => console.log('Try again clicked'),
      }}
      timeout={0}
    >
      Failed to upload file. Please check your connection and try again.
    </Toast>
    <Toast
      variant="warning"
      icon={<IconInfoCircle size={20} stroke={1.5} />}
      timeout={15000}
      showCloseButton={false}
    >
      Your browser is outdated. Some features may not work correctly.
    </Toast>
  </StoryContainer>
); 