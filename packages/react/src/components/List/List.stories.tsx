import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { List, ListItem } from './List';
import { Link } from '../Link/Link';
import { Badge } from '../Badge/Badge';
import { InfoCircleIcon } from '@ku-design-system/core';

const meta = {
  title: 'Components/List',
  component: List,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
A flexible list component that supports various ordering styles and content composition.

## Features
- Multiple list styles (unordered, ordered, none)
- Various marker types (disc, circle, square, decimal, alpha, roman)
- Nested lists support
- Flexible content composition
- Proper accessibility roles and announcements
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['unordered', 'ordered', 'none'],
      description: 'The type of list',
    },
    marker: {
      control: 'select',
      options: ['disc', 'circle', 'square', 'decimal', 'alpha', 'roman', 'none'],
      description: 'The marker style for list items',
    },
  },
} as const;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic unordered list
export const UnorderedList: Story = {
  render: () => (
    <List>
      <ListItem>First item</ListItem>
      <ListItem>Second item</ListItem>
      <ListItem>Third item</ListItem>
    </List>
  ),
};

// Basic ordered list
export const OrderedList: Story = {
  render: () => (
    <List variant="ordered" marker="decimal">
      <ListItem>First item</ListItem>
      <ListItem>Second item</ListItem>
      <ListItem>Third item</ListItem>
    </List>
  ),
};

// Different marker styles
export const MarkerStyles: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '2rem' }}>
      <List marker="disc">
        <ListItem>Disc marker</ListItem>
        <ListItem>Second item</ListItem>
        <ListItem>Third item</ListItem>
      </List>
      <List marker="circle">
        <ListItem>Circle marker</ListItem>
        <ListItem>Second item</ListItem>
        <ListItem>Third item</ListItem>
      </List>
      <List marker="square">
        <ListItem>Square marker</ListItem>
        <ListItem>Second item</ListItem>
        <ListItem>Third item</ListItem>
      </List>
    </div>
  ),
};

// Different ordered list styles
export const OrderedStyles: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '2rem' }}>
      <List variant="ordered" marker="decimal">
        <ListItem>Decimal numbers</ListItem>
        <ListItem>Second item</ListItem>
        <ListItem>Third item</ListItem>
      </List>
      <List variant="ordered" marker="alpha">
        <ListItem>Alphabetical</ListItem>
        <ListItem>Second item</ListItem>
        <ListItem>Third item</ListItem>
      </List>
      <List variant="ordered" marker="roman">
        <ListItem>Roman numerals</ListItem>
        <ListItem>Second item</ListItem>
        <ListItem>Third item</ListItem>
      </List>
    </div>
  ),
};

// Nested lists
export const NestedLists: Story = {
  render: () => (
    <List>
      <ListItem>First level item</ListItem>
      <ListItem>
        First level item with nested list
        <List marker="circle">
          <ListItem>Second level item</ListItem>
          <ListItem>
            Second level item with nested list
            <List marker="square">
              <ListItem>Third level item</ListItem>
              <ListItem>Third level item</ListItem>
            </List>
          </ListItem>
        </List>
      </ListItem>
      <ListItem>First level item</ListItem>
    </List>
  ),
};

// Rich content composition
export const RichContent: Story = {
  render: () => (
    <List>
      <ListItem>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <InfoCircleIcon size={16} />
          <span>Item with icon</span>
        </div>
      </ListItem>
      <ListItem>
        <div>Item with link and badge</div>
        <Link href="#" variant="primary">Learn more</Link>
        <Badge variant="success">New</Badge>
      </ListItem>
      <ListItem>
        <div>Item with multiple paragraphs</div>
        <p>This is an additional paragraph with more detailed information about the list item.</p>
        <p>You can add as much content as needed within a list item.</p>
      </ListItem>
    </List>
  ),
}; 