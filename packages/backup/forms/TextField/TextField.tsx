import React, { useState, forwardRef } from 'react';
import { IconEye, IconEyeOff } from '@tabler/icons-react';
import { classNames } from '../../../utils/classNames';
import './TextField.css';

export interface TextFieldBaseProps {
  /**
   * The label for the text field
   */
  label?: string;

  /**
   * Icon to display next to the label
   */
  labelIcon?: React.ReactNode;

  /**
   * Helper text to display below the text field
   */
  helperText?: string;

  /**
   * Error message to display below the text field
   */
  error?: string;

  /**
   * The size of the text field
   * @default "md"
   */
  size?: 'sm' | 'md' | 'lg';

  /**
   * The visual style variant of the text field
   * @default "outlined"
   */
  variant?: 'outlined' | 'filled' | 'subtle';

  /**
   * Icon to display at the start of the text field
   */
  startIcon?: React.ReactNode;

  /**
   * Icon to display at the end of the text field
   */
  endIcon?: React.ReactNode;

  /**
   * Text or element to display before the input
   */
  prefix?: React.ReactNode;

  /**
   * Text or element to display after the input
   */
  suffix?: React.ReactNode;

  /**
   * Action button to display at the end of the text field
   */
  actionButton?: React.ReactNode;

  /**
   * Whether to show a password toggle button
   */
  showPasswordToggle?: boolean;

  /**
   * Whether the text field has a leading icon
   */
  hasLeadingIcon?: boolean;

  /**
   * Whether the text field has a trailing icon
   */
  hasTrailingIcon?: boolean;

  /**
   * Additional class name for the wrapper element
   */
  wrapperClassName?: string;

  /**
   * Additional class name for the label element
   */
  labelClassName?: string;

  /**
   * Additional class name for the input element
   */
  inputClassName?: string;

  /**
   * Additional class name for the helper text element
   */
  helperClassName?: string;

  /**
   * Additional class name for the error message element
   */
  errorClassName?: string;

  /**
   * The type of the input field
   */
  type?: string;
}

export const TextField = forwardRef<HTMLInputElement, TextFieldBaseProps & Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'prefix'>>((
  {
    label,
    labelIcon,
    helperText,
    error,
    size = 'md',
    variant = 'outlined',
    startIcon,
    endIcon,
    prefix,
    suffix,
    actionButton,
    showPasswordToggle,
    hasLeadingIcon,
    hasTrailingIcon,
    wrapperClassName,
    labelClassName,
    inputClassName,
    helperClassName,
    errorClassName,
    type,
    className,
    ...props
  },
  ref
) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(prev => !prev);
  };

  const passwordIcon = showPassword ? (
    <IconEye size={20} stroke={1.5} />
  ) : (
    <IconEyeOff size={20} stroke={1.5} />
  );

  const inputType = type === 'password' && showPassword ? 'text' : type;

  const renderEndIcon = () => {
    if (type === 'password' && showPasswordToggle) {
      return (
        <button
          type="button"
          onClick={handleTogglePassword}
          className="ku-textfield-password-toggle"
          aria-label={showPassword ? 'Hide password' : 'Show password'}
        >
          {passwordIcon}
        </button>
      );
    }
    return endIcon;
  };

  return (
    <div
      className={classNames(
        'ku-textfield-wrapper',
        `ku-textfield-${variant}`,
        `ku-textfield-${size}`,
        {
          'ku-textfield-disabled': props.disabled,
          'ku-textfield-error': error,
          'ku-textfield-with-start-icon': startIcon || hasLeadingIcon,
          'ku-textfield-with-end-icon': endIcon || hasTrailingIcon,
          'ku-textfield-with-prefix': prefix,
          'ku-textfield-with-suffix': suffix,
          'ku-textfield-with-action': actionButton,
          'ku-textfield-with-password-toggle': type === 'password' && showPasswordToggle,
        },
        wrapperClassName
      )}
    >
      {label && (
        <label
          className={classNames(
            'ku-textfield-label',
            {
              'ku-textfield-label-with-icon': labelIcon,
            },
            labelClassName
          )}
        >
          {label}
          {labelIcon && <span className="ku-textfield-label-icon">{labelIcon}</span>}
        </label>
      )}
      <div className="ku-textfield-input-wrapper">
        {prefix && <span className="ku-textfield-prefix">{prefix}</span>}
        {startIcon && <span className="ku-textfield-start-icon">{startIcon}</span>}
        <input
          {...props}
          ref={ref}
          type={inputType}
          className={classNames('ku-textfield-input', inputClassName, className)}
        />
        {endIcon && <span className="ku-textfield-end-icon">{endIcon}</span>}
        {type === 'password' && showPasswordToggle && (
          <button
            type="button"
            onClick={handleTogglePassword}
            className="ku-textfield-password-toggle"
            aria-label={showPassword ? 'Hide password' : 'Show password'}
          >
            {passwordIcon}
          </button>
        )}
        {suffix && <span className="ku-textfield-suffix">{suffix}</span>}
        {actionButton && (
          <span className="ku-textfield-action">{actionButton}</span>
        )}
      </div>
      {helperText && !error && (
        <span className={classNames('ku-textfield-helper', helperClassName)}>
          {helperText}
        </span>
      )}
      {error && (
        <span className={classNames('ku-textfield-error-text', errorClassName)}>
          {error}
        </span>
      )}
    </div>
  );
});

TextField.displayName = 'TextField'; 