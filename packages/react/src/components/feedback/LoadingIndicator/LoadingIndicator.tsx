import React, { forwardRef } from 'react';
import './LoadingIndicator.css';

export type LoadingVariant = 'spinner' | 'dots' | 'pulse';
export type LoadingSize = 'small' | 'medium' | 'large';

export interface LoadingIndicatorProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * The visual style of the loading indicator
   * @default 'spinner'
   */
  variant?: LoadingVariant;
  /**
   * The size of the loading indicator
   * @default 'medium'
   */
  size?: LoadingSize;
  /**
   * The color variant of the loading indicator
   * Inherits from parent by default
   */
  color?: string;
  /**
   * The label for screen readers
   * @default 'Loading...'
   */
  ariaLabel?: string;
  /**
   * The duration of the loading in seconds (if known)
   */
  duration?: number;
  /**
   * Custom className
   */
  className?: string;
}

export const LoadingIndicator = forwardRef<HTMLDivElement, LoadingIndicatorProps>(
  (
    {
      variant = 'spinner',
      size = 'medium',
      color,
      ariaLabel = 'Loading...',
      duration,
      className = '',
      style,
      ...props
    },
    ref
  ) => {
    // Get the animation duration based on reduced motion preference
    const getAnimationDuration = () => {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      return prefersReducedMotion ? '1.5s' : '0.75s';
    };

    // Generate dots for the dots variant
    const renderDots = () => {
      return (
        <div className="ku-loading__dots">
          {[...Array(3)].map((_, index) => (
            <div
              key={index}
              className="ku-loading__dot"
              style={{ animationDelay: `${index * 0.15}s` }}
            />
          ))}
        </div>
      );
    };

    // Generate pulse elements
    const renderPulse = () => {
      return (
        <div className="ku-loading__pulse">
          {[...Array(3)].map((_, index) => (
            <div
              key={index}
              className="ku-loading__pulse-ring"
              style={{ animationDelay: `${index * 0.2}s` }}
            />
          ))}
        </div>
      );
    };

    // Render progress if duration is provided
    const renderProgress = () => {
      if (!duration) return null;
      return (
        <div
          className="ku-loading__progress"
          style={{ animationDuration: `${duration}s` }}
          role="progressbar"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={0}
        />
      );
    };

    return (
      <div
        ref={ref}
        className={`ku-loading ku-loading--${variant} ku-loading--${size} ${className}`}
        role="status"
        aria-label={ariaLabel}
        style={{
          ...style,
          color: color,
          '--ku-loading-animation-duration': getAnimationDuration(),
        } as React.CSSProperties}
        {...props}
      >
        {variant === 'spinner' && <div className="ku-loading__spinner" />}
        {variant === 'dots' && renderDots()}
        {variant === 'pulse' && renderPulse()}
        {renderProgress()}
        <span className="ku-loading__label">{ariaLabel}</span>
      </div>
    );
  }
);

LoadingIndicator.displayName = 'LoadingIndicator'; 