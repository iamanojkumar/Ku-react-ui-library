import React, { forwardRef } from 'react';
import { classNames } from '../../../utils/classNames';
import './Switch.css';

export interface SwitchProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /**
   * The label for the switch
   * @required
   */
  label: string;

  /**
   * Whether to hide the label visually (still available for screen readers)
   */
  hideLabel?: boolean;

  /**
   * Description for the switch (for additional context)
   */
  description?: string;

  /**
   * Error message to display
   */
  error?: string;

  /**
   * Whether the switch is in an error state
   */
  hasError?: boolean;

  /**
   * Whether the switch is in a loading state
   */
  isLoading?: boolean;

  /**
   * The size of the switch
   * @default "md"
   */
  size?: 'sm' | 'md' | 'lg';

  /**
   * Additional class name for the wrapper element
   */
  wrapperClassName?: string;

  /**
   * Additional class name for the label element
   */
  labelClassName?: string;
}

export const Switch = forwardRef<HTMLInputElement, SwitchProps>((
  {
    label,
    hideLabel = false,
    description,
    error,
    hasError = false,
    isLoading = false,
    size = 'md',
    checked,
    disabled,
    wrapperClassName,
    labelClassName,
    className,
    id,
    'aria-describedby': ariaDescribedBy,
    ...props
  },
  ref
) => {
  const switchId = id || `switch-${Math.random().toString(36).slice(2, 11)}`;
  const descriptionId = description ? `${switchId}-description` : undefined;
  const errorId = error ? `${switchId}-error` : undefined;
  const ariaDescribedByIds = [
    ariaDescribedBy,
    descriptionId,
    errorId
  ].filter(Boolean).join(' ');

  return (
    <div
      className={classNames(
        'ku-switch-wrapper',
        {
          'ku-switch-disabled': disabled,
          'ku-switch-error': hasError,
          'ku-switch-loading': isLoading
        },
        wrapperClassName
      )}
    >
      <div className="ku-switch-label-group">
        <label
          htmlFor={switchId}
          className={classNames(
            'ku-switch-label',
            {
              'ku-switch-label-hidden': hideLabel,
            },
            labelClassName
          )}
        >
          {label}
        </label>
        {description && (
          <div
            id={descriptionId}
            className="ku-switch-description"
          >
            {description}
          </div>
        )}
      </div>
      <div className="ku-switch-control">
        <input
          {...props}
          ref={ref}
          type="checkbox"
          role="switch"
          id={switchId}
          checked={checked}
          disabled={disabled || isLoading}
          className="ku-switch-input"
          aria-checked={checked}
          aria-describedby={ariaDescribedByIds || undefined}
          aria-invalid={hasError}
          tabIndex={0}
        />
        <div
          className={classNames(
            'ku-switch',
            `ku-switch-${size}`,
            className
          )}
        >
          <div className="ku-switch-thumb" aria-hidden="true" />
          {isLoading && <div className="ku-switch-loading-indicator" />}
        </div>
      </div>
      {error && (
        <div
          id={errorId}
          className="ku-switch-error-message"
          role="alert"
        >
          {error}
        </div>
      )}
    </div>
  );
});

Switch.displayName = 'Switch'; 