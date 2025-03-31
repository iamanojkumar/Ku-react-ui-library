import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Tabs, TabList, Tab, TabPanels, TabPanel } from './Tabs';
import { HomeIcon, UserIcon, SettingsIcon } from '@ku-design-system/core';

const meta = {
  title: 'Components/Tabs',
  component: Tabs,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
A Tabs component for switching between different views or content sections.

## Features
- Multiple variants (default, pills, underline)
- Pill styles (filled, outline)
- Color variants (primary, success, warning, danger, neutral)
- Icon support in tab triggers
- Equal width layout option
- Keyboard navigation (arrow keys, home/end)
- Disabled state for individual tabs
- Dark theme support
- High contrast mode support
- Reduced motion support
        `,
      },
    },
  },
  args: {
    variant: 'default',
    pillStyle: 'filled',
    color: 'primary',
    equalWidth: false,
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'pills', 'underline'],
      description: 'Visual variant of the tabs',
    },
    pillStyle: {
      control: 'radio',
      options: ['filled', 'outline'],
      description: 'Style of pills variant',
      if: { arg: 'variant', eq: 'pills' },
    },
    color: {
      control: 'select',
      options: ['primary', 'success', 'warning', 'danger', 'neutral'],
      description: 'Color variant',
    },
    equalWidth: {
      control: 'boolean',
      description: 'Whether to make all tabs equal width',
    },
  },
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

const TabsTemplate: Story = {
  render: (args) => (
    <Tabs {...args}>
      <TabList>
        <Tab index={0}>Account</Tab>
        <Tab index={1}>Password</Tab>
        <Tab index={2}>Settings</Tab>
      </TabList>
      <TabPanels>
        <TabPanel index={0}>
          <h3>Account Settings</h3>
          <p>Manage your account settings and preferences.</p>
        </TabPanel>
        <TabPanel index={1}>
          <h3>Password Settings</h3>
          <p>Change your password and security preferences.</p>
        </TabPanel>
        <TabPanel index={2}>
          <h3>General Settings</h3>
          <p>Configure application settings and preferences.</p>
        </TabPanel>
      </TabPanels>
    </Tabs>
  ),
};

// Default tabs
export const Default: Story = {
  ...TabsTemplate,
};

// Pills variant - Filled
export const PillsFilled: Story = {
  ...TabsTemplate,
  args: {
    variant: 'pills',
    pillStyle: 'filled',
  },
};

// Pills variant - Outline
export const PillsOutline: Story = {
  ...TabsTemplate,
  args: {
    variant: 'pills',
    pillStyle: 'outline',
  },
};

// Color variants
export const Colors: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <Tabs variant="pills" color="primary">
        <TabList>
          <Tab index={0}>Primary</Tab>
          <Tab index={1}>Tab</Tab>
        </TabList>
        <TabPanels>
          <TabPanel index={0}>Primary content</TabPanel>
          <TabPanel index={1}>Tab content</TabPanel>
        </TabPanels>
      </Tabs>

      <Tabs variant="pills" color="success">
        <TabList>
          <Tab index={0}>Success</Tab>
          <Tab index={1}>Tab</Tab>
        </TabList>
        <TabPanels>
          <TabPanel index={0}>Success content</TabPanel>
          <TabPanel index={1}>Tab content</TabPanel>
        </TabPanels>
      </Tabs>

      <Tabs variant="pills" color="warning">
        <TabList>
          <Tab index={0}>Warning</Tab>
          <Tab index={1}>Tab</Tab>
        </TabList>
        <TabPanels>
          <TabPanel index={0}>Warning content</TabPanel>
          <TabPanel index={1}>Tab content</TabPanel>
        </TabPanels>
      </Tabs>

      <Tabs variant="pills" color="danger">
        <TabList>
          <Tab index={0}>Danger</Tab>
          <Tab index={1}>Tab</Tab>
        </TabList>
        <TabPanels>
          <TabPanel index={0}>Danger content</TabPanel>
          <TabPanel index={1}>Tab content</TabPanel>
        </TabPanels>
      </Tabs>

      <Tabs variant="pills" color="neutral">
        <TabList>
          <Tab index={0}>Neutral</Tab>
          <Tab index={1}>Tab</Tab>
        </TabList>
        <TabPanels>
          <TabPanel index={0}>Neutral content</TabPanel>
          <TabPanel index={1}>Tab content</TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  ),
};

// With icons
export const WithIcons: Story = {
  render: () => (
    <Tabs variant="pills">
      <TabList>
        <Tab index={0} icon={<HomeIcon />}>Home</Tab>
        <Tab index={1} icon={<UserIcon />}>Profile</Tab>
        <Tab index={2} icon={<SettingsIcon />}>Settings</Tab>
      </TabList>
      <TabPanels>
        <TabPanel index={0}>
          <h3>Home</h3>
          <p>Welcome to your dashboard.</p>
        </TabPanel>
        <TabPanel index={1}>
          <h3>Profile</h3>
          <p>View and edit your profile information.</p>
        </TabPanel>
        <TabPanel index={2}>
          <h3>Settings</h3>
          <p>Configure your preferences.</p>
        </TabPanel>
      </TabPanels>
    </Tabs>
  ),
};

// Equal width
export const EqualWidth: Story = {
  ...TabsTemplate,
  args: {
    equalWidth: true,
  },
};

// With disabled tab
export const WithDisabledTab: Story = {
  render: () => (
    <Tabs>
      <TabList>
        <Tab index={0}>Enabled</Tab>
        <Tab index={1} disabled>Disabled</Tab>
        <Tab index={2}>Enabled</Tab>
      </TabList>
      <TabPanels>
        <TabPanel index={0}>Content 1</TabPanel>
        <TabPanel index={1}>Content 2</TabPanel>
        <TabPanel index={2}>Content 3</TabPanel>
      </TabPanels>
    </Tabs>
  ),
};

// Underline variant
export const Underline: Story = {
  render: () => (
    <Tabs variant="underline">
      <TabList>
        <Tab index={0}>Account</Tab>
        <Tab index={1}>Password</Tab>
        <Tab index={2}>Settings</Tab>
      </TabList>
      <TabPanels>
        <TabPanel index={0}>
          <h3>Account Settings</h3>
          <p>Manage your account settings and preferences.</p>
        </TabPanel>
        <TabPanel index={1}>
          <h3>Password Settings</h3>
          <p>Change your password and security preferences.</p>
        </TabPanel>
        <TabPanel index={2}>
          <h3>General Settings</h3>
          <p>Configure application settings and preferences.</p>
        </TabPanel>
      </TabPanels>
    </Tabs>
  ),
};

// Controlled example
export const Controlled: Story = {
  render: () => {
    const [selectedIndex, setSelectedIndex] = React.useState(0);
    return (
      <Tabs selectedIndex={selectedIndex} onChange={setSelectedIndex}>
        <TabList>
          <Tab index={0}>Tab 1</Tab>
          <Tab index={1}>Tab 2</Tab>
          <Tab index={2}>Tab 3</Tab>
        </TabList>
        <TabPanels>
          <TabPanel index={0}>
            <p>Selected index: {selectedIndex}</p>
          </TabPanel>
          <TabPanel index={1}>
            <p>Selected index: {selectedIndex}</p>
          </TabPanel>
          <TabPanel index={2}>
            <p>Selected index: {selectedIndex}</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    );
  },
}; 