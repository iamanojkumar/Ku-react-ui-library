import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Grid } from './Grid';

const meta: Meta<typeof Grid> = {
  title: 'Layout/Grid',
  component: Grid,
  tags: ['autodocs'],
  argTypes: {
    columns: {
      control: 'select',
      options: [1, 2, 3, 4, 5, 6, 8, 10, 12],
    },
    gap: {
      control: 'select',
      options: ['none', 'xs', 'sm', 'md', 'lg', 'xl', '2xl'],
    },
    responsive: { control: 'boolean' },
    equalHeight: { control: 'boolean' },
    autoFit: { control: 'boolean' },
    autoFill: { control: 'boolean' },
    autoColumns: { control: 'boolean' },
    autoRows: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Grid>;

const GridItem = ({ children }: { children: React.ReactNode }) => (
  <div style={{ padding: '1rem', background: '#f0f0f0', borderRadius: '4px' }}>
    {children}
  </div>
);

export const Basic: Story = {
  args: {
    columns: 3,
    gap: 'md',
  },
  render: (args) => (
    <Grid {...args}>
      <GridItem>Item 1</GridItem>
      <GridItem>Item 2</GridItem>
      <GridItem>Item 3</GridItem>
    </Grid>
  ),
};

export const Responsive: Story = {
  args: {
    columns: 4,
    gap: 'md',
    responsive: true,
  },
  render: (args) => (
    <Grid {...args}>
      <GridItem>Item 1</GridItem>
      <GridItem>Item 2</GridItem>
      <GridItem>Item 3</GridItem>
      <GridItem>Item 4</GridItem>
      <GridItem>Item 5</GridItem>
      <GridItem>Item 6</GridItem>
      <GridItem>Item 7</GridItem>
      <GridItem>Item 8</GridItem>
    </Grid>
  ),
};

export const EqualHeight: Story = {
  args: {
    columns: 3,
    gap: 'md',
    equalHeight: true,
  },
  render: (args) => (
    <Grid {...args}>
      <GridItem>
        <h3>Short Content</h3>
        <p>This is a short item.</p>
      </GridItem>
      <GridItem>
        <h3>Medium Content</h3>
        <p>This is a medium length item with more content to demonstrate equal height behavior.</p>
      </GridItem>
      <GridItem>
        <h3>Long Content</h3>
        <p>This is a very long item with lots of content to demonstrate equal height behavior. It should stretch to match the height of the other items.</p>
      </GridItem>
    </Grid>
  ),
};

export const AutoFit: Story = {
  args: {
    gap: 'md',
    autoFit: true,
  },
  render: (args) => (
    <Grid {...args}>
      <GridItem>Item 1</GridItem>
      <GridItem>Item 2</GridItem>
      <GridItem>Item 3</GridItem>
      <GridItem>Item 4</GridItem>
      <GridItem>Item 5</GridItem>
      <GridItem>Item 6</GridItem>
    </Grid>
  ),
};

export const AutoFill: Story = {
  args: {
    gap: 'md',
    autoFill: true,
  },
  render: (args) => (
    <Grid {...args}>
      <GridItem>Item 1</GridItem>
      <GridItem>Item 2</GridItem>
      <GridItem>Item 3</GridItem>
      <GridItem>Item 4</GridItem>
      <GridItem>Item 5</GridItem>
      <GridItem>Item 6</GridItem>
    </Grid>
  ),
};

export const DifferentGaps: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <div>
        <h4>No Gap</h4>
        <Grid columns={3} gap="none">
          <GridItem>Item 1</GridItem>
          <GridItem>Item 2</GridItem>
          <GridItem>Item 3</GridItem>
        </Grid>
      </div>
      <div>
        <h4>Small Gap</h4>
        <Grid columns={3} gap="sm">
          <GridItem>Item 1</GridItem>
          <GridItem>Item 2</GridItem>
          <GridItem>Item 3</GridItem>
        </Grid>
      </div>
      <div>
        <h4>Medium Gap</h4>
        <Grid columns={3} gap="md">
          <GridItem>Item 1</GridItem>
          <GridItem>Item 2</GridItem>
          <GridItem>Item 3</GridItem>
        </Grid>
      </div>
      <div>
        <h4>Large Gap</h4>
        <Grid columns={3} gap="lg">
          <GridItem>Item 1</GridItem>
          <GridItem>Item 2</GridItem>
          <GridItem>Item 3</GridItem>
        </Grid>
      </div>
    </div>
  ),
}; 