import React, { useEffect, useRef, useState } from 'react';
import { IconX, IconCheck, IconAlertCircle, IconInfoCircle } from '@tabler/icons-react';
import './Toast.css';

export type ToastVariant = 'success' | 'error' | 'warning' | 'info';

export interface ToastProps {
  /** The content of the toast */
  children: React.ReactNode;
  /** The variant of the toast */
  variant?: ToastVariant;
  /** Icon to display at the start of the toast */
  icon?: React.ReactNode;
  /** Whether the toast is visible */
  open?: boolean;
  /** Callback fired when the toast is closed */
  onClose?: () => void;
  /** Duration in milliseconds before the toast is automatically closed */
  timeout?: number;
  /** Whether to show the close button */
  showCloseButton?: boolean;
  /** Action button to display in the toast */
  action?: {
    label: string;
    onClick: () => void;
  };
  /** Whether the toast is stacked */
  stacked?: boolean;
  /** Custom className for the toast */
  className?: string;
}

const defaultIcons: Record<ToastVariant, React.ReactNode> = {
  success: <IconCheck size={20} stroke={1.5} />,
  error: <IconAlertCircle size={20} stroke={1.5} />,
  info: <IconInfoCircle size={20} stroke={1.5} />,
  warning: <IconAlertCircle size={20} stroke={1.5} />,
};

export const Toast: React.FC<ToastProps> = ({
  children,
  variant = 'info',
  icon,
  open = true,
  onClose,
  timeout = 5000,
  showCloseButton = true,
  action,
  stacked = false,
  className,
}) => {
  const [isVisible, setIsVisible] = useState(open);
  const timeoutRef = useRef<NodeJS.Timeout>();
  const toastRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open && timeout > 0) {
      timeoutRef.current = setTimeout(() => {
        handleClose();
      }, timeout);
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [open, timeout]);

  const handleClose = () => {
    setIsVisible(false);
    if (onClose) {
      onClose();
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Escape') {
      handleClose();
    }
  };

  const handleFocus = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  const handleBlur = () => {
    if (timeout > 0) {
      timeoutRef.current = setTimeout(() => {
        handleClose();
      }, timeout);
    }
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div
      ref={toastRef}
      className={`
        ku-toast
        ku-toast--${variant}
        ${stacked ? 'ku-toast--stacked' : ''}
        ${className || ''}
      `}
      role="alert"
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      <div className="ku-toast-content">
        <div className="ku-toast-icon">
          {icon || defaultIcons[variant]}
        </div>
        <div className="ku-toast-message">{children}</div>
      </div>
      <div className="ku-toast-actions">
        {action && (
          <button
            type="button"
            className="ku-toast-action"
            onClick={action.onClick}
            onFocus={handleFocus}
            onBlur={handleBlur}
          >
            {action.label}
          </button>
        )}
        {showCloseButton && (
          <button
            type="button"
            className="ku-toast-close"
            onClick={handleClose}
            onFocus={handleFocus}
            onBlur={handleBlur}
            aria-label="Close toast"
          >
            <IconX size={16} stroke={1.5} />
          </button>
        )}
      </div>
    </div>
  );
}; 