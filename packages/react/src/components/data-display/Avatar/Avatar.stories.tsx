import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from './Avatar';

const meta: Meta<typeof Avatar> = {
  title: 'Components/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    shape: {
      control: 'radio',
      options: ['circle', 'square'],
    },
    color: {
      control: 'select',
      options: ['default', 'primary', 'success', 'warning', 'error', 'info'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

// Base Avatar with image
export const WithImage: Story = {
  args: {
    src: 'https://i.pravatar.cc/300',
    alt: 'User avatar',
    size: 'md',
  },
};

// Avatar with initials
export const WithInitials: Story = {
  args: {
    initials: 'JD',
    size: 'md',
    color: 'primary',
  },
};

// Avatar with fallback icon
export const WithFallback: Story = {
  args: {
    size: 'md',
    color: 'default',
  },
};

// Different sizes
export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <Avatar size="xs" initials="XS" />
      <Avatar size="sm" initials="SM" />
      <Avatar size="md" initials="MD" />
      <Avatar size="lg" initials="LG" />
      <Avatar size="xl" initials="XL" />
    </div>
  ),
};

// Different shapes
export const Shapes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem' }}>
      <Avatar shape="circle" initials="CI" />
      <Avatar shape="square" initials="SQ" />
    </div>
  ),
};

// Different colors
export const Colors: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem' }}>
      <Avatar color="default" initials="DE" />
      <Avatar color="primary" initials="PR" />
      <Avatar color="success" initials="SU" />
      <Avatar color="warning" initials="WA" />
      <Avatar color="error" initials="ER" />
      <Avatar color="info" initials="IN" />
    </div>
  ),
};

// Image fallback
export const ImageFallback: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem' }}>
      <Avatar src="invalid-url.jpg" initials="FB" />
      <Avatar src="invalid-url.jpg" />
    </div>
  ),
};

// Avatar group
export const Group: Story = {
  render: () => (
    <div style={{ display: 'flex', paddingLeft: '1rem' }}>
      <Avatar
        src="https://i.pravatar.cc/300?img=1"
        alt="User 1"
        grouped
      />
      <Avatar
        src="https://i.pravatar.cc/300?img=2"
        alt="User 2"
        grouped
      />
      <Avatar
        src="https://i.pravatar.cc/300?img=3"
        alt="User 3"
        grouped
      />
      <Avatar
        initials="+2"
        grouped
        color="primary"
      />
    </div>
  ),
}; 