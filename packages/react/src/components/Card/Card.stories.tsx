import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';
import { ThemeProvider } from '../ThemeProvider/ThemeProvider';
import { Button } from '../Button/Button';

const meta = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
A versatile card component that can display various types of content.
It follows the KU Design System token system and provides excellent accessibility support.

## Features
- Multiple visual variants (elevated, outlined, filled)
- Media content support
- Action buttons
- Clickable state
- Disabled state
- Responsive design
- Dark theme support
- Accessibility support
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['elevated', 'outlined', 'filled'],
      description: 'The visual style variant of the card',
      table: {
        defaultValue: { summary: 'elevated' },
      },
    },
    clickable: {
      control: 'boolean',
      description: 'Whether the card is clickable',
      table: {
        defaultValue: { summary: false },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the card is disabled',
      table: {
        defaultValue: { summary: false },
      },
    },
    media: {
      control: 'boolean',
      description: 'Whether to show media content',
      mapping: {
        true: (
          <img
            src="https://picsum.photos/400/200"
            alt="Sample image"
            style={{ width: '100%', height: 'auto' }}
          />
        ),
        false: undefined,
      },
    },
    actions: {
      control: 'boolean',
      description: 'Whether to show action buttons',
      mapping: {
        true: (
          <>
            <Button variant="ghost" size="sm">Cancel</Button>
            <Button variant="primary" size="sm">Save</Button>
          </>
        ),
        false: undefined,
      },
    },
  },
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    )
  ],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof Card>;

const sampleImage = 'https://picsum.photos/400/300';

const Template: Story = {
  render: (args) => {
    const { media, actions, children, ...rest } = args;
    
    return (
      <Card
        {...rest}
        media={media ? <img src={sampleImage} alt="Sample image" /> : undefined}
      >
        <div>
          <h3 style={{ margin: '0 0 0.5rem 0' }}>Card Title</h3>
          <p style={{ margin: 0 }}>{children}</p>
        </div>
        {actions && (
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <Button variant="primary">Primary Action</Button>
            <Button variant="secondary">Secondary Action</Button>
          </div>
        )}
      </Card>
    );
  }
};

export const Default: Story = {
  ...Template,
  args: {
    variant: 'elevated',
    clickable: false,
    disabled: false,
    media: false,
    actions: false,
    children: 'This is a customizable card. Use the controls below to modify its appearance and behavior.'
  }
};

export const WithMedia: Story = {
  ...Template,
  args: {
    ...Default.args,
    media: true,
    children: 'This card includes a media section at the top. The media can be an image, video, or any other content.'
  }
};

export const WithActions: Story = {
  ...Template,
  args: {
    ...Default.args,
    actions: true,
    children: 'This card includes action buttons at the bottom.'
  }
};

export const Clickable: Story = {
  ...Template,
  args: {
    ...Default.args,
    clickable: true,
    children: 'This card is clickable and will show a hover effect. Click it to see the interaction.'
  }
};

export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 'var(--ku-spacing-lg)' }}>
      <Card variant="elevated">
        <div style={{ padding: 'var(--ku-spacing-lg)' }}>
          <h3 style={{ margin: '0 0 0.5rem 0' }}>Elevated Card</h3>
          <p style={{ margin: 0 }}>This card has a subtle shadow.</p>
        </div>
      </Card>
      <Card variant="outlined">
        <div style={{ padding: 'var(--ku-spacing-lg)' }}>
          <h3 style={{ margin: '0 0 0.5rem 0' }}>Outlined Card</h3>
          <p style={{ margin: 0 }}>This card has a border.</p>
        </div>
      </Card>
      <Card variant="filled">
        <div style={{ padding: 'var(--ku-spacing-lg)' }}>
          <h3 style={{ margin: '0 0 0.5rem 0' }}>Filled Card</h3>
          <p style={{ margin: 0 }}>This card has a background color.</p>
        </div>
      </Card>
    </div>
  )
};

export const Disabled: Story = {
  ...Template,
  args: {
    ...Default.args,
    disabled: true,
    children: 'This card is disabled and cannot be interacted with.'
  }
}; 