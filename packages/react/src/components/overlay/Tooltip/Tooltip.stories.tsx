import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Tooltip } from './Tooltip';

const meta: Meta<typeof Tooltip> = {
  title: 'Components/Tooltip',
  component: Tooltip,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
  args: {
    content: 'This is a tooltip',
    children: <button className="ku-button">Hover me</button>,
  },
};

export const WithIcon: Story = {
  args: {
    content: 'This tooltip includes an info icon',
    showIcon: true,
    children: <button className="ku-button">Hover me</button>,
  },
};

export const Positions: Story = {
  render: () => (
    <div style={{ 
      display: 'grid', 
      gridTemplateColumns: 'repeat(3, auto)',
      gap: '2rem',
      padding: '4rem',
      placeItems: 'center',
    }}>
      <div />
      <Tooltip content="Top tooltip" position="top">
        <button className="ku-button">Top</button>
      </Tooltip>
      <div />
      <Tooltip content="Left tooltip" position="left">
        <button className="ku-button">Left</button>
      </Tooltip>
      <div style={{ visibility: 'hidden' }}>
        <button className="ku-button">Center</button>
      </div>
      <Tooltip content="Right tooltip" position="right">
        <button className="ku-button">Right</button>
      </Tooltip>
      <div />
      <Tooltip content="Bottom tooltip" position="bottom">
        <button className="ku-button">Bottom</button>
      </Tooltip>
      <div />
    </div>
  ),
};

export const CustomDelay: Story = {
  args: {
    content: 'This tooltip has a longer delay (500ms)',
    delay: 500,
    children: <button className="ku-button">Hover me</button>,
  },
};

export const LongContent: Story = {
  args: {
    content: 'This is a very long tooltip content that should wrap to multiple lines to demonstrate how the tooltip handles longer text content and maintains readability.',
    children: <button className="ku-button">Hover me</button>,
  },
};

export const WithHTMLContent: Story = {
  args: {
    content: (
      <div>
        <strong>Rich Content</strong>
        <br />
        <em>With formatting</em>
        <br />
        <span style={{ color: 'var(--ku-color-info-2)' }}>And custom styling</span>
      </div>
    ),
    children: <button className="ku-button">Hover me</button>,
  },
};

export const KeyboardFocus: Story = {
  args: {
    content: 'This tooltip appears on focus. Try using the Tab key.',
    children: <button className="ku-button">Focus me</button>,
  },
};

export const AutomaticRepositioning: Story = {
  render: () => (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column',
      gap: '1rem',
      padding: '1rem',
    }}>
      <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
        <Tooltip content="This tooltip will automatically reposition to the right" position="left">
          <button className="ku-button">Edge Left</button>
        </Tooltip>
      </div>
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Tooltip content="This tooltip will automatically reposition to the left" position="right">
          <button className="ku-button">Edge Right</button>
        </Tooltip>
      </div>
      <div style={{ display: 'flex', alignItems: 'flex-start' }}>
        <Tooltip content="This tooltip will automatically reposition to the bottom" position="top">
          <button className="ku-button">Edge Top</button>
        </Tooltip>
      </div>
      <div style={{ display: 'flex', alignItems: 'flex-end' }}>
        <Tooltip content="This tooltip will automatically reposition to the top" position="bottom">
          <button className="ku-button">Edge Bottom</button>
        </Tooltip>
      </div>
    </div>
  ),
}; 