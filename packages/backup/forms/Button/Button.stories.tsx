import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Button, ButtonGroup } from './';
import { IconPlus, IconSettings, IconThumbUp, IconThumbDown, IconList, IconLayoutGrid, IconBell, IconMessage, IconHeart } from '@tabler/icons-react';

const meta = {
  title: 'Components/Forms/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A versatile button component that supports multiple variants, sizes, and states.',
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'outline', 'ghost'],
      description: 'The visual style of the button',
      table: {
        type: { summary: 'primary | secondary | outline | ghost' },
        defaultValue: { summary: 'primary' },
      },
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'The size of the button',
      table: {
        type: { summary: 'sm | md | lg' },
        defaultValue: { summary: 'md' },
      },
    },
    children: {
      control: 'text',
      description: 'The content of the button',
      table: {
        type: { summary: 'ReactNode' },
      },
    },
    isLoading: {
      control: 'boolean',
      description: 'Whether the button is in a loading state',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the button is disabled',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    fullWidth: {
      control: 'boolean',
      description: 'Whether the button should take up the full width of its container',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    badge: {
      control: 'text',
      description: 'Content to display in the badge',
      table: {
        type: { summary: 'ReactNode' },
      },
    },
    counter: {
      control: 'number',
      description: 'Counter value to display',
      table: {
        type: { summary: 'number' },
      },
    },
    leftIcon: {
      control: false,
      description: 'Icon to display before the button text',
      table: {
        type: { summary: 'ReactNode' },
      },
    },
    rightIcon: {
      control: false,
      description: 'Icon to display after the button text',
      table: {
        type: { summary: 'ReactNode' },
      },
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;

export const Playground: Story = {
  args: {
    children: 'Button',
    variant: 'primary',
    size: 'md',
    isLoading: false,
    disabled: false,
    fullWidth: false,
    badge: '',
    counter: undefined,
  },
};

export const Primary: Story = {
  args: {
    children: 'Primary Button',
    variant: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Secondary Button',
    variant: 'secondary',
  },
};

export const Outline: Story = {
  args: {
    children: 'Outline Button',
    variant: 'outline',
  },
};

export const Ghost: Story = {
  args: {
    children: 'Ghost Button',
    variant: 'ghost',
  },
};

export const WithLeftIcon: Story = {
  args: {
    children: 'Add Item',
    leftIcon: <IconPlus size={20} stroke={2} />,
    variant: 'primary',
  },
};

export const WithRightIcon: Story = {
  args: {
    children: 'Settings',
    rightIcon: <IconSettings size={20} stroke={2} />,
    variant: 'secondary',
  },
};

export const IconOnly: Story = {
  args: {
    'aria-label': 'Add item',
    children: <IconPlus size={20} stroke={2} />,
    variant: 'primary',
  },
};

export const Loading: Story = {
  args: {
    children: 'Loading',
    isLoading: true,
    variant: 'primary',
  },
};

export const Disabled: Story = {
  args: {
    children: 'Disabled Button',
    disabled: true,
    variant: 'primary',
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </div>
  ),
};

export const FullWidth: Story = {
  args: {
    children: 'Full Width Button',
    fullWidth: true,
    variant: 'primary',
  },
};

export const WithBadge: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem' }}>
      <Button
        variant="secondary"
        leftIcon={<IconBell />}
        badge="New"
      >
        Notifications
      </Button>
      <Button
        variant="outline"
        leftIcon={<IconMessage />}
        badge="3"
      >
        Messages
      </Button>
      <Button
        variant="ghost"
        badge="!"
      >
        Updates
      </Button>
    </div>
  ),
};

export const WithCounter: Story = {
  render: () => {
    const [likes, setLikes] = useState(42);
    const [messages, setMessages] = useState(5);
    const [updates, setUpdates] = useState(12);

    return (
      <div style={{ display: 'flex', gap: '1rem' }}>
        <Button
          variant="outline"
          leftIcon={<IconHeart color={likes > 42 ? '#ff4d4d' : undefined} />}
          counter={likes}
          onClick={() => setLikes(prev => prev + 1)}
        >
          Likes
        </Button>
        <Button
          variant="secondary"
          leftIcon={<IconMessage />}
          counter={messages}
          onClick={() => setMessages(prev => prev + 1)}
        >
          Messages
        </Button>
        <Button
          variant="ghost"
          counter={updates}
          onClick={() => setUpdates(prev => prev + 1)}
        >
          Updates
        </Button>
      </div>
    );
  },
};

export const ButtonGroups: Story = {
  render: () => {
    const [view, setView] = useState<'list' | 'grid'>('list');
    const [selected, setSelected] = useState<string[]>([]);

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <ButtonGroup type="radio">
          <Button
            variant="outline"
            isPressed={view === 'list'}
            onClick={() => setView('list')}
          >
            <IconList size={20} stroke={2} />
          </Button>
          <Button
            variant="outline"
            isPressed={view === 'grid'}
            onClick={() => setView('grid')}
          >
            <IconLayoutGrid size={20} stroke={2} />
          </Button>
        </ButtonGroup>

        <ButtonGroup type="checkbox">
          <Button
            variant="outline"
            isPressed={selected.includes('option1')}
            onClick={() => setSelected(prev => 
              prev.includes('option1') 
                ? prev.filter(item => item !== 'option1')
                : [...prev, 'option1']
            )}
          >
            Option 1
          </Button>
          <Button
            variant="outline"
            isPressed={selected.includes('option2')}
            onClick={() => setSelected(prev => 
              prev.includes('option2') 
                ? prev.filter(item => item !== 'option2')
                : [...prev, 'option2']
            )}
          >
            Option 2
          </Button>
          <Button
            variant="outline"
            isPressed={selected.includes('option3')}
            onClick={() => setSelected(prev => 
              prev.includes('option3') 
                ? prev.filter(item => item !== 'option3')
                : [...prev, 'option3']
            )}
          >
            Option 3
          </Button>
        </ButtonGroup>
      </div>
    );
  },
}; 