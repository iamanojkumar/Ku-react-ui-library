import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { XIcon } from '@ku-design-system/core';
import './Modal.css';
export const Modal = ({ isOpen, onClose, position = 'center', size = 'medium', title, subtitle, ariaLabel, showCloseButton = true, closeOnOverlayClick = true, closeOnEscape = true, children, className = '', }) => {
    const [lastActiveElement] = useState(() => document.activeElement);
    const modalRef = useRef(null);
    const contentRef = useRef(null);
    // Handle escape key
    useEffect(() => {
        if (!isOpen || !closeOnEscape)
            return;
        const handleEscape = (event) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };
        document.addEventListener('keydown', handleEscape);
        return () => document.removeEventListener('keydown', handleEscape);
    }, [isOpen, closeOnEscape, onClose]);
    // Handle focus trap
    useEffect(() => {
        if (!isOpen || !contentRef.current)
            return;
        const content = contentRef.current;
        const focusableElements = content.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
        const firstFocusable = focusableElements[0];
        const lastFocusable = focusableElements[focusableElements.length - 1];
        const handleTab = (event) => {
            if (event.key !== 'Tab')
                return;
            if (event.shiftKey) {
                if (document.activeElement === firstFocusable) {
                    event.preventDefault();
                    lastFocusable.focus();
                }
            }
            else {
                if (document.activeElement === lastFocusable) {
                    event.preventDefault();
                    firstFocusable.focus();
                }
            }
        };
        // Focus first element
        firstFocusable === null || firstFocusable === void 0 ? void 0 : firstFocusable.focus();
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
        }
        else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);
    if (!isOpen)
        return null;
    const handleOverlayClick = (event) => {
        if (closeOnOverlayClick && event.target === modalRef.current) {
            onClose();
        }
    };
    const modalContent = (_jsx("div", { ref: modalRef, className: `ku-modal ku-modal--${position} ${className}`, onClick: handleOverlayClick, role: "dialog", "aria-modal": "true", "aria-labelledby": title ? 'modal-title' : undefined, "aria-describedby": subtitle ? 'modal-subtitle' : undefined, "aria-label": !title && !subtitle ? ariaLabel : undefined, children: _jsxs("div", { ref: contentRef, className: `ku-modal__content ku-modal__content--${size}`, children: [showCloseButton && (_jsx("button", { className: "ku-modal__close", onClick: onClose, "aria-label": "Close modal", children: _jsx(XIcon, { size: 24 }) })), title && (_jsx("h2", { id: "modal-title", className: "ku-modal__title", children: title })), subtitle && (_jsx("div", { id: "modal-subtitle", className: "ku-modal__subtitle", children: subtitle })), _jsx("div", { className: "ku-modal__body", children: children })] }) }));
    return createPortal(modalContent, document.body);
};
//# sourceMappingURL=Modal.js.map