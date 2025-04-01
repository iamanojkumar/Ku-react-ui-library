import React from 'react';
import './Divider.css';

export interface DividerProps {
  /** The orientation of the divider */
  orientation?: 'horizontal' | 'vertical';
  /** Whether the divider is decorative (if false, it will have a semantic role) */
  decorative?: boolean;
  /** Optional label for the divider (makes it semantic by default) */
  label?: React.ReactNode;
  /** Additional CSS class name */
  className?: string;
  /** Additional CSS styles */
  style?: React.CSSProperties;
  /** The HTML element to render the divider as */
  as?: 'hr' | 'div';
}

type DividerElement = HTMLDivElement | HTMLHRElement;

/**
 * Divider component for visual content separation
 */
export const Divider = React.forwardRef<DividerElement, DividerProps>(
  (
    {
      orientation = 'horizontal',
      decorative = true,
      label,
      className = '',
      style,
      as: Component = 'hr',
    },
    ref
  ) => {
    // If there's a label, the divider is not decorative
    const isDecorative = label ? false : decorative;

    const classes = [
      'ku-divider',
      `ku-divider--${orientation}`,
      label && 'ku-divider--with-label',
      className,
    ]
      .filter(Boolean)
      .join(' ');

    // Determine appropriate ARIA attributes
    const ariaProps = isDecorative
      ? {
          'aria-hidden': 'true' as const,
          role: undefined,
        }
      : {
          role: 'separator' as const,
          'aria-orientation': orientation,
        };

    // For vertical dividers or when there's a label, we need to use a div
    const ElementType = orientation === 'vertical' || label ? 'div' : Component;

    return React.createElement(
      ElementType,
      {
        ref,
        className: classes,
        style,
        ...ariaProps,
      },
      label && (
        <div className="ku-divider__label-container">
          <span className="ku-divider__label">{label}</span>
        </div>
      )
    );
  }
);

Divider.displayName = 'Divider'; 