import React from 'react';
import { XIcon } from '@ku-design-system/core';
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

export const ProgressBar = ({
  value,
  max = 100,
  label,
  size = 'medium',
  indeterminate = false,
  buffer = false,
  bufferValue = 0,
  dismissible = false,
  onDismiss,
  timeRemaining,
  ariaLabel,
  className = '',
}: ProgressBarProps): JSX.Element => {
  // Normalize progress value between 0 and 100
  const normalizedValue = Math.min(100, Math.max(0, (value / max) * 100));
  const normalizedBufferValue = Math.min(100, Math.max(0, (bufferValue / max) * 100));

  // Format time remaining
  const formatTimeRemaining = (seconds: number): string => {
    if (seconds < 60) {
      return `${Math.ceil(seconds)}s remaining`;
    }
    const minutes = Math.ceil(seconds / 60);
    return `${minutes}m remaining`;
  };

  return (
    <div
      className={`ku-progress ${className}`}
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={indeterminate ? undefined : normalizedValue}
      aria-label={ariaLabel || label}
    >
      <div className="ku-progress__header">
        {label && <div className="ku-progress__label">{label}</div>}
        <div className="ku-progress__info">
          {!indeterminate && (
            <div className="ku-progress__value">{Math.round(normalizedValue)}%</div>
          )}
          {dismissible && onDismiss && (
            <button
              type="button"
              className="ku-progress__dismiss"
              onClick={onDismiss}
              aria-label="Cancel operation"
            >
              <XIcon size={16} />
            </button>
          )}
        </div>
      </div>
      
      <div className={`ku-progress__track ku-progress__track--${size}`}>
        {buffer && !indeterminate && (
          <div
            className="ku-progress__buffer"
            style={{ width: `${normalizedBufferValue}%` }}
          />
        )}
        <div
          className={`ku-progress__bar ${indeterminate ? 'ku-progress__bar--indeterminate' : ''}`}
          style={indeterminate ? undefined : { width: `${normalizedValue}%` }}
        />
      </div>

      {timeRemaining !== undefined && !indeterminate && (
        <div className="ku-progress__time">
          {formatTimeRemaining(timeRemaining)}
        </div>
      )}
    </div>
  );
}; 