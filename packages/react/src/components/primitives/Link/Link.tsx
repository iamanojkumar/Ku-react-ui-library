import React, { forwardRef } from 'react';
import type { IconProps } from '@tabler/icons-react';
import './Link.css';

export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  /**
   * The content of the link
   */
  children: React.ReactNode;
  /**
   * Icon to display before the link text
   */
  icon?: React.ComponentType<IconProps>;
  /**
   * Icon to display after the link text
   */
  trailingIcon?: React.ComponentType<IconProps>;
  /**
   * Color variant of the link
   */
  variant?: 'default' | 'primary' | 'secondary' | 'inherit';
  /**
   * Whether the link is disabled
   */
  disabled?: boolean;
  /**
   * Whether the link should open in a new tab
   */
  external?: boolean;
  /**
   * Custom className
   */
  className?: string;
}

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  (
    {
      children,
      icon: Icon,
      trailingIcon: TrailingIcon,
      variant = 'default',
      disabled = false,
      external = false,
      className = '',
      href,
      onClick,
      target,
      rel,
      ...props
    },
    ref
  ) => {
    // Handle external link attributes
    const externalProps = external
      ? {
          target: target || '_blank',
          rel: rel || 'noopener noreferrer',
        }
      : {};

    // Handle disabled state
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
      if (disabled) {
        e.preventDefault();
        return;
      }
      onClick?.(e);
    };

    // Determine if the link should use button role
    const isButton = !href && onClick;

    return (
      <a
        ref={ref}
        className={`ku-link ku-link--${variant} ${disabled ? 'ku-link--disabled' : ''} ${className}`}
        href={disabled ? undefined : href}
        onClick={handleClick}
        aria-disabled={disabled}
        role={isButton ? 'button' : undefined}
        tabIndex={disabled ? -1 : 0}
        {...externalProps}
        {...props}
      >
        {Icon && (
          <span className="ku-link__icon ku-link__icon--leading" aria-hidden="true">
            <Icon size={16} />
          </span>
        )}
        <span className="ku-link__text">{children}</span>
        {TrailingIcon && (
          <span className="ku-link__icon ku-link__icon--trailing" aria-hidden="true">
            <TrailingIcon size={16} />
          </span>
        )}
      </a>
    );
  }
);

Link.displayName = 'Link'; 