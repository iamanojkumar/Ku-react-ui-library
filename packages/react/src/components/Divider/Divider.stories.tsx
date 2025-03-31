import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Divider } from './Divider';

const meta: Meta<typeof Divider> = {
  title: 'Layout/Divider',
  component: Divider,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    orientation: {
      control: 'radio',
      options: ['horizontal', 'vertical'],
      description: 'The orientation of the divider',
    },
    decorative: {
      control: 'boolean',
      description: 'Whether the divider is decorative',
    },
    label: {
      control: 'text',
      description: 'Optional label for the divider',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Divider>;

// Basic horizontal divider
export const Horizontal: Story = {
  args: {
    orientation: 'horizontal',
  },
  render: (args) => (
    <div style={{ width: '100%', maxWidth: '500px' }}>
      <p>Content above</p>
      <Divider {...args} />
      <p>Content below</p>
    </div>
  ),
};

// Vertical divider
export const Vertical: Story = {
  args: {
    orientation: 'vertical',
  },
  render: (args) => (
    <div style={{ height: '100px', display: 'flex', alignItems: 'center' }}>
      <span>Left content</span>
      <Divider {...args} />
      <span>Right content</span>
    </div>
  ),
};

// Divider with label
export const WithLabel: Story = {
  args: {
    label: 'Section',
  },
  render: (args) => (
    <div style={{ width: '100%', maxWidth: '500px' }}>
      <p>Content above</p>
      <Divider {...args} />
      <p>Content below</p>
    </div>
  ),
};

// Semantic divider
export const Semantic: Story = {
  args: {
    decorative: false,
    orientation: 'horizontal',
  },
  render: (args) => (
    <div style={{ width: '100%', maxWidth: '500px' }}>
      <p>First section</p>
      <Divider {...args} />
      <p>Second section</p>
    </div>
  ),
};

// Multiple sections with dividers
export const MultipleSections: Story = {
  render: () => (
    <div style={{ width: '100%', maxWidth: '500px' }}>
      <h3>Section 1</h3>
      <p>Content for section 1</p>
      <Divider label="Section 2" />
      <p>Content for section 2</p>
      <Divider label="Section 3" />
      <p>Content for section 3</p>
    </div>
  ),
};

// List divider
export const ListDivider: Story = {
  render: () => (
    <div style={{ width: '100%', maxWidth: '300px' }}>
      <div style={{ padding: '8px 0' }}>List item 1</div>
      <Divider decorative />
      <div style={{ padding: '8px 0' }}>List item 2</div>
      <Divider decorative />
      <div style={{ padding: '8px 0' }}>List item 3</div>
    </div>
  ),
};

// Vertical list with dividers
export const VerticalListDivider: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', height: '40px' }}>
      <span>Item 1</span>
      <Divider orientation="vertical" decorative />
      <span>Item 2</span>
      <Divider orientation="vertical" decorative />
      <span>Item 3</span>
    </div>
  ),
}; 