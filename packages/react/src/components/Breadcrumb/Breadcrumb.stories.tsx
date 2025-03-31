import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Breadcrumb } from './Breadcrumb';

const meta: Meta<typeof Breadcrumb> = {
  title: 'Navigation/Breadcrumb',
  component: Breadcrumb,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    maxItems: {
      control: 'number',
      defaultValue: 5,
    },
    showIcons: {
      control: 'boolean',
      defaultValue: true,
    },
  },
};

export default meta;
type Story = StoryObj<typeof Breadcrumb>;

const HomeIcon = (): JSX.Element => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path
      d="M6.5 13.5V10.5H9.5V13.5H12V9L8 5.5L4 9V13.5H6.5Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M2 7.5L8 2.5L14 7.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const FolderIcon = (): JSX.Element => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path
      d="M2 13V3H6L8 5H14V13H2Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const FileIcon = (): JSX.Element => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path
      d="M8 1H3V15H13V6L8 1Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8 1V6H13"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const defaultItems = [
  { children: 'Home', href: '/', icon: HomeIcon() },
  { children: 'Documents', href: '/documents', icon: FolderIcon() },
  { children: 'Projects', href: '/documents/projects', icon: FolderIcon() },
  { children: 'Annual Report.pdf', href: '/documents/projects/report.pdf', icon: FileIcon() },
];

// Basic breadcrumb
export const Basic: Story = {
  args: {
    items: defaultItems,
  },
};

// Without icons
export const WithoutIcons: Story = {
  args: {
    items: defaultItems,
    showIcons: false,
  },
};

// With disabled items
export const WithDisabledItems: Story = {
  args: {
    items: [
      { children: 'Home', href: '/', icon: HomeIcon() },
      { children: 'Documents', href: '/documents', icon: FolderIcon(), disabled: true },
      { children: 'Projects', href: '/documents/projects', icon: FolderIcon() },
      { children: 'Annual Report.pdf', href: '/documents/projects/report.pdf', icon: FileIcon() },
    ],
  },
};

// With custom separator
export const WithCustomSeparator: Story = {
  args: {
    items: defaultItems,
    separator: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path
          d="M6 4L10 8L6 12"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
};

// With text separator
export const WithTextSeparator: Story = {
  args: {
    items: defaultItems,
    separator: '/',
  },
};

// Collapsed state
export const Collapsed: Story = {
  args: {
    items: [
      { children: 'Home', href: '/', icon: HomeIcon() },
      { children: 'Documents', href: '/documents', icon: FolderIcon() },
      { children: 'Projects', href: '/documents/projects', icon: FolderIcon() },
      { children: 'Client Work', href: '/documents/projects/client', icon: FolderIcon() },
      { children: 'Designs', href: '/documents/projects/client/designs', icon: FolderIcon() },
      { children: 'Website', href: '/documents/projects/client/designs/website', icon: FolderIcon() },
      { children: 'Homepage.fig', href: '/documents/projects/client/designs/website/home.fig', icon: FileIcon() },
    ],
    maxItems: 5,
  },
}; 