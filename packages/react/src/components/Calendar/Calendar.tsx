import React, { useState, useCallback, useEffect } from 'react';
import { format, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth, isSameDay, addMonths, subMonths, startOfWeek, endOfWeek, isWithinInterval, Locale } from 'date-fns';
import { ChevronLeftIcon, ChevronRightIcon } from '@ku-design-system/core';
import { useTheme } from '../ThemeProvider/ThemeProvider';
import './Calendar.css';

export type CalendarMode = 'single' | 'range';
export type CalendarDisplayMode = 'single' | 'double' | 'vertical';

export interface CalendarProps {
  /** The current date or start date of the range */
  value?: Date;
  /** The end date of the range (only used in range mode) */
  endValue?: Date;
  /** The mode of the calendar (single date or date range) */
  mode?: CalendarMode;
  /** The display mode of the calendar (single month, double month, or vertical) */
  displayMode?: CalendarDisplayMode;
  /** Callback fired when a date is selected */
  onChange?: (date: Date) => void;
  /** Callback fired when a range is selected */
  onRangeChange?: (start: Date, end: Date) => void;
  /** The locale to use for date formatting */
  locale?: Locale;
  /** The minimum date that can be selected */
  minDate?: Date;
  /** The maximum date that can be selected */
  maxDate?: Date;
  /** Whether the calendar is disabled */
  disabled?: boolean;
}

export const Calendar: React.FC<CalendarProps> = ({
  value,
  endValue,
  mode = 'single',
  displayMode = 'single',
  onChange,
  onRangeChange,
  locale,
  minDate,
  maxDate,
  disabled = false,
}) => {
  const { theme } = useTheme();
  const [currentDate, setCurrentDate] = useState(value || new Date());
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(value);
  const [rangeStart, setRangeStart] = useState<Date | undefined>(value);
  const [rangeEnd, setRangeEnd] = useState<Date | undefined>(endValue);

  // Update internal state when props change
  useEffect(() => {
    if (value) setSelectedDate(value);
    if (endValue) setRangeEnd(endValue);
  }, [value, endValue]);

  const handleDateSelect = useCallback((date: Date) => {
    if (disabled) return;

    if (mode === 'single') {
      setSelectedDate(date);
      onChange?.(date);
    } else {
      if (!rangeStart || (rangeStart && rangeEnd)) {
        setRangeStart(date);
        setRangeEnd(undefined);
      } else {
        const start = date < rangeStart ? date : rangeStart;
        const end = date < rangeStart ? rangeStart : date;
        setRangeEnd(end);
        onRangeChange?.(start, end);
      }
    }
  }, [mode, rangeStart, rangeEnd, onChange, onRangeChange, disabled]);

  const navigateMonth = useCallback((direction: 'prev' | 'next') => {
    setCurrentDate(prev => direction === 'next' ? addMonths(prev, 1) : subMonths(prev, 1));
  }, []);

  const isDateSelected = useCallback((date: Date) => {
    if (mode === 'single') {
      return selectedDate ? isSameDay(date, selectedDate) : false;
    }
    if (!rangeStart || !rangeEnd) return false;
    return isWithinInterval(date, { start: rangeStart, end: rangeEnd });
  }, [mode, selectedDate, rangeStart, rangeEnd]);

  const isDateDisabled = useCallback((date: Date) => {
    if (disabled) return true;
    if (minDate && date < minDate) return true;
    if (maxDate && date > maxDate) return true;
    return false;
  }, [disabled, minDate, maxDate]);

  const getMonthDays = useCallback((date: Date) => {
    const start = startOfWeek(startOfMonth(date));
    const end = endOfWeek(endOfMonth(date));
    return eachDayOfInterval({ start, end });
  }, []);

  const renderMonth = useCallback((date: Date) => {
    const days = getMonthDays(date);
    const monthName = format(date, 'MMMM yyyy', { locale });
    const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    return (
      <div className="ku-calendar-month" role="grid" aria-label={monthName}>
        <div className="ku-calendar-header">
          <h3>{monthName}</h3>
          <div className="ku-calendar-navigation">
            <button
              onClick={() => navigateMonth('prev')}
              disabled={isDateDisabled(subMonths(date, 1))}
              aria-label="Previous month"
            >
              {React.createElement(ChevronLeftIcon, {
                size: 16,
                stroke: 2
              })}
            </button>
            <button
              onClick={() => navigateMonth('next')}
              disabled={isDateDisabled(addMonths(date, 1))}
              aria-label="Next month"
            >
              {React.createElement(ChevronRightIcon, {
                size: 16,
                stroke: 2
              })}
            </button>
          </div>
        </div>
        <div className="ku-calendar-weekdays">
          {weekDays.map((day: string) => (
            <div key={day} className="ku-calendar-weekday">
              {day}
            </div>
          ))}
        </div>
        <div className="ku-calendar-days">
          {days.map((day: Date) => {
            const isSelected = isDateSelected(day);
            const isDisabled = isDateDisabled(day);
            const isCurrentMonth = isSameMonth(day, date);

            return (
              <button
                key={day.toISOString()}
                className={`ku-calendar-day ${isSelected ? 'selected' : ''} ${
                  !isCurrentMonth ? 'other-month' : ''
                } ${isDisabled ? 'disabled' : ''}`}
                onClick={() => handleDateSelect(day)}
                disabled={isDisabled}
                aria-selected={isSelected}
                aria-disabled={isDisabled}
                aria-label={format(day, 'MMMM d, yyyy', { locale })}
              >
                {format(day, 'd')}
              </button>
            );
          })}
        </div>
      </div>
    );
  }, [
    getMonthDays,
    isDateSelected,
    isDateDisabled,
    handleDateSelect,
    navigateMonth,
    locale,
  ]);

  return (
    <div
      className={`ku-calendar ${displayMode} ${theme}`}
      role="application"
      aria-label="Calendar"
    >
      {displayMode === 'single' && renderMonth(currentDate)}
      {displayMode === 'double' && (
        <>
          {renderMonth(currentDate)}
          {renderMonth(addMonths(currentDate, 1))}
        </>
      )}
      {displayMode === 'vertical' && (
        <>
          {renderMonth(currentDate)}
          {renderMonth(addMonths(currentDate, 1))}
        </>
      )}
    </div>
  );
}; 