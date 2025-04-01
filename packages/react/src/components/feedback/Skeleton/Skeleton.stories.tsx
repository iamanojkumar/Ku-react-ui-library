import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Skeleton, SkeletonText, SkeletonCircle, SkeletonAvatar } from './Skeleton';

const meta = {
  title: 'Components/Skeleton',
  component: Skeleton,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
Skeleton is a placeholder component that can be used to show loading states.

## Features
- Multiple sizes to match your components
- Various shapes (text, circle, rectangle, avatar)
- Different variants (button, input, card)
- Customizable dimensions
- Repeatable for lists and grids
- Reduced motion support
- Dark theme support
- High contrast mode support
        `,
      },
    },
  },
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

// Different sizes
export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '200px' }}>
      <Skeleton size="xs" />
      <Skeleton size="sm" />
      <Skeleton size="md" />
      <Skeleton size="lg" />
      <Skeleton size="xl" />
    </div>
  ),
};

// Different shapes
export const Shapes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '200px' }}>
      <SkeletonText />
      <SkeletonCircle size="md" />
      <Skeleton shape="rectangle" />
      <SkeletonAvatar />
    </div>
  ),
};

// Different variants
export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '300px' }}>
      <Skeleton variant="button" />
      <Skeleton variant="input" />
      <Skeleton variant="card" />
    </div>
  ),
};

// Text block
export const TextBlock: Story = {
  render: () => (
    <div style={{ width: '300px' }}>
      <SkeletonText size="lg" style={{ width: '80%' }} />
      <SkeletonText repeat={3} />
      <SkeletonText style={{ width: '60%' }} />
    </div>
  ),
};

// Card with content
export const CardWithContent: Story = {
  render: () => (
    <div style={{ width: '300px', padding: '1rem', border: '1px solid var(--ku-color-border-primary)', borderRadius: 'var(--ku-radius-lg)' }}>
      <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
        <SkeletonAvatar size="md" />
        <div style={{ flex: 1 }}>
          <SkeletonText size="sm" style={{ width: '60%', marginBottom: '0.5rem' }} />
          <SkeletonText size="xs" style={{ width: '40%' }} />
        </div>
      </div>
      <Skeleton variant="card" style={{ height: '150px', marginBottom: '1rem' }} />
      <SkeletonText repeat={2} />
    </div>
  ),
};

// List
export const List: Story = {
  render: () => (
    <div style={{ width: '300px' }}>
      {Array.from({ length: 5 }).map((_, index) => (
        <div
          key={index}
          style={{
            display: 'flex',
            gap: '1rem',
            padding: '1rem',
            borderBottom: index < 4 ? '1px solid var(--ku-color-border-primary)' : 'none'
          }}
        >
          <SkeletonCircle size="sm" />
          <div style={{ flex: 1 }}>
            <SkeletonText size="sm" style={{ marginBottom: '0.5rem' }} />
            <SkeletonText size="xs" style={{ width: '60%' }} />
          </div>
        </div>
      ))}
    </div>
  ),
};

// Without animation
export const NoAnimation: Story = {
  args: {
    animate: false,
    width: 200,
  },
};

// Custom dimensions
export const CustomDimensions: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Skeleton width={150} height={30} />
      <Skeleton width="50%" height={40} />
      <Skeleton width="75%" height="60px" />
    </div>
  ),
};

// Grid layout
export const GridLayout: Story = {
  render: () => (
    <div style={{ 
      display: 'grid', 
      gridTemplateColumns: 'repeat(3, 1fr)', 
      gap: '1rem',
      width: '400px'
    }}>
      {Array.from({ length: 6 }).map((_, index) => (
        <div key={index} style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <Skeleton variant="card" style={{ height: '100px' }} />
          <SkeletonText size="sm" />
          <SkeletonText size="xs" style={{ width: '60%' }} />
        </div>
      ))}
    </div>
  ),
}; 