import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Menu, MenuItem } from './Menu';
import {
  EditIcon,
  CopyIcon,
  TrashIcon,
  SettingsIcon,
  UserIcon,
  LogoutIcon,
  ChevronRightIcon
} from '@ku-design-system/core';

const meta = {
  title: 'Components/Menu',
  component: Menu,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Menu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {},
  render: (args) => (
    <Menu {...args}>
      <MenuItem value="edit">Edit</MenuItem>
      <MenuItem value="duplicate">Duplicate</MenuItem>
      <MenuItem value="delete">Delete</MenuItem>
    </Menu>
  ),
};

export const WithIcons: Story = {
  args: {},
  render: (args) => (
    <Menu {...args}>
      <MenuItem value="edit" leadingIcon={<EditIcon />}>Edit</MenuItem>
      <MenuItem value="duplicate" leadingIcon={<CopyIcon />}>Duplicate</MenuItem>
      <MenuItem value="delete" leadingIcon={<TrashIcon />}>Delete</MenuItem>
    </Menu>
  ),
};

export const WithShortcuts: Story = {
  args: {},
  render: (args) => (
    <Menu {...args}>
      <MenuItem value="edit" leadingIcon={<EditIcon />} shortcutText="⌘E">Edit</MenuItem>
      <MenuItem value="duplicate" leadingIcon={<CopyIcon />} shortcutText="⌘D">Duplicate</MenuItem>
      <MenuItem value="delete" leadingIcon={<TrashIcon />} shortcutText="⌫">Delete</MenuItem>
    </Menu>
  ),
};

export const WithSubmenus: Story = {
  args: {},
  render: (args) => (
    <Menu {...args}>
      <MenuItem value="edit" leadingIcon={<EditIcon />}>Edit</MenuItem>
      <MenuItem 
        value="share" 
        leadingIcon={<UserIcon />}
        trailingIcon={<ChevronRightIcon />}
      >
        Share with
      </MenuItem>
      <MenuItem value="settings" leadingIcon={<SettingsIcon />}>Settings</MenuItem>
      <MenuItem 
        value="logout" 
        leadingIcon={<LogoutIcon />}
        disabled
      >
        Logout
      </MenuItem>
    </Menu>
  ),
};

export const WithSelection: Story = {
  args: {
    selectedValue: 'medium',
  },
  render: (args) => (
    <Menu {...args}>
      <MenuItem value="small">Small</MenuItem>
      <MenuItem value="medium">Medium</MenuItem>
      <MenuItem value="large">Large</MenuItem>
    </Menu>
  ),
};

export const WithSubtext: Story = {
  args: {},
  render: (args) => (
    <Menu {...args}>
      <MenuItem 
        value="profile" 
        leadingIcon={<UserIcon />}
        subText="View and edit your profile"
      >
        Profile Settings
      </MenuItem>
      <MenuItem 
        value="security" 
        leadingIcon={<SettingsIcon />}
        subText="Manage your account security"
      >
        Security Settings
      </MenuItem>
      <MenuItem 
        value="logout" 
        leadingIcon={<LogoutIcon />}
        subText="Sign out of your account"
        disabled
      >
        Logout
      </MenuItem>
    </Menu>
  ),
};

export const Dense: Story = {
  args: {
    dense: true,
  },
  render: (args) => (
    <Menu {...args}>
      <MenuItem value="edit" leadingIcon={<EditIcon />}>Edit</MenuItem>
      <MenuItem value="duplicate" leadingIcon={<CopyIcon />}>Duplicate</MenuItem>
      <MenuItem value="delete" leadingIcon={<TrashIcon />}>Delete</MenuItem>
    </Menu>
  ),
}; 