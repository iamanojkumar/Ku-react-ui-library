import React, { useEffect, useRef, useState } from 'react';
import { IconInfoCircle } from '@tabler/icons-react';
import './Tooltip.css';

export type TooltipPosition = 'top' | 'right' | 'bottom' | 'left';

interface Position {
  top: number;
  left: number;
}

export interface TooltipProps {
  /** The content of the tooltip */
  children: React.ReactNode;
  /** The text to display in the tooltip */
  content: React.ReactNode;
  /** The position of the tooltip */
  position?: TooltipPosition;
  /** Whether to show an info icon */
  showIcon?: boolean;
  /** Delay in milliseconds before showing the tooltip */
  delay?: number;
  /** Custom className for the tooltip */
  className?: string;
  /** Custom className for the trigger element */
  triggerClassName?: string;
}

export const Tooltip = ({
  children,
  content,
  position = 'top',
  showIcon = false,
  delay = 200,
  className,
  triggerClassName,
}: TooltipProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [tooltipPosition, setTooltipPosition] = useState<TooltipPosition>(position);
  const [tooltipStyle, setTooltipStyle] = useState<Position>({ top: 0, left: 0 });
  const triggerRef = useRef<HTMLDivElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout>();

  const calculatePosition = () => {
    if (!triggerRef.current || !tooltipRef.current) return;

    const triggerRect = triggerRef.current.getBoundingClientRect();
    const tooltipRect = tooltipRef.current.getBoundingClientRect();
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const spacing = 8; // Gap between tooltip and trigger

    let newPosition = position;
    let style: Position = { top: 0, left: 0 };

    // Calculate positions for each side
    const positions: Record<TooltipPosition, Position> = {
      top: {
        top: triggerRect.top - tooltipRect.height - spacing,
        left: triggerRect.left + (triggerRect.width - tooltipRect.width) / 2,
      },
      right: {
        top: triggerRect.top + (triggerRect.height - tooltipRect.height) / 2,
        left: triggerRect.right + spacing,
      },
      bottom: {
        top: triggerRect.bottom + spacing,
        left: triggerRect.left + (triggerRect.width - tooltipRect.width) / 2,
      },
      left: {
        top: triggerRect.top + (triggerRect.height - tooltipRect.height) / 2,
        left: triggerRect.left - tooltipRect.width - spacing,
      },
    };

    // Check if preferred position fits
    style = positions[position];

    // Check if tooltip would overflow viewport and switch position if needed
    if (position === 'top' && style.top < 0) {
      newPosition = 'bottom';
      style = positions.bottom;
    } else if (position === 'right' && style.left + tooltipRect.width > viewportWidth) {
      newPosition = 'left';
      style = positions.left;
    } else if (position === 'bottom' && style.top + tooltipRect.height > viewportHeight) {
      newPosition = 'top';
      style = positions.top;
    } else if (position === 'left' && style.left < 0) {
      newPosition = 'right';
      style = positions.right;
    }

    // Adjust horizontal position if tooltip overflows viewport
    if ((newPosition === 'top' || newPosition === 'bottom') && style.left < 0) {
      style.left = spacing;
    } else if ((newPosition === 'top' || newPosition === 'bottom') && style.left + tooltipRect.width > viewportWidth) {
      style.left = viewportWidth - tooltipRect.width - spacing;
    }

    setTooltipPosition(newPosition);
    setTooltipStyle(style);
  };

  useEffect(() => {
    if (isVisible) {
      calculatePosition();
      window.addEventListener('scroll', calculatePosition);
      window.addEventListener('resize', calculatePosition);

      // Recalculate position after a short delay to ensure tooltip has rendered
      const positionTimeout = setTimeout(calculatePosition, 0);
      return () => {
        clearTimeout(positionTimeout);
        window.removeEventListener('scroll', calculatePosition);
        window.removeEventListener('resize', calculatePosition);
      };
    }
  }, [isVisible, position]);

  const handleMouseEnter = () => {
    timeoutRef.current = setTimeout(() => {
      setIsVisible(true);
    }, delay);
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsVisible(false);
  };

  const handleFocus = () => {
    setIsVisible(true);
  };

  const handleBlur = () => {
    setIsVisible(false);
  };

  return (
    <div
      ref={triggerRef}
      className={`ku-tooltip-trigger ${triggerClassName || ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onFocus={handleFocus}
      onBlur={handleBlur}
      tabIndex={0}
    >
      {children}
      {isVisible && (
        <div
          ref={tooltipRef}
          className={`ku-tooltip ku-tooltip--${tooltipPosition} ${className || ''}`}
          style={tooltipStyle}
          role="tooltip"
          data-show={isVisible}
        >
          {showIcon && (
            <div className="ku-tooltip-icon">
              <IconInfoCircle size={16} stroke={1.5} />
            </div>
          )}
          <div className="ku-tooltip-content">{content}</div>
        </div>
      )}
    </div>
  );
}; 