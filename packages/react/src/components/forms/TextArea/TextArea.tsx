import React, { useEffect, useRef } from 'react';

export interface TextAreaProps extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'size'> {
  /** The label for the textarea */
  label?: string;
  /** Error message to display */
  error?: string;
  /** Helper text to provide additional context */
  helperText?: string;
  /** Size variant of the textarea */
  size?: 'sm' | 'md' | 'lg';
  /** Visual variant of the textarea */
  variant?: 'outlined' | 'filled' | 'subtle';
  /** Whether the textarea is disabled */
  disabled?: boolean;
  /** Accessibility label when no visual label is provided */
  ariaLabel?: string;
  /** ID for connecting label with textarea */
  id?: string;
  /** Maximum height before scrolling begins */
  maxHeight?: string;
}

const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (
    {
      label,
      error,
      helperText,
      size = 'md',
      variant = 'outlined',
      disabled = false,
      className = '',
      id,
      ariaLabel,
      placeholder,
      maxHeight,
      onChange,
      value,
      defaultValue,
      ...props
    },
    ref
  ) => {
    const textareaRef = useRef<HTMLTextAreaElement | null>(null);
    const combinedRef = (node: HTMLTextAreaElement) => {
      textareaRef.current = node;
      if (typeof ref === 'function') {
        ref(node);
      } else if (ref) {
        ref.current = node;
      }
    };

    const adjustHeight = () => {
      const textarea = textareaRef.current;
      if (!textarea) return;

      // Reset height to auto to get the correct scrollHeight
      textarea.style.height = 'auto';
      
      // Calculate new height
      const newHeight = textarea.scrollHeight;
      
      // Apply maxHeight if specified and content exceeds it
      if (maxHeight) {
        const maxHeightValue = parseInt(maxHeight);
        textarea.style.height = `${Math.min(newHeight, maxHeightValue)}px`;
        textarea.style.overflowY = newHeight > maxHeightValue ? 'auto' : 'hidden';
      } else {
        textarea.style.height = `${newHeight}px`;
        textarea.style.overflowY = 'hidden';
      }
    };

    // Adjust height on mount and when content changes
    useEffect(() => {
      adjustHeight();
    }, [value, defaultValue]);

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      adjustHeight();
      onChange?.(e);
    };

    const textareaId = id || `textarea-${Math.random().toString(36).substr(2, 9)}`;
    const helperTextId = `${textareaId}-helper`;
    const errorId = `${textareaId}-error`;

    return (
      <div className="ku-textarea-wrapper">
        {label && (
          <label
            htmlFor={textareaId}
            className={`ku-textarea-label ${disabled ? 'ku-textarea-label--disabled' : ''}`}
          >
            {label}
          </label>
        )}
        <div className={`ku-textarea-field ku-textarea-field--${variant}`}>
          <textarea
            ref={combinedRef}
            id={textareaId}
            className={`ku-textarea ku-textarea--${variant} ku-textarea--${size} ${
              error ? 'ku-textarea--error' : ''
            } ${disabled ? 'ku-textarea--disabled' : ''} ${className}`}
            aria-label={!label ? ariaLabel : undefined}
            aria-invalid={!!error}
            aria-describedby={`${helperText ? helperTextId : ''} ${error ? errorId : ''}`}
            disabled={disabled}
            placeholder={placeholder}
            onChange={handleChange}
            value={value}
            defaultValue={defaultValue}
            style={{ maxHeight: maxHeight }}
            {...props}
          />
        </div>
        {helperText && !error && (
          <span id={helperTextId} className="ku-textarea-helper">
            {helperText}
          </span>
        )}
        {error && (
          <span id={errorId} className="ku-textarea-error">
            {error}
          </span>
        )}
      </div>
    );
  }
);

TextArea.displayName = 'TextArea';

export { TextArea }; 