import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { XIcon } from '@ku-design-system/core';
import './Modal.css';

export type ModalPosition = 'center' | 'left' | 'right';
export type ModalSize = 'small' | 'medium' | 'large' | 'full';

export interface ModalProps {
  /**
   * Whether the modal is visible
   */
  isOpen: boolean;
  /**
   * Callback when the modal should close
   */
  onClose: () => void;
  /**
   * The position of the modal
   * @default 'center'
   */
  position?: ModalPosition;
  /**
   * The size of the modal
   * @default 'medium'
   */
  size?: ModalSize;
  /**
   * The title of the modal (for accessibility)
   */
  title?: string;
  /**
   * The subtitle of the modal (for accessibility)
   */
  subtitle?: string;
  /**
   * Custom aria-label (used when no title/subtitle is provided)
   */
  ariaLabel?: string;
  /**
   * Whether to show the close button
   * @default true
   */
  showCloseButton?: boolean;
  /**
   * Whether to close on overlay click
   * @default true
   */
  closeOnOverlayClick?: boolean;
  /**
   * Whether to close on escape key
   * @default true
   */
  closeOnEscape?: boolean;
  /**
   * Children to render in the modal
   */
  children: React.ReactNode;
  /**
   * Custom className
   */
  className?: string;
}

export const Modal = ({
  isOpen,
  onClose,
  position = 'center',
  size = 'medium',
  title,
  subtitle,
  ariaLabel,
  showCloseButton = true,
  closeOnOverlayClick = true,
  closeOnEscape = true,
  children,
  className = '',
}: ModalProps): JSX.Element | null => {
  const [lastActiveElement] = useState(() => document.activeElement);
  const modalRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  // Handle escape key
  useEffect(() => {
    if (!isOpen || !closeOnEscape) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, closeOnEscape, onClose]);

  // Handle focus trap
  useEffect(() => {
    if (!isOpen || !contentRef.current) return;

    const content = contentRef.current;
    const focusableElements = content.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstFocusable = focusableElements[0];
    const lastFocusable = focusableElements[focusableElements.length - 1];

    const handleTab = (event: KeyboardEvent) => {
      if (event.key !== 'Tab') return;

      if (event.shiftKey) {
        if (document.activeElement === firstFocusable) {
          event.preventDefault();
          lastFocusable.focus();
        }
      } else {
        if (document.activeElement === lastFocusable) {
          event.preventDefault();
          firstFocusable.focus();
        }
      }
    };

    // Focus first element
    firstFocusable?.focus();

    document.addEventListener('keydown', handleTab);
    return () => document.removeEventListener('keydown', handleTab);
  }, [isOpen]);

  // Restore focus on close
  useEffect(() => {
    if (!isOpen && lastActiveElement instanceof HTMLElement) {
      lastActiveElement.focus();
    }
  }, [isOpen, lastActiveElement]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleOverlayClick = (event: React.MouseEvent) => {
    if (closeOnOverlayClick && event.target === modalRef.current) {
      onClose();
    }
  };

  const modalContent = (
    <div
      ref={modalRef}
      className={`ku-modal ku-modal--${position} ${className}`}
      onClick={handleOverlayClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby={title ? 'modal-title' : undefined}
      aria-describedby={subtitle ? 'modal-subtitle' : undefined}
      aria-label={!title && !subtitle ? ariaLabel : undefined}
    >
      <div
        ref={contentRef}
        className={`ku-modal__content ku-modal__content--${size}`}
      >
        {showCloseButton && (
          <button
            className="ku-modal__close"
            onClick={onClose}
            aria-label="Close modal"
          >
            <XIcon size={24} />
          </button>
        )}
        
        {title && (
          <h2 id="modal-title" className="ku-modal__title">
            {title}
          </h2>
        )}
        
        {subtitle && (
          <div id="modal-subtitle" className="ku-modal__subtitle">
            {subtitle}
          </div>
        )}
        
        <div className="ku-modal__body">{children}</div>
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
}; 