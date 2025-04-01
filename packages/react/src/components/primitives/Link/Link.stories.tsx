import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import {
  ExternalLinkIcon,
  ArrowRightIcon,
  DownloadIcon,
  EditIcon,
  InfoCircleIcon,
} from '@ku-design-system/core';
import { Link } from './Link';

const meta = {
  title: 'Components/Link',
  component: Link,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
A flexible link component that supports icons, various colors, and proper accessibility.

## Features
- Icon support (leading and trailing icons)
- Color variants (default, primary, secondary, inherit)
- Disabled state
- Font inheritance
- Multiline text support
- Proper accessibility roles
- External link support
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'primary', 'secondary', 'inherit'],
      description: 'Color variant of the link',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the link is disabled',
    },
    external: {
      control: 'boolean',
      description: 'Whether the link should open in a new tab',
    },
  },
} as const;

export default meta;
type Story = StoryObj<typeof meta>;

// Default link
export const Default: Story = {
  args: {
    children: 'Default Link',
    href: '#',
  },
};

// Color variants
export const ColorVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Link href="#" variant="default">
        Default Link
      </Link>
      <Link href="#" variant="primary">
        Primary Link
      </Link>
      <Link href="#" variant="secondary">
        Secondary Link
      </Link>
      <div style={{ color: 'purple' }}>
        <Link href="#" variant="inherit">
          Inherited Color Link
        </Link>
      </div>
    </div>
  ),
};

// With icons
export const WithIcons: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Link href="#" icon={InfoCircleIcon}>
        With Leading Icon
      </Link>
      <Link href="#" trailingIcon={ArrowRightIcon}>
        With Trailing Icon
      </Link>
      <Link href="#" icon={DownloadIcon} trailingIcon={ArrowRightIcon}>
        With Both Icons
      </Link>
      <Link href="#" external icon={ExternalLinkIcon}>
        External Link
      </Link>
    </div>
  ),
};

// States
export const States: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Link href="#">Normal Link</Link>
      <Link href="#" disabled>
        Disabled Link
      </Link>
      <Link onClick={() => alert('Clicked!')}>Button Role Link</Link>
    </div>
  ),
};

// Multiline text
export const MultilineText: Story = {
  render: () => (
    <div style={{ maxWidth: '200px' }}>
      <p>
        This is a paragraph with a{' '}
        <Link href="#" icon={EditIcon}>
          multiline link that should wrap properly within the text flow without breaking
        </Link>{' '}
        and continue with more text after it.
      </p>
    </div>
  ),
};

// Font inheritance
export const FontInheritance: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <h1 style={{ fontFamily: 'serif' }}>
        Heading with <Link href="#">Inherited Font</Link>
      </h1>
      <p style={{ fontFamily: 'monospace' }}>
        Monospace text with <Link href="#">Inherited Font</Link>
      </p>
      <div style={{ fontSize: '24px' }}>
        Large text with <Link href="#">Inherited Size</Link>
      </div>
    </div>
  ),
}; 