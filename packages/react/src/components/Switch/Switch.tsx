import React from 'react';
import './Switch.css';

export interface SwitchProps {
  /**
   * Whether the switch is checked
   */
  checked: boolean;
  /**
   * Function called when the switch state changes
   */
  onChange: (checked: boolean) => void;
  /**
   * The label for the switch
   */
  label?: string;
  /**
   * Whether to visually hide the label while keeping it accessible
   */
  hideLabel?: boolean;
  /**
   * Whether the switch is disabled
   */
  disabled?: boolean;
  /**
   * Accessibility label for the switch when no visual label is provided
   */
  'aria-label'?: string;
  /**
   * Additional class name
   */
  className?: string;
  /**
   * ID for the switch input
   */
  id?: string;
}

export const Switch: React.FC<SwitchProps> = ({
  checked,
  onChange,
  label,
  hideLabel = false,
  disabled = false,
  'aria-label': ariaLabel,
  className,
  id: providedId,
  ...props
}) => {
  const id = providedId || React.useId();
  const labelId = `${id}-label`;

  return (
    <div
      className={[
        'ku-switch',
        disabled && 'ku-switch--disabled',
        className
      ].filter(Boolean).join(' ')}
    >
      <div className="ku-switch__input-wrapper">
        <input
          type="checkbox"
          id={id}
          checked={checked}
          disabled={disabled}
          onChange={(e) => onChange(e.target.checked)}
          className="ku-switch__input"
          aria-labelledby={label ? labelId : undefined}
          aria-label={!label ? ariaLabel : undefined}
          {...props}
        />
        <div className="ku-switch__track" />
        <div className="ku-switch__thumb" />
      </div>
      {label && (
        <label
          id={labelId}
          htmlFor={id}
          className={[
            'ku-switch__label',
            hideLabel && 'ku-switch__label--hidden'
          ].filter(Boolean).join(' ')}
        >
          {label}
        </label>
      )}
    </div>
  );
};

Switch.displayName = 'Switch'; 