import React, { forwardRef, useState } from 'react';
import './TextField.css';
import { IconEye, IconEyeOff } from '@tabler/icons-react';

export interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Label for the text field */
  label?: string;
  /** Icon to display next to the label */
  labelIcon?: React.ReactNode;
  /** Error message to display */
  error?: string;
  /** Helper text to provide additional context */
  helperText?: string;
  /** Size variant of the text field */
  size?: 'sm' | 'md' | 'lg';
  /** Visual variant of the text field */
  variant?: 'outlined' | 'filled' | 'subtle';
  /** Icon to display at the start of the field */
  startIcon?: React.ReactNode;
  /** Icon to display at the end of the field */
  endIcon?: React.ReactNode;
  /** Whether to show leading icon container */
  hasLeadingIcon?: boolean;
  /** Whether to show trailing icon container */
  hasTrailingIcon?: boolean;
  /** Content to display before the input */
  prefix?: React.ReactNode;
  /** Content to display after the input */
  suffix?: React.ReactNode;
  /** Action button to display inside the field */
  actionButton?: React.ReactNode;
  /** Accessibility label when no visual label is provided */
  ariaLabel?: string;
  /** Whether to show password visibility toggle */
  showPasswordToggle?: boolean;
}

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  (
    {
      label,
      labelIcon,
      error,
      helperText,
      size = 'md',
      variant = 'outlined',
      startIcon,
      endIcon,
      hasLeadingIcon,
      hasTrailingIcon,
      prefix,
      suffix,
      actionButton,
      disabled,
      className,
      id,
      ariaLabel,
      'aria-label': ariaLabelProp,
      type,
      showPasswordToggle,
      ...props
    },
    ref
  ) => {
    const fieldId = id || `textfield-${React.useId()}`;
    const helperId = `${fieldId}-helper`;
    const errorId = `${fieldId}-error`;
    const [showPassword, setShowPassword] = useState(false);

    const handlePasswordToggle = () => {
      setShowPassword(!showPassword);
    };

    const inputType = showPasswordToggle && type === 'password' && showPassword ? 'text' : type;

    return (
      <div className={`ku-textfield-wrapper ${className || ''}`}>
        {(label || labelIcon) && (
          <label
            htmlFor={fieldId}
            className={`ku-textfield-label ${disabled ? 'ku-textfield-label--disabled' : ''}`}
          >
            {labelIcon && <span className="ku-textfield-label-icon">{labelIcon}</span>}
            {label}
          </label>
        )}
        <div className="ku-textfield-field">
          {(startIcon || hasLeadingIcon) && (
            <div className="ku-textfield-icon ku-textfield-icon--start">
              {startIcon}
            </div>
          )}
          {prefix && <div className="ku-textfield-affix ku-textfield-affix--prefix">{prefix}</div>}
          <input
            ref={ref}
            id={fieldId}
            type={inputType}
            className={`
              ku-textfield
              ku-textfield--${variant}
              ku-textfield--${size}
              ${error ? 'ku-textfield--error' : ''}
              ${disabled ? 'ku-textfield--disabled' : ''}
              ${(startIcon || hasLeadingIcon) ? 'ku-textfield--has-start-icon' : ''}
              ${(endIcon || hasTrailingIcon || actionButton || showPasswordToggle) ? 'ku-textfield--has-end-icon' : ''}
              ${prefix ? 'ku-textfield--has-prefix' : ''}
              ${suffix ? 'ku-textfield--has-suffix' : ''}
              ${actionButton ? 'ku-textfield--has-action' : ''}
            `}
            disabled={disabled}
            aria-invalid={!!error}
            aria-label={ariaLabel || ariaLabelProp}
            aria-describedby={`${helperText ? helperId : ''} ${error ? errorId : ''}`}
            {...props}
          />
          {suffix && <div className="ku-textfield-affix ku-textfield-affix--suffix">{suffix}</div>}
          {(endIcon || hasTrailingIcon) && (
            <div className="ku-textfield-icon ku-textfield-icon--end">
              {endIcon}
            </div>
          )}
          {showPasswordToggle && type === 'password' && (
            <button
              type="button"
              className="ku-textfield-password-toggle"
              onClick={handlePasswordToggle}
              disabled={disabled}
              aria-label={showPassword ? 'Hide password' : 'Show password'}
            >
              {showPassword ? (
                <IconEyeOff size={20} stroke={1.5} />
              ) : (
                <IconEye size={20} stroke={1.5} />
              )}
            </button>
          )}
          {actionButton && (
            <div className="ku-textfield-action">
              {actionButton}
            </div>
          )}
        </div>
        {(helperText || error) && (
          <div className="ku-textfield-support">
            {helperText && (
              <div id={helperId} className="ku-textfield-helper">
                {helperText}
              </div>
            )}
            {error && (
              <div id={errorId} className="ku-textfield-error">
                {error}
              </div>
            )}
          </div>
        )}
      </div>
    );
  }
);

TextField.displayName = 'TextField'; 