import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Accordion } from './Accordion';
import type { AccordionProps } from './Accordion';
import { SettingsIcon, UserIcon } from '@ku-design-system/core';

const meta = {
  title: 'Components/Accordion',
  component: Accordion,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['contained', 'outlined', 'ghost'],
      description: 'The visual style variant of the accordion',
      defaultValue: 'outlined'
    },
    allowMultiple: {
      control: 'boolean',
      description: 'Allow multiple items to be expanded simultaneously',
      defaultValue: false
    },
    showLeadingIcons: {
      control: 'boolean',
      description: 'Show default leading icons for all items',
      defaultValue: false
    },
    showTrailingIcons: {
      control: 'boolean',
      description: 'Show default trailing icons for all items',
      defaultValue: false
    }
  }
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;
type DemoProps = Partial<AccordionProps>;

const AccordionDemo: React.FC<DemoProps> = (props) => (
  <Accordion {...props}>
    <Accordion.Item>
      <Accordion.Trigger>First Item</Accordion.Trigger>
      <Accordion.Content>
        <p>First item content</p>
      </Accordion.Content>
    </Accordion.Item>
    <Accordion.Item>
      <Accordion.Trigger>Second Item</Accordion.Trigger>
      <Accordion.Content>
        <p>Second item content</p>
      </Accordion.Content>
    </Accordion.Item>
    <Accordion.Item>
      <Accordion.Trigger>Third Item</Accordion.Trigger>
      <Accordion.Content>
        <p>Third item content</p>
      </Accordion.Content>
    </Accordion.Item>
  </Accordion>
);

AccordionDemo.displayName = 'AccordionDemo';

export const Contained: Story = {
  args: {
    variant: 'contained'
  },
  render: (args) => <AccordionDemo {...args} />
};

export const Outlined: Story = {
  args: {
    variant: 'outlined'
  },
  render: (args) => <AccordionDemo {...args} />
};

export const Ghost: Story = {
  args: {
    variant: 'ghost'
  },
  render: (args) => <AccordionDemo {...args} />
};

export const WithDefaultIcons: Story = {
  args: {
    variant: 'contained',
    showLeadingIcons: true,
    showTrailingIcons: true
  },
  render: (args) => <AccordionDemo {...args} />
};

const AccordionWithCustomIcons: React.FC<DemoProps> = (props) => (
  <Accordion {...props}>
    <Accordion.Item>
      <Accordion.Trigger>Default Icons</Accordion.Trigger>
      <Accordion.Content>
        <p>Using default icons from showLeadingIcons and showTrailingIcons props</p>
      </Accordion.Content>
    </Accordion.Item>
    <Accordion.Item>
      <Accordion.Trigger 
        leadingIcon={<UserIcon size={20} />}
        trailingIcon={<SettingsIcon size={16} />}
      >
        Custom Icons
      </Accordion.Trigger>
      <Accordion.Content>
        <p>Using custom icons that override the defaults</p>
      </Accordion.Content>
    </Accordion.Item>
    <Accordion.Item>
      <Accordion.Trigger disabled>
        Disabled Item
      </Accordion.Trigger>
      <Accordion.Content>
        <p>This content is not accessible</p>
      </Accordion.Content>
    </Accordion.Item>
  </Accordion>
);

AccordionWithCustomIcons.displayName = 'AccordionWithCustomIcons';

export const MixedIcons: Story = {
  args: {
    variant: 'contained',
    showLeadingIcons: true,
    showTrailingIcons: true
  },
  render: (args) => <AccordionWithCustomIcons {...args} />
};

export const AllowMultiple: Story = {
  args: {
    variant: 'outlined',
    allowMultiple: true,
    showLeadingIcons: true
  },
  render: (args) => <AccordionDemo {...args} />
};

export const WithDefaultExpanded: Story = {
  args: {
    variant: 'outlined',
    defaultExpanded: ['1'],
    showTrailingIcons: true
  },
  render: (args) => <AccordionDemo {...args} />
}; 