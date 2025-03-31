import React from 'react';
import classNames from 'classnames';
import {
  InfoCircleIcon,
  AlertTriangleIcon,
  CircleCheckIcon,
  ExclamationCircleIcon,
  XIcon,
} from '@ku-design-system/core';
import './Alert.css';

export type AlertVariant = 'info' | 'success' | 'warning' | 'error';

type BaseProps = Omit<React.ComponentPropsWithoutRef<'div'>, 'title'>;

export interface AlertProps extends BaseProps {
  /**
   * The variant of the alert that maps to different colors
   * @default 'info'
   */
  variant?: AlertVariant;

  /**
   * The title of the alert
   */
  title?: React.ReactNode;

  /**
   * Custom icon to display
   * If not provided, a default icon based on variant will be used
   */
  icon?: React.ReactNode;

  /**
   * Whether the alert can be dismissed
   * @default false
   */
  dismissible?: boolean;

  /**
   * Callback fired when the alert is dismissed
   */
  onDismiss?: () => void;

  /**
   * Actions to be displayed in the alert
   */
  actions?: React.ReactNode;

  /**
   * Whether to show the actions
   * @default true
   */
  showActions?: boolean;

  /**
   * Whether the alert should be full width on mobile
   * @default true
   */
  fullWidthOnMobile?: boolean;
}

const variantToIcon = {
  info: InfoCircleIcon,
  success: CircleCheckIcon,
  warning: AlertTriangleIcon,
  error: ExclamationCircleIcon,
};

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(({
  variant = 'info',
  title,
  icon,
  dismissible = false,
  onDismiss,
  actions,
  showActions = true,
  fullWidthOnMobile = true,
  className,
  children,
  ...props
}, ref) => {
  const IconComponent = variantToIcon[variant];
  const defaultIcon = React.createElement(IconComponent, { size: 24 });

  return (
    <div
      ref={ref}
      className={classNames(
        'ku-alert',
        `ku-alert--${variant}`,
        {
          'ku-alert--full-width-mobile': fullWidthOnMobile,
          'ku-alert--with-title': !!title,
        },
        className
      )}
      role="alert"
      {...props}
    >
      <div className="ku-alert-content">
        <span className="ku-alert-icon" aria-hidden="true">
          {icon || defaultIcon}
        </span>

        <div className="ku-alert-message">
          {title && (
            <div className="ku-alert-title">
              {title}
            </div>
          )}
          <div className="ku-alert-description">
            {children}
          </div>
        </div>

        {actions && showActions && (
          <div className="ku-alert-actions">
            {actions}
          </div>
        )}

        {dismissible && (
          <button
            type="button"
            className="ku-alert-dismiss"
            onClick={onDismiss}
            aria-label="Dismiss alert"
          >
            {React.createElement(XIcon, { size: 20 })}
          </button>
        )}
      </div>
    </div>
  );
});

Alert.displayName = 'Alert';

export { Alert }; 