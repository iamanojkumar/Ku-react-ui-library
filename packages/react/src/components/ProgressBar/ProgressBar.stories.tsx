import React, { useState, useEffect } from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import { ProgressBar } from './ProgressBar';

const meta = {
  title: 'Components/ProgressBar',
  component: ProgressBar,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
A progress bar component that displays progress for tasks that take a long time or consist of several steps.

## Features
- Multiple sizes (small, medium, large)
- Support for labels and accessibility
- Indeterminate state for unknown duration
- Buffer progress indicator
- Dismissible with cancel button
- Time remaining indicator
- Dark theme support
- Reduced motion support
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: { type: 'range', min: 0, max: 100 },
      description: 'Current progress value (0-100)',
    },
    max: {
      control: 'number',
      description: 'Maximum value for the progress bar',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Size variant of the progress bar',
    },
    label: {
      control: 'text',
      description: 'Visual label for the progress bar',
    },
    indeterminate: {
      control: 'boolean',
      description: 'Whether the progress is indeterminate',
    },
    buffer: {
      control: 'boolean',
      description: 'Whether to show buffer progress',
    },
    bufferValue: {
      control: { type: 'range', min: 0, max: 100 },
      description: 'Buffer value (0-100)',
    },
    dismissible: {
      control: 'boolean',
      description: 'Whether the progress bar can be dismissed',
    },
    timeRemaining: {
      control: 'number',
      description: 'Estimated time remaining in seconds',
    },
    ariaLabel: {
      control: 'text',
      description: 'Accessibility label for screen readers',
    },
  },
} satisfies Meta<typeof ProgressBar>;

export default meta;

// Basic progress bar
export const Default: StoryFn<typeof ProgressBar> = (args) => (
  <div style={{ width: '400px' }}>
    <ProgressBar {...args} />
  </div>
);

Default.args = {
  value: 60,
  label: 'Downloading files...',
};

// Size variants
export const Sizes: StoryFn<typeof ProgressBar> = () => (
  <div style={{ width: '400px', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
    <ProgressBar
      value={75}
      size="small"
      label="Small progress bar"
    />
    <ProgressBar
      value={75}
      size="medium"
      label="Medium progress bar"
    />
    <ProgressBar
      value={75}
      size="large"
      label="Large progress bar"
    />
  </div>
);

// With buffer progress
export const WithBuffer: StoryFn<typeof ProgressBar> = () => {
  const [progress, setProgress] = useState(0);
  const [buffer, setBuffer] = useState(20);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + 1;
        if (next >= 100) {
          clearInterval(interval);
          return 100;
        }
        return next;
      });
      setBuffer((prev) => Math.min(100, prev + 2));
    }, 200);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ width: '400px' }}>
      <ProgressBar
        value={progress}
        buffer
        bufferValue={buffer}
        label="Buffering video..."
      />
    </div>
  );
};

// Dismissible progress
export const Dismissible: StoryFn<typeof ProgressBar> = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + 1;
        if (next >= 100) {
          clearInterval(interval);
          return 100;
        }
        return next;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [isVisible]);

  if (!isVisible) {
    return (
      <div style={{ width: '400px', textAlign: 'center', color: 'var(--ku-color-text-secondary)' }}>
        Operation cancelled
      </div>
    );
  }

  return (
    <div style={{ width: '400px' }}>
      <ProgressBar
        value={progress}
        label="Uploading files..."
        dismissible
        onDismiss={() => setIsVisible(false)}
      />
    </div>
  );
};

// Indeterminate state
export const Indeterminate: StoryFn<typeof ProgressBar> = () => (
  <div style={{ width: '400px' }}>
    <ProgressBar
      value={0}
      indeterminate
      label="Loading..."
      ariaLabel="Loading in progress"
    />
  </div>
);

// With time remaining
export const WithTimeRemaining: StoryFn<typeof ProgressBar> = () => {
  const [progress, setProgress] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState(120);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + 1;
        if (next >= 100) {
          clearInterval(interval);
          return 100;
        }
        return next;
      });
      setTimeRemaining((prev) => Math.max(0, prev - 1));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ width: '400px' }}>
      <ProgressBar
        value={progress}
        label="Installing updates..."
        timeRemaining={timeRemaining}
      />
    </div>
  );
};

// Multiple progress bars
export const MultipleSteps: StoryFn<typeof ProgressBar> = () => (
  <div style={{ width: '400px', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
    <ProgressBar
      value={100}
      label="Downloading files"
      size="small"
    />
    <ProgressBar
      value={60}
      buffer
      bufferValue={80}
      label="Installing dependencies"
      size="small"
    />
    <ProgressBar
      value={0}
      label="Building project"
      size="small"
      indeterminate
      dismissible
      onDismiss={() => alert('Build cancelled')}
    />
  </div>
);

// With custom max value
export const CustomMaxValue: StoryFn<typeof ProgressBar> = () => (
  <div style={{ width: '400px' }}>
    <ProgressBar
      value={750}
      max={1000}
      buffer
      bufferValue={800}
      label="Uploading large file"
      ariaLabel="Uploading file: 750 of 1000 MB"
      dismissible
      onDismiss={() => alert('Upload cancelled')}
    />
  </div>
); 