import React from 'react';
import classNames from 'classnames';
import './Card.css';

export type CardVariant = 'elevated' | 'outlined' | 'filled';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * The variant of the card
   * @default 'elevated'
   */
  variant?: CardVariant;
  
  /**
   * Whether the card is clickable
   * @default false
   */
  clickable?: boolean;
  
  /**
   * Whether the card is disabled
   * @default false
   */
  disabled?: boolean;
  
  /**
   * Optional media content to show at the top of the card
   */
  media?: React.ReactNode;
  
  /**
   * Optional actions to show at the bottom of the card
   */
  actions?: React.ReactNode;
  
  /**
   * Optional class name
   */
  className?: string;
}

export const Card: React.FC<CardProps> = ({
  variant = 'elevated',
  clickable = false,
  disabled = false,
  media,
  actions,
  className,
  children,
  onClick,
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (disabled) return;
    onClick?.(e);
  };

  return (
    <div
      className={classNames(
        'ku-card',
        `ku-card--${variant}`,
        {
          'ku-card--clickable': clickable && !disabled,
          'ku-card--disabled': disabled,
        },
        className
      )}
      onClick={handleClick}
      role={clickable ? 'button' : undefined}
      tabIndex={clickable ? 0 : undefined}
      aria-disabled={disabled}
      {...props}
    >
      {media && (
        <div className="ku-card__media">
          {media}
        </div>
      )}
      <div className="ku-card__content">
        {children}
      </div>
      {actions && (
        <div className="ku-card__actions">
          {actions}
        </div>
      )}
    </div>
  );
};

Card.displayName = 'Card';

export default Card; 