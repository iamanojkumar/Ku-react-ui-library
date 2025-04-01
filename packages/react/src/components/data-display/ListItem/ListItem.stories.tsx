import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ListItem } from './ListItem';
import { 
  UserIcon, 
  StarIcon, 
  ChevronRightIcon 
} from '@ku-design-system/core';

const meta = {
  title: 'Components/ListItem',
  component: ListItem,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ListItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    children: 'Basic List Item',
  },
};

export const WithSubText: Story = {
  args: {
    children: 'List Item with Subtext',
    subText: 'This is a subtext that provides additional information',
    showSubText: true,
  },
};

export const WithLeadingIcon: Story = {
  args: {
    children: 'List Item with Leading Icon',
    leadingIcon: <UserIcon />,
    showLeadingIcon: true,
  },
};

export const WithTrailingIcon: Story = {
  args: {
    children: 'List Item with Trailing Icon',
    trailingIcon1: <ChevronRightIcon />,
    showTrailingIcon1: true,
  },
};

export const WithMultipleTrailingIcons: Story = {
  args: {
    children: 'List Item with Multiple Trailing Icons',
    trailingIcon1: <StarIcon />,
    showTrailingIcon1: true,
    trailingIcon2: <ChevronRightIcon />,
    showTrailingIcon2: true,
  },
};

export const WithCheckbox: Story = {
  args: {
    children: 'List Item with Checkbox',
    showCheckbox: true,
    checked: true,
  },
};

export const Clickable: Story = {
  args: {
    children: 'Clickable List Item',
    clickable: true,
    onClick: () => alert('Clicked!'),
  },
};

export const Selected: Story = {
  args: {
    children: 'Selected List Item',
    selected: true,
  },
};

export const Disabled: Story = {
  args: {
    children: 'Disabled List Item',
    disabled: true,
  },
};

export const Loading: Story = {
  args: {
    children: 'Loading List Item',
    loading: true,
  },
};

export const FullFeatured: Story = {
  args: {
    children: 'Full Featured List Item',
    subText: 'This is a subtext that provides additional information',
    showSubText: true,
    leadingIcon: <UserIcon />,
    showLeadingIcon: true,
    trailingIcon1: <StarIcon />,
    showTrailingIcon1: true,
    trailingIcon2: <ChevronRightIcon />,
    showTrailingIcon2: true,
    showCheckbox: true,
    checked: true,
    clickable: true,
    selected: true,
    onClick: () => alert('Clicked!'),
  },
};

export const DisabledWithSubText: Story = {
  args: {
    children: 'Disabled List Item with Subtext',
    subText: 'This item is disabled and cannot be interacted with',
    showSubText: true,
    disabled: true,
  },
};

export const LoadingWithSubText: Story = {
  args: {
    children: 'Loading List Item with Subtext',
    subText: 'This item is in a loading state',
    showSubText: true,
    loading: true,
  },
};

export const SelectedWithSubText: Story = {
  args: {
    children: 'Selected List Item with Subtext',
    subText: 'This item is currently selected',
    showSubText: true,
    selected: true,
  },
};

export const ClickableWithSubText: Story = {
  args: {
    children: 'Clickable List Item with Subtext',
    subText: 'Click this item to trigger an action',
    showSubText: true,
    clickable: true,
    onClick: () => alert('Clicked!'),
  },
};

export const ListExamples: Story = {
  args: {
    children: 'List Item',
  },
  render: function ListExamplesStory() {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', maxWidth: '400px' }}>
        <ListItem>Basic List Item</ListItem>
        
        <ListItem
          showSubText
          subText="With supporting text that gives more context"
        >
          List Item with Subtext
        </ListItem>
        
        <ListItem
          showLeadingIcon
          leadingIcon={<StarIcon />}
          showTrailingIcon1
          trailingIcon1={<ChevronRightIcon />}
        >
          With Icons
        </ListItem>
        
        <ListItem
          showCheckbox
          checked
          showLeadingIcon
          leadingIcon={<StarIcon />}
          showSubText
          subText="Selected state with checkbox"
          selected
        >
          Selected with Checkbox
        </ListItem>
        
        <ListItem
          showLeadingIcon
          leadingIcon={<StarIcon />}
          showTrailingIcon1
          trailingIcon1={<ChevronRightIcon />}
          disabled
        >
          Disabled State
        </ListItem>
        
        <ListItem
          showLeadingIcon
          leadingIcon={<StarIcon />}
          showTrailingIcon1
          trailingIcon1={<ChevronRightIcon />}
          loading
        >
          Loading State
        </ListItem>
      </div>
    );
  },
}; 