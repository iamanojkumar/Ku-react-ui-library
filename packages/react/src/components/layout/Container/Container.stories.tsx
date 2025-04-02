import type { Meta, StoryObj } from '@storybook/react';
import { Container } from '../Container';

const meta = {
  title: 'Layout/Container',
  component: Container,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    maxWidth: {
      control: 'text',
      description: 'Maximum width of the container',
      defaultValue: '1200px',
    },
    padding: {
      control: 'text',
      description: 'Padding of the container',
      defaultValue: '0 1rem',
    },
  },
} satisfies Meta<typeof Container>;

export default meta;
type Story = StoryObj<typeof Container>;

export const Default: Story = {
  args: {
    children: (
      <div style={{ 
        background: '#f0f0f0', 
        padding: '2rem', 
        textAlign: 'center' 
      }}>
        Container Content
      </div>
    ),
  },
};

export const Narrow: Story = {
  args: {
    maxWidth: '600px',
    children: (
      <div style={{ 
        background: '#f0f0f0', 
        padding: '2rem', 
        textAlign: 'center' 
      }}>
        Narrow Container
      </div>
    ),
  },
};

export const WithCustomPadding: Story = {
  args: {
    padding: '2rem',
    children: (
      <div style={{ 
        background: '#f0f0f0', 
        padding: '2rem', 
        textAlign: 'center' 
      }}>
        Container with Custom Padding
      </div>
    ),
  },
}; 