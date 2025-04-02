import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Image } from './Image';
import { ThemeProvider } from '../ThemeProvider/ThemeProvider';

const meta: Meta<typeof Image> = {
  title: 'Components/Image',
  component: Image,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
A flexible image component that supports various sizes, aspect ratios, and fallback states.
It follows the KU Design System token system and provides excellent accessibility support.

## Features
- Flexible sizing with width, height, and aspect ratio support
- Screen density support with srcSet and sizes
- Fallback state for loading errors
- Loading state indicator
- Accessibility support with alt text and ARIA attributes
- Dark theme support
- Reduced motion support
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    src: {
      control: 'text',
      description: 'The source URL of the image',
    },
    alt: {
      control: 'text',
      description: 'Alternative text for the image',
    },
    width: {
      control: 'text',
      description: 'Width of the image',
    },
    height: {
      control: 'text',
      description: 'Height of the image',
    },
    aspectRatio: {
      control: 'text',
      description: 'Aspect ratio of the image (e.g., "16:9")',
    },
    objectFit: {
      control: 'select',
      options: ['contain', 'cover', 'fill', 'none', 'scale-down'],
      description: 'Object-fit property for the image',
    },
    isDecorative: {
      control: 'boolean',
      description: 'Whether the image is decorative',
    },
  },
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
} as const;

export default meta;
type Story = StoryObj<typeof meta>;

// Default image
export const Default: Story = {
  args: {
    src: 'https://picsum.photos/400/300',
    alt: 'A random image from Lorem Picsum',
    width: 400,
    height: 300,
  },
};

// With aspect ratio
export const WithAspectRatio: Story = {
  args: {
    src: 'https://picsum.photos/800/450',
    alt: 'A 16:9 aspect ratio image',
    width: '100%',
    aspectRatio: '16:9',
  },
};

// With srcSet for different screen densities
export const WithSrcSet: Story = {
  args: {
    src: 'https://picsum.photos/400/300',
    srcSet: `
      https://picsum.photos/400/300 1x,
      https://picsum.photos/800/600 2x,
      https://picsum.photos/1200/900 3x
    `,
    alt: 'Image with different resolutions for different screen densities',
    width: 400,
    height: 300,
  },
};

// With error state (invalid URL)
export const WithError: Story = {
  args: {
    src: 'https://invalid-image-url.jpg',
    alt: 'This image will show a fallback state',
    width: 400,
    height: 300,
  },
};

// Different object-fit values
export const ObjectFitExamples: Story = {
  render: () => (
    <div style={{ display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(3, 1fr)' }}>
      <div>
        <h3>Cover</h3>
        <Image
          src="https://picsum.photos/800/600"
          alt="Object-fit: cover example"
          width={200}
          height={200}
          objectFit="cover"
        />
      </div>
      <div>
        <h3>Contain</h3>
        <Image
          src="https://picsum.photos/800/600"
          alt="Object-fit: contain example"
          width={200}
          height={200}
          objectFit="contain"
        />
      </div>
      <div>
        <h3>Fill</h3>
        <Image
          src="https://picsum.photos/800/600"
          alt="Object-fit: fill example"
          width={200}
          height={200}
          objectFit="fill"
        />
      </div>
    </div>
  ),
};

// Responsive sizes
export const ResponsiveSizes: Story = {
  args: {
    src: 'https://picsum.photos/800/600',
    srcSet: `
      https://picsum.photos/400/300 400w,
      https://picsum.photos/800/600 800w,
      https://picsum.photos/1200/900 1200w
    `,
    sizes: '(max-width: 400px) 100vw, (max-width: 800px) 800px, 1200px',
    alt: 'Responsive image that adapts to viewport size',
    width: '100%',
    aspectRatio: '4:3',
  },
}; 