import React from 'react';
import { UserIcon } from '@ku-design-system/core';
import './Avatar.css';

export type AvatarSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type AvatarShape = 'circle' | 'square';
export type AvatarColor = 'default' | 'primary' | 'success' | 'warning' | 'error' | 'info';

export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  /** The size of the avatar */
  size?: AvatarSize;
  /** The shape of the avatar */
  shape?: AvatarShape;
  /** The background color when no image is present */
  color?: AvatarColor;
  /** The image source URL */
  src?: string;
  /** Alt text for the image */
  alt?: string;
  /** Fallback content when image fails to load or no image is provided */
  fallback?: React.ReactNode;
  /** Text to display when no image or fallback is provided (usually initials) */
  initials?: string;
  /** Whether this avatar is part of a group */
  grouped?: boolean;
  /** Custom border color for grouped avatars */
  borderColor?: string;
}

export const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(({
  size = 'md',
  shape = 'circle',
  color = 'default',
  src,
  alt,
  fallback,
  initials,
  grouped = false,
  borderColor,
  className,
  ...props
}, ref) => {
  const [error, setError] = React.useState(false);
  const hasImage = src && !error;

  const handleError = () => {
    setError(true);
  };

  // Get icon size based on avatar size
  const getIconSize = () => {
    switch (size) {
      case 'xs':
        return 16;
      case 'sm':
        return 20;
      case 'lg':
        return 32;
      case 'xl':
        return 40;
      default: // md
        return 24;
    }
  };

  const renderContent = () => {
    if (hasImage) {
      return (
        <img
          src={src}
          alt={alt}
          className="ku-avatar__image"
          onError={handleError}
        />
      );
    }

    if (fallback) {
      return <div className="ku-avatar__fallback">{fallback}</div>;
    }

    if (initials) {
      return <div className="ku-avatar__initials">{initials}</div>;
    }

    // Default fallback using UserIcon from core library
    return (
      <div className="ku-avatar__fallback">
        {React.createElement(UserIcon, {
          size: getIconSize(),
          stroke: 2
        })}
      </div>
    );
  };

  const classes = [
    'ku-avatar',
    `ku-avatar--${size}`,
    `ku-avatar--${shape}`,
    `ku-avatar--${color}`,
    grouped && 'ku-avatar--grouped',
    className
  ].filter(Boolean).join(' ');

  const style = borderColor ? { '--ku-avatar-border-color': borderColor } as React.CSSProperties : undefined;

  return (
    <div
      ref={ref}
      className={classes}
      style={style}
      role={alt ? 'img' : undefined}
      aria-label={alt}
      {...props}
    >
      {renderContent()}
    </div>
  );
});

Avatar.displayName = 'Avatar'; 