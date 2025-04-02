import React, { forwardRef } from 'react';
import classNames from 'classnames';
import './Container.css';

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Maximum width of the container */
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
  /** Whether to center the container */
  center?: boolean;
  /** Whether to add padding */
  padding?: boolean;
  /** Whether to add fluid width */
  fluid?: boolean;
}

const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ maxWidth = 'xl', center = true, padding = true, fluid = false, className, ...rest }, ref) => {
    const containerClasses = classNames(
      'ku-container',
      {
        'ku-container--fluid': fluid,
        'ku-container--center': center,
        'ku-container--padding': padding,
        [`ku-container--${maxWidth}`]: maxWidth,
      },
      className
    );

    return <div ref={ref} className={containerClasses} {...rest} />;
  }
);

Container.displayName = 'Container';

export { Container }; 