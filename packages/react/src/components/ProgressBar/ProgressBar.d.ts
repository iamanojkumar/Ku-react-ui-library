/// <reference types="react" />
import './ProgressBar.css';
export type ProgressBarSize = 'small' | 'medium' | 'large';
export interface ProgressBarProps {
    /**
     * Current progress value (0-100)
     */
    value: number;
    /**
     * Maximum value for the progress bar
     * @default 100
     */
    max?: number;
    /**
     * Visual label for the progress bar
     */
    label?: string;
    /**
     * Size variant of the progress bar
     * @default 'medium'
     */
    size?: ProgressBarSize;
    /**
     * Whether the progress is indeterminate
     * @default false
     */
    indeterminate?: boolean;
    /**
     * Whether to show buffer progress
     * @default false
     */
    buffer?: boolean;
    /**
     * Buffer value (0-100)
     * @default 0
     */
    bufferValue?: number;
    /**
     * Whether the progress bar can be dismissed
     * @default false
     */
    dismissible?: boolean;
    /**
     * Callback when the progress bar is dismissed
     */
    onDismiss?: () => void;
    /**
     * Estimated time remaining in seconds
     */
    timeRemaining?: number;
    /**
     * Accessibility label for screen readers
     */
    ariaLabel?: string;
    /**
     * Custom class name
     */
    className?: string;
}
export declare const ProgressBar: ({ value, max, label, size, indeterminate, buffer, bufferValue, dismissible, onDismiss, timeRemaining, ariaLabel, className, }: ProgressBarProps) => JSX.Element;
//# sourceMappingURL=ProgressBar.d.ts.map