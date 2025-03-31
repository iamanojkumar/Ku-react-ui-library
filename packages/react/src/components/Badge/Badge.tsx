import React from 'react';
import { XIcon } from '@ku-design-system/core';
import './Badge.css';

export type BadgeSize = 'xs' | 'sm' | 'md' | 'lg';
export type BadgeVariant = 'solid' | 'subtle' | 'outline';
export type BadgeColor = 'default' | 'primary' | 'success' | 'warning' | 'error' | 'info';
export type BadgePosition = 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  /** The size of the badge */
  size?: BadgeSize;
  /** The visual style variant of the badge */
  variant?: BadgeVariant;
  /** The color scheme of the badge */
  color?: BadgeColor;
  /** The content of the badge */
  children?: React.ReactNode;
  /** Icon to display before the content */
  icon?: React.ReactNode;
  /** Whether the badge is dismissible */
  dismissible?: boolean;
  /** Callback when dismiss button is clicked */
  onDismiss?: () => void;
  /** Whether the badge is empty (dot style) */
  empty?: boolean;
  /** Position of the badge when used as a status indicator */
  position?: BadgePosition;
  /** Whether the badge is positioned absolutely */
  absolute?: boolean;
  /** Additional class name */
  className?: string;
}

export const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(({
  size = 'md',
  variant = 'solid',
  color = 'default',
  children,
  icon,
  dismissible = false,
  onDismiss,
  empty = false,
  position,
  absolute = false,
  className,
  ...props
}, ref) => {
  const handleDismiss = (e: React.MouseEvent) => {
    e.stopPropagation();
    onDismiss?.();
  };

  // Get icon size based on badge size
  const getIconSize = () => {
    switch (size) {
      case 'xs':
        return 10;
      case 'sm':
        return 12;
      case 'lg':
        return 16;
      default: // md
        return 14;
    }
  };

  const classes = [
    'ku-badge',
    `ku-badge--${size}`,
    `ku-badge--${variant}`,
    `ku-badge--${color}`,
    empty && 'ku-badge--empty',
    position && `ku-badge--${position}`,
    absolute && 'ku-badge--absolute',
    className
  ].filter(Boolean).join(' ');

  const renderContent = () => {
    if (empty) return null;

    return (
      <>
        {icon && <span className="ku-badge__icon">{icon}</span>}
        {children && <span className="ku-badge__content">{children}</span>}
        {dismissible && (
          <button
            type="button"
            className="ku-badge__dismiss"
            onClick={handleDismiss}
            aria-label="Dismiss"
          >
            {React.createElement(XIcon, {
              size: getIconSize(),
              stroke: 2
            })}
          </button>
        )}
      </>
    );
  };

  return (
    <div
      ref={ref}
      className={classes}
      {...props}
    >
      {renderContent()}
    </div>
  );
});

Badge.displayName = 'Badge'; 