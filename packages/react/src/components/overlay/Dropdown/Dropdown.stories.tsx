import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Dropdown } from './Dropdown';
import {
  EditIcon,
  CopyIcon,
  TrashIcon,
  SettingsIcon,
  UserIcon,
  ChevronRightIcon
} from '@ku-design-system/core';

const meta = {
  title: 'Components/Dropdown',
  component: Dropdown,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

const renderIcon = (Icon: any) => React.createElement(Icon, { size: 20 });

const options = [
  { value: 'edit', label: 'Edit' },
  { value: 'duplicate', label: 'Duplicate' },
  { value: 'delete', label: 'Delete' },
];

const optionsWithIcons = [
  { value: 'edit', label: 'Edit', leadingIcon: renderIcon(EditIcon) },
  { value: 'duplicate', label: 'Duplicate', leadingIcon: renderIcon(CopyIcon) },
  { value: 'delete', label: 'Delete', leadingIcon: renderIcon(TrashIcon) },
];

const optionsWithSubtext = [
  {
    value: 'edit',
    label: 'Edit Document',
    leadingIcon: renderIcon(EditIcon),
    subText: 'Modify the current document',
  },
  {
    value: 'duplicate',
    label: 'Make a Copy',
    leadingIcon: renderIcon(CopyIcon),
    subText: 'Create a duplicate of this document',
  },
  {
    value: 'delete',
    label: 'Delete Document',
    leadingIcon: renderIcon(TrashIcon),
    subText: 'Permanently remove this document',
    disabled: true,
  },
];

const optionsWithSubmenu = [
  { value: 'edit', label: 'Edit', leadingIcon: renderIcon(EditIcon) },
  {
    value: 'share',
    label: 'Share with',
    leadingIcon: renderIcon(UserIcon),
    trailingIcon: renderIcon(ChevronRightIcon),
  },
  { value: 'settings', label: 'Settings', leadingIcon: renderIcon(SettingsIcon) },
];

export const Basic: Story = {
  args: {
    options,
    placeholder: 'Select an action',
  },
};

export const WithIcons: Story = {
  args: {
    options: optionsWithIcons,
    placeholder: 'Select an action',
  },
};

export const WithSubtext: Story = {
  args: {
    options: optionsWithSubtext,
    placeholder: 'Select an action',
  },
};

export const WithSubmenu: Story = {
  args: {
    options: optionsWithSubmenu,
    placeholder: 'Select an action',
  },
};

export const WithSelection: Story = {
  args: {
    options: optionsWithIcons,
    value: 'edit',
    placeholder: 'Select an action',
  },
};

export const Clearable: Story = {
  args: {
    options: optionsWithIcons,
    value: 'edit',
    placeholder: 'Select an action',
    clearable: true,
  },
};

export const Disabled: Story = {
  args: {
    options: optionsWithIcons,
    placeholder: 'Select an action',
    disabled: true,
  },
};

export const Loading: Story = {
  args: {
    options: optionsWithIcons,
    placeholder: 'Select an action',
    loading: true,
  },
};

export const Error: Story = {
  args: {
    options: optionsWithIcons,
    placeholder: 'Select an action',
    error: true,
  },
};

export const Dense: Story = {
  args: {
    options: optionsWithIcons,
    placeholder: 'Select an action',
    dense: true,
  },
}; 