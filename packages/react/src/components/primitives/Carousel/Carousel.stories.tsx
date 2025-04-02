import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Carousel } from './Carousel';
import { Card } from '../Card/Card';
import { ThemeProvider } from '../ThemeProvider/ThemeProvider';

const meta = {
  title: 'Components/Carousel',
  component: Carousel,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
A versatile carousel component that supports multiple navigation methods and content types.
It follows the KU Design System token system and provides excellent accessibility support.

## Features
- Touch and mouse drag scrolling
- Keyboard navigation
- Navigation controls
- Progress indicators
- Auto-play option
- Responsive design
- Accessibility support
- Dark theme support
- Reduced motion support
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    showControls: {
      control: 'boolean',
      description: 'Whether to show navigation controls',
      table: {
        defaultValue: { summary: true },
      },
    },
    showIndicators: {
      control: 'boolean',
      description: 'Whether to show progress indicators',
      table: {
        defaultValue: { summary: true },
      },
    },
    autoPlay: {
      control: 'boolean',
      description: 'Whether to auto-play the carousel',
      table: {
        defaultValue: { summary: false },
      },
    },
    autoPlayInterval: {
      control: 'number',
      description: 'Auto-play interval in milliseconds',
      table: {
        defaultValue: { summary: 5000 },
      },
    },
    pauseOnHover: {
      control: 'boolean',
      description: 'Whether to pause auto-play on hover',
      table: {
        defaultValue: { summary: true },
      },
    },
    loop: {
      control: 'boolean',
      description: 'Whether to loop through items',
      table: {
        defaultValue: { summary: true },
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
} satisfies Meta<typeof Carousel>;

export default meta;
type Story = StoryObj<typeof Carousel>;

// Sample carousel items
const cardItems = [
  {
    id: '1',
    content: (
      <Card variant="elevated">
        <div style={{ padding: 'var(--ku-spacing-lg)' }}>
          <h3>Card 1</h3>
          <p>This is the first card in the carousel.</p>
        </div>
      </Card>
    ),
  },
  {
    id: '2',
    content: (
      <Card variant="elevated">
        <div style={{ padding: 'var(--ku-spacing-lg)' }}>
          <h3>Card 2</h3>
          <p>This is the second card in the carousel.</p>
        </div>
      </Card>
    ),
  },
  {
    id: '3',
    content: (
      <Card variant="elevated">
        <div style={{ padding: 'var(--ku-spacing-lg)' }}>
          <h3>Card 3</h3>
          <p>This is the third card in the carousel.</p>
        </div>
      </Card>
    ),
  },
  {
    id: '4',
    content: (
      <Card variant="elevated">
        <div style={{ padding: 'var(--ku-spacing-lg)' }}>
          <h3>Card 4</h3>
          <p>This is the fourth card in the carousel.</p>
        </div>
      </Card>
    ),
  },
];

// Basic carousel
export const Default: Story = {
  args: {
    items: cardItems,
  },
};

// Carousel without controls
export const WithoutControls: Story = {
  args: {
    items: cardItems,
    showControls: false,
  },
};

// Carousel without indicators
export const WithoutIndicators: Story = {
  args: {
    items: cardItems,
    showIndicators: false,
  },
};

// Auto-playing carousel
export const AutoPlay: Story = {
  args: {
    items: cardItems,
    autoPlay: true,
    autoPlayInterval: 3000,
  },
};

// Non-looping carousel
export const NonLooping: Story = {
  args: {
    items: cardItems,
    loop: false,
  },
};

// Carousel with custom content
export const CustomContent: Story = {
  args: {
    items: [
      {
        id: '1',
        content: (
          <div
            style={{
              padding: 'var(--ku-spacing-lg)',
              background: 'var(--ku-color-background-surface-2)',
              borderRadius: 'var(--ku-border-radius-lg)',
              height: '300px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center'
            }}
          >
            <div>
              <h2>Custom Content 1</h2>
              <p>This is a custom content area with different styling.</p>
            </div>
          </div>
        ),
      },
      {
        id: '2',
        content: (
          <div
            style={{
              padding: 'var(--ku-spacing-lg)',
              background: 'var(--ku-color-background-surface-3)',
              borderRadius: 'var(--ku-border-radius-lg)',
              height: '300px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center'
            }}
          >
            <div>
              <h2>Custom Content 2</h2>
              <p>Another custom content area with different styling.</p>
            </div>
          </div>
        ),
      },
      {
        id: '3',
        content: (
          <div
            style={{
              padding: 'var(--ku-spacing-lg)',
              background: 'var(--ku-color-background-surface-4)',
              borderRadius: 'var(--ku-border-radius-lg)',
              height: '300px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center'
            }}
          >
            <div>
              <h2>Custom Content 3</h2>
              <p>Yet another custom content area with different styling.</p>
            </div>
          </div>
        ),
      },
    ],
  },
}; 