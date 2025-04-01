import React from 'react';
import classNames from 'classnames';
import './IconButton.css';

export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * The icon to display
   */
  icon: React.ReactNode;

  /**
   * The variant of the button
   * @default 'default'
   */
  variant?: 'default' | 'primary' | 'secondary' | 'ghost' | 'danger';

  /**
   * The size of the button
   * @default 'md'
   */
  size?: 'sm' | 'md' | 'lg';

  /**
   * Whether the button is in a loading state
   * @default false
   */
  loading?: boolean;

  /**
   * Whether to show a tooltip on hover
   * @default false
   */
  showTooltip?: boolean;

  /**
   * The tooltip text
   */
  tooltipText?: string;

  /**
   * Additional CSS class
   */
  className?: string;
}

export const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(({
  icon,
  variant = 'default',
  size = 'md',
  loading = false,
  showTooltip = false,
  tooltipText,
  className,
  disabled,
  ...props
}, ref) => {
  const baseClasses = classNames(
    'ku-icon-button',
    `ku-icon-button--${variant}`,
    `ku-icon-button--${size}`,
    {
      'ku-icon-button--loading': loading,
      'ku-icon-button--disabled': disabled,
    },
    className
  );

  return (
    <button
      {...props}
      ref={ref}
      className={baseClasses}
      disabled={disabled || loading}
      aria-label={tooltipText}
      title={showTooltip ? tooltipText : undefined}
      type={props.type || 'button'}
    >
      <span className="ku-icon-button__icon">
        {loading ? (
          <div className="ku-icon-button__spinner" aria-hidden="true" />
        ) : (
          icon
        )}
      </span>
      {showTooltip && tooltipText && (
        <span className="ku-icon-button__tooltip" role="tooltip">
          {tooltipText}
        </span>
      )}
    </button>
  );
});

IconButton.displayName = 'IconButton'; 