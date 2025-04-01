import React from 'react';
import { Locale } from 'date-fns';
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
export declare const Calendar: React.FC<CalendarProps>;
//# sourceMappingURL=Calendar.d.ts.map