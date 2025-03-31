import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider } from './ThemeProvider';
import { Button } from '../Button/Button';
import { Badge } from '../Badge/Badge';
import { Avatar } from '../Avatar/Avatar';
import { Alert } from '../Alert/Alert';
import { useTheme } from './ThemeProvider';
import type { ThemeProviderProps } from './ThemeProvider';

const meta: Meta<typeof ThemeProvider> = {
  title: 'Components/ThemeProvider',
  component: ThemeProvider,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof ThemeProvider>;

const ThemeDemo = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
        <Button onClick={toggleTheme} variant="primary">
          Toggle {theme === 'light' ? 'Dark' : 'Light'} Mode
        </Button>
        <Badge variant="solid" color="default">
          Current Theme: {theme}
        </Badge>
      </div>

      <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
        <Avatar initials="JD" />
        <Avatar initials="PR" color="primary" />
        <Avatar initials="SU" color="success" />
      </div>

      <div style={{ display: 'flex', gap: '1rem', flexDirection: 'column' }}>
        <Alert variant="info">This is an info alert</Alert>
        <Alert variant="success">This is a success alert</Alert>
        <Alert variant="warning">This is a warning alert</Alert>
        <Alert variant="error">This is an error alert</Alert>
      </div>

      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        <Button variant="primary">Primary Button</Button>
        <Button variant="secondary">Secondary Button</Button>
        <Button variant="outline">Outline Button</Button>
        <Button variant="ghost">Ghost Button</Button>
      </div>
    </div>
  );
};

export const Default: Story = {
  render: () => (
    <ThemeProvider>
      <ThemeDemo />
    </ThemeProvider>
  )
};

export const DarkMode: Story = {
  render: () => (
    <ThemeProvider defaultTheme="dark">
      <ThemeDemo />
    </ThemeProvider>
  )
}; 