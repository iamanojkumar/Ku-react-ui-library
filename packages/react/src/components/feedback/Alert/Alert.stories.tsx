import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Alert } from './Alert';
import { BellIcon } from '@ku-design-system/core';
import { Button } from '../Button/Button';

const meta: Meta<typeof Alert> = {
  title: 'Components/Alert',
  component: Alert,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['info', 'success', 'warning', 'error'],
      description: 'The visual style variant of the alert',
      defaultValue: 'info'
    },
    title: {
      control: 'text',
      description: 'The title of the alert'
    },
    dismissible: {
      control: 'boolean',
      description: 'Whether the alert can be dismissed',
      defaultValue: false
    },
    showActions: {
      control: 'boolean',
      description: 'Whether to show the actions',
      defaultValue: true
    },
    fullWidthOnMobile: {
      control: 'boolean',
      description: 'Whether the alert should be full width on mobile',
      defaultValue: true
    }
  }
};

export default meta;
type Story = StoryObj<typeof Alert>;

export const Info: Story = {
  args: {
    variant: 'info',
    children: 'This is an informational alert message.'
  }
};

export const Success: Story = {
  args: {
    variant: 'success',
    children: 'Operation completed successfully!'
  }
};

export const Warning: Story = {
  args: {
    variant: 'warning',
    children: 'Please review your changes before proceeding.'
  }
};

export const Error: Story = {
  args: {
    variant: 'error',
    children: 'An error occurred while processing your request.'
  }
};

export const WithTitle: Story = {
  args: {
    variant: 'info',
    title: 'Update Available',
    children: 'A new version of the application is available. Please update to access the latest features.'
  }
};

export const WithCustomIcon: Story = {
  args: {
    variant: 'info',
    icon: React.createElement(BellIcon, { size: 24 }),
    title: 'Notification Settings',
    children: 'Your notification preferences have been updated successfully.'
  }
};

export const Dismissible: Story = {
  args: {
    variant: 'success',
    dismissible: true,
    title: 'Success',
    children: 'Your changes have been saved. Click the X to dismiss this message.',
    onDismiss: () => console.log('Alert dismissed')
  }
};

export const WithActions: Story = {
  args: {
    variant: 'warning',
    title: 'Unsaved Changes',
    children: 'You have unsaved changes. Would you like to save them before leaving?',
    showActions: true,
    actions: (
      <div>
        <Button
          variant="primary"
          size="sm"
          onClick={() => console.log('Save changes')}
        >
          Save Changes
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => console.log('Discard changes')}
        >
          Discard
        </Button>
      </div>
    )
  }
};

export const LongContent: Story = {
  args: {
    variant: 'info',
    title: 'System Maintenance',
    children: `We will be performing scheduled maintenance on our servers starting from
      Saturday, March 15th at 2:00 AM UTC. During this time, some services may be
      temporarily unavailable. The maintenance window is expected to last approximately
      2 hours. We recommend saving your work and logging out before the maintenance begins.
      If you have any questions or concerns, please contact our support team.`
  }
};

export const FullWidthMobile: Story = {
  args: {
    variant: 'error',
    title: 'Connection Lost',
    children: 'Your internet connection appears to be offline. Some features may be unavailable.',
    fullWidthOnMobile: true
  }
}; 