import React from 'react';
import classNames from 'classnames';
import './Button.css';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * The variant of the button
   * @default 'primary'
   */
  variant?: ButtonVariant;
  
  /**
   * The size of the button
   * @default 'md'
   */
  size?: ButtonSize;
  
  /**
   * Whether the button is in a loading state
   * @default false
   */
  isLoading?: boolean;
  
  /**
   * Optional icon to show before the button text
   */
  leftIcon?: React.ReactNode;
  
  /**
   * Optional icon to show after the button text
   */
  rightIcon?: React.ReactNode;
  
  /**
   * Optional class name
   */
  className?: string;
  
  /**
   * Whether the button should take up the full width of its container
   * @default false
   */
  fullWidth?: boolean;
  
  /**
   * The loading text to be announced to screen readers
   * @default 'Loading, please wait'
   */
  loadingText?: string;
  
  /**
   * Whether to show the spinner when loading
   * @default true
   */
  spinnerInButton?: boolean;

  /**
   * Optional badge content to display
   */
  badge?: React.ReactNode;

  /**
   * Optional counter value to display
   */
  counter?: number;

  /**
   * Whether the button is pressed (for button groups)
   * @default false
   */
  isPressed?: boolean;
  
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({
  variant = 'primary',
  size = 'md',
  isLoading = false,
  leftIcon,
  rightIcon,
  fullWidth = false,
  children,
  className,
  disabled,
  loadingText = 'Loading, please wait',
  spinnerInButton = true,
  badge,
  counter,
  isPressed = false,
  ...props
}, ref) => {
  const buttonClasses = classNames(
    'ku-button',
    `ku-button--${variant}`,
    `ku-button--${size}`,
    {
      'ku-button--loading': isLoading && spinnerInButton,
      'ku-button--full-width': fullWidth,
    },
    className
  );

  // For screen readers to announce the loading state
  const ariaProps = {
    ...(isLoading ? {
      'aria-busy': true,
      'aria-label': loadingText,
      role: 'status',
    } : {}),
    ...(isPressed !== undefined ? {
      'aria-pressed': isPressed,
    } : {}),
  };

  return (
    <button
      ref={ref}
      className={buttonClasses}
      disabled={disabled || isLoading}
      {...ariaProps}
      {...props}
    >
      {badge && (
        <span className="ku-button__badge">
          {badge}
        </span>
      )}

      {isLoading && spinnerInButton && (
        <span className="ku-button__loader" aria-hidden="true">
          <svg
            className="ku-button__loader-svg"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              className="ku-button__loader-circle"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="var(--ku-button-loading-spinner-width)"
              strokeLinecap="round"
            />
          </svg>
        </span>
      )}

      {!isLoading && leftIcon && (
        <span className="ku-button__icon ku-button__icon--left" aria-hidden="true">
          {leftIcon}
        </span>
      )}

      <span className="ku-button__content">
        {children}
        {counter !== undefined && (
          <span className="ku-button__counter">
            {counter}
          </span>
        )}
      </span>

      {!isLoading && rightIcon && (
        <span className="ku-button__icon ku-button__icon--right" aria-hidden="true">
          {rightIcon}
        </span>
      )}
    </button>
  );
});

Button.displayName = 'Button';

export default Button; 