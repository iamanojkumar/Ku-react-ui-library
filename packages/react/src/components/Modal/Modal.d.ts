import React from 'react';
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
export declare const Modal: ({ isOpen, onClose, position, size, title, subtitle, ariaLabel, showCloseButton, closeOnOverlayClick, closeOnEscape, children, className, }: ModalProps) => JSX.Element | null;
//# sourceMappingURL=Modal.d.ts.map