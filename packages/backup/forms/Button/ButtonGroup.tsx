import React from 'react';
import classNames from 'classnames';
import './ButtonGroup.css';

export interface ButtonGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * The behavior of the button group
   * @default 'radio'
   */
  type: 'radio' | 'checkbox';
  
  /**
   * The orientation of the button group
   * @default 'horizontal'
   */
  orientation?: 'horizontal' | 'vertical';

  /**
   * Optional class name
   */
  className?: string;
  
  children: React.ReactNode;
}

export const ButtonGroup: React.FC<ButtonGroupProps> = ({
  type = 'radio',
  orientation = 'horizontal',
  className,
  children,
  ...props
}) => {
  const groupClasses = classNames(
    'ku-button-group',
    `ku-button-group--${type}`,
    {
      'ku-button-group--vertical': orientation === 'vertical',
    },
    className
  );

  return (
    <div 
      className={groupClasses} 
      role={type === 'radio' ? 'radiogroup' : undefined}
      {...props}
    >
      {children}
    </div>
  );
};

ButtonGroup.displayName = 'ButtonGroup';

export default ButtonGroup; 