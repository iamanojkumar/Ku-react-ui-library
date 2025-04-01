import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Calendar } from './Calendar';
import { ThemeProvider } from '../ThemeProvider/ThemeProvider';

const meta: Meta<typeof Calendar> = {
  title: 'Components/Calendar',
  component: Calendar,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    )
  ],
};

export default meta;
type Story = StoryObj<typeof Calendar>;

const SingleDateDemo = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <div style={{ padding: '1rem', backgroundColor: 'var(--ku-color-background-surface-1)', borderRadius: '0.5rem' }}>
        Selected date: {date ? date.toLocaleDateString() : 'None'}
      </div>
      <Calendar
        value={date}
        onChange={setDate}
        mode="single"
        displayMode="single"
      />
    </div>
  );
};

const DateRangeDemo = () => {
  const [startDate, setStartDate] = useState<Date | undefined>(new Date());
  const [endDate, setEndDate] = useState<Date | undefined>();

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <div style={{ padding: '1rem', backgroundColor: 'var(--ku-color-background-surface-1)', borderRadius: '0.5rem' }}>
        Selected range: {startDate ? startDate.toLocaleDateString() : 'None'} - {endDate ? endDate.toLocaleDateString() : 'None'}
      </div>
      <Calendar
        value={startDate}
        endValue={endDate}
        onRangeChange={(start, end) => {
          setStartDate(start);
          setEndDate(end);
        }}
        mode="range"
        displayMode="double"
      />
    </div>
  );
};

const VerticalDemo = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <div style={{ padding: '1rem', backgroundColor: 'var(--ku-color-background-surface-1)', borderRadius: '0.5rem' }}>
        Selected date: {date ? date.toLocaleDateString() : 'None'}
      </div>
      <Calendar
        value={date}
        onChange={setDate}
        mode="single"
        displayMode="vertical"
      />
    </div>
  );
};

const DisabledDemo = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <div style={{ padding: '1rem', backgroundColor: 'var(--ku-color-background-surface-1)', borderRadius: '0.5rem' }}>
        Selected date: {date ? date.toLocaleDateString() : 'None'}
      </div>
      <Calendar
        value={date}
        onChange={setDate}
        mode="single"
        displayMode="single"
        disabled
      />
    </div>
  );
};

export const SingleDate: Story = {
  render: () => <SingleDateDemo />
};

export const DateRange: Story = {
  render: () => <DateRangeDemo />
};

export const VerticalLayout: Story = {
  render: () => <VerticalDemo />
};

export const Disabled: Story = {
  render: () => <DisabledDemo />
}; 