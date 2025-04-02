import React, { useState } from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import { Modal } from './Modal';
import type { ModalProps } from './Modal';

const meta = {
  title: 'Components/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
A flexible modal component that supports multiple positions, sizes, and accessibility features.

## Features
- Multiple positions (center, left, right)
- Different sizes (small, medium, large, full)
- Focus trapping
- Keyboard navigation (Escape to close, Tab for focus)
- Proper accessibility labeling
- Animations with reduced motion support
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    position: {
      control: 'select',
      options: ['center', 'left', 'right'],
      description: 'The position of the modal',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large', 'full'],
      description: 'The size of the modal',
    },
    title: {
      control: 'text',
      description: 'The title of the modal',
    },
    subtitle: {
      control: 'text',
      description: 'The subtitle of the modal',
    },
    showCloseButton: {
      control: 'boolean',
      description: 'Whether to show the close button',
    },
    closeOnOverlayClick: {
      control: 'boolean',
      description: 'Whether to close on overlay click',
    },
    closeOnEscape: {
      control: 'boolean',
      description: 'Whether to close on escape key',
    },
  },
} satisfies Meta<typeof Modal>;

export default meta;

// Template for all stories
const Template: StoryFn<typeof Modal> = (args) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button onClick={() => setIsOpen(true)} className="ku-button ku-button--primary">
        Open Modal
      </button>
      <Modal {...args} isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};

// Basic modal
export const Default = Template.bind({});
Default.args = {
  title: 'Modal Title',
  subtitle: 'This is a subtitle that provides additional context',
  children: (
    <div>
      <p>This is the modal content. You can put anything here.</p>
      <div style={{ marginTop: 'var(--ku-spacing-4)' }}>
        <button className="ku-button ku-button--primary">Primary Action</button>
      </div>
    </div>
  ),
};

// Different positions
export const Positions = Template.bind({});
Positions.args = {
  title: 'Position Examples',
  children: (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--ku-spacing-4)' }}>
      <div>
        <h3>Center Modal</h3>
        <p>This modal appears in the center (default)</p>
      </div>
      <div>
        <h3>Left Sheet</h3>
        <p>Try setting position="left" for a left slide-in sheet</p>
      </div>
      <div>
        <h3>Right Sheet</h3>
        <p>Try setting position="right" for a right slide-in sheet</p>
      </div>
    </div>
  ),
};

// Different sizes
export const Sizes = Template.bind({});
Sizes.args = {
  title: 'Size Examples',
  children: (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--ku-spacing-4)' }}>
      <div>
        <h3>Small Modal</h3>
        <p>Try setting size="small" for a compact modal</p>
      </div>
      <div>
        <h3>Medium Modal</h3>
        <p>This is the default size (medium)</p>
      </div>
      <div>
        <h3>Large Modal</h3>
        <p>Try setting size="large" for more content</p>
      </div>
      <div>
        <h3>Full Modal</h3>
        <p>Try setting size="full" for maximum space</p>
      </div>
    </div>
  ),
};

// With form elements (for focus trapping demo)
export const WithForm = Template.bind({});
WithForm.args = {
  title: 'Form Modal',
  children: (
    <form onSubmit={(e) => e.preventDefault()}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--ku-spacing-4)' }}>
        <input
          type="text"
          placeholder="Enter your name"
          style={{ padding: 'var(--ku-spacing-2)' }}
        />
        <input
          type="email"
          placeholder="Enter your email"
          style={{ padding: 'var(--ku-spacing-2)' }}
        />
        <textarea
          placeholder="Your message"
          rows={4}
          style={{ padding: 'var(--ku-spacing-2)' }}
        />
        <div style={{ display: 'flex', gap: 'var(--ku-spacing-2)' }}>
          <button type="submit" className="ku-button ku-button--primary">Submit</button>
          <button type="button" className="ku-button ku-button--secondary">Cancel</button>
        </div>
      </div>
    </form>
  ),
};

// With long content (for scrolling)
export const WithLongContent = Template.bind({});
WithLongContent.args = {
  title: 'Scrollable Content',
  children: (
    <div>
      {Array.from({ length: 20 }, (_, i) => (
        <p key={i}>
          This is paragraph {i + 1} with some sample text to demonstrate scrolling
          behavior in the modal. The content will scroll while the header stays fixed.
        </p>
      ))}
    </div>
  ),
}; 