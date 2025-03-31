import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import React, { useState, useCallback, useEffect } from 'react';
import { format, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth, isSameDay, addMonths, subMonths, startOfWeek, endOfWeek, isWithinInterval } from 'date-fns';
import { ChevronLeftIcon, ChevronRightIcon } from '@ku-design-system/core';
import { useTheme } from '../ThemeProvider/ThemeProvider';
import './Calendar.css';
export const Calendar = ({ value, endValue, mode = 'single', displayMode = 'single', onChange, onRangeChange, locale, minDate, maxDate, disabled = false, }) => {
    const { theme } = useTheme();
    const [currentDate, setCurrentDate] = useState(value || new Date());
    const [selectedDate, setSelectedDate] = useState(value);
    const [rangeStart, setRangeStart] = useState(value);
    const [rangeEnd, setRangeEnd] = useState(endValue);
    // Update internal state when props change
    useEffect(() => {
        if (value)
            setSelectedDate(value);
        if (endValue)
            setRangeEnd(endValue);
    }, [value, endValue]);
    const handleDateSelect = useCallback((date) => {
        if (disabled)
            return;
        if (mode === 'single') {
            setSelectedDate(date);
            onChange === null || onChange === void 0 ? void 0 : onChange(date);
        }
        else {
            if (!rangeStart || (rangeStart && rangeEnd)) {
                setRangeStart(date);
                setRangeEnd(undefined);
            }
            else {
                const start = date < rangeStart ? date : rangeStart;
                const end = date < rangeStart ? rangeStart : date;
                setRangeEnd(end);
                onRangeChange === null || onRangeChange === void 0 ? void 0 : onRangeChange(start, end);
            }
        }
    }, [mode, rangeStart, rangeEnd, onChange, onRangeChange, disabled]);
    const navigateMonth = useCallback((direction) => {
        setCurrentDate(prev => direction === 'next' ? addMonths(prev, 1) : subMonths(prev, 1));
    }, []);
    const isDateSelected = useCallback((date) => {
        if (mode === 'single') {
            return selectedDate ? isSameDay(date, selectedDate) : false;
        }
        if (!rangeStart || !rangeEnd)
            return false;
        return isWithinInterval(date, { start: rangeStart, end: rangeEnd });
    }, [mode, selectedDate, rangeStart, rangeEnd]);
    const isDateDisabled = useCallback((date) => {
        if (disabled)
            return true;
        if (minDate && date < minDate)
            return true;
        if (maxDate && date > maxDate)
            return true;
        return false;
    }, [disabled, minDate, maxDate]);
    const getMonthDays = useCallback((date) => {
        const start = startOfWeek(startOfMonth(date));
        const end = endOfWeek(endOfMonth(date));
        return eachDayOfInterval({ start, end });
    }, []);
    const renderMonth = useCallback((date) => {
        const days = getMonthDays(date);
        const monthName = format(date, 'MMMM yyyy', { locale });
        const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        return (_jsxs("div", { className: "ku-calendar-month", role: "grid", "aria-label": monthName, children: [_jsxs("div", { className: "ku-calendar-header", children: [_jsx("h3", { children: monthName }), _jsxs("div", { className: "ku-calendar-navigation", children: [_jsx("button", { onClick: () => navigateMonth('prev'), disabled: isDateDisabled(subMonths(date, 1)), "aria-label": "Previous month", children: React.createElement(ChevronLeftIcon, {
                                        size: 16,
                                        stroke: 2
                                    }) }), _jsx("button", { onClick: () => navigateMonth('next'), disabled: isDateDisabled(addMonths(date, 1)), "aria-label": "Next month", children: React.createElement(ChevronRightIcon, {
                                        size: 16,
                                        stroke: 2
                                    }) })] })] }), _jsx("div", { className: "ku-calendar-weekdays", children: weekDays.map((day) => (_jsx("div", { className: "ku-calendar-weekday", children: day }, day))) }), _jsx("div", { className: "ku-calendar-days", children: days.map((day) => {
                        const isSelected = isDateSelected(day);
                        const isDisabled = isDateDisabled(day);
                        const isCurrentMonth = isSameMonth(day, date);
                        return (_jsx("button", { className: `ku-calendar-day ${isSelected ? 'selected' : ''} ${!isCurrentMonth ? 'other-month' : ''} ${isDisabled ? 'disabled' : ''}`, onClick: () => handleDateSelect(day), disabled: isDisabled, "aria-selected": isSelected, "aria-disabled": isDisabled, "aria-label": format(day, 'MMMM d, yyyy', { locale }), children: format(day, 'd') }, day.toISOString()));
                    }) })] }));
    }, [
        getMonthDays,
        isDateSelected,
        isDateDisabled,
        handleDateSelect,
        navigateMonth,
        locale,
    ]);
    return (_jsxs("div", { className: `ku-calendar ${displayMode} ${theme}`, role: "application", "aria-label": "Calendar", children: [displayMode === 'single' && renderMonth(currentDate), displayMode === 'double' && (_jsxs(_Fragment, { children: [renderMonth(currentDate), renderMonth(addMonths(currentDate, 1))] })), displayMode === 'vertical' && (_jsxs(_Fragment, { children: [renderMonth(currentDate), renderMonth(addMonths(currentDate, 1))] }))] }));
};
//# sourceMappingURL=Calendar.js.map