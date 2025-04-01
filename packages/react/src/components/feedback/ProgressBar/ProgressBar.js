import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { XIcon } from '@ku-design-system/core';
import './ProgressBar.css';
export const ProgressBar = ({ value, max = 100, label, size = 'medium', indeterminate = false, buffer = false, bufferValue = 0, dismissible = false, onDismiss, timeRemaining, ariaLabel, className = '', }) => {
    // Normalize progress value between 0 and 100
    const normalizedValue = Math.min(100, Math.max(0, (value / max) * 100));
    const normalizedBufferValue = Math.min(100, Math.max(0, (bufferValue / max) * 100));
    // Format time remaining
    const formatTimeRemaining = (seconds) => {
        if (seconds < 60) {
            return `${Math.ceil(seconds)}s remaining`;
        }
        const minutes = Math.ceil(seconds / 60);
        return `${minutes}m remaining`;
    };
    return (_jsxs("div", { className: `ku-progress ${className}`, role: "progressbar", "aria-valuemin": 0, "aria-valuemax": 100, "aria-valuenow": indeterminate ? undefined : normalizedValue, "aria-label": ariaLabel || label, children: [_jsxs("div", { className: "ku-progress__header", children: [label && _jsx("div", { className: "ku-progress__label", children: label }), _jsxs("div", { className: "ku-progress__info", children: [!indeterminate && (_jsxs("div", { className: "ku-progress__value", children: [Math.round(normalizedValue), "%"] })), dismissible && onDismiss && (_jsx("button", { type: "button", className: "ku-progress__dismiss", onClick: onDismiss, "aria-label": "Cancel operation", children: _jsx(XIcon, { size: 16 }) }))] })] }), _jsxs("div", { className: `ku-progress__track ku-progress__track--${size}`, children: [buffer && !indeterminate && (_jsx("div", { className: "ku-progress__buffer", style: { width: `${normalizedBufferValue}%` } })), _jsx("div", { className: `ku-progress__bar ${indeterminate ? 'ku-progress__bar--indeterminate' : ''}`, style: indeterminate ? undefined : { width: `${normalizedValue}%` } })] }), timeRemaining !== undefined && !indeterminate && (_jsx("div", { className: "ku-progress__time", children: formatTimeRemaining(timeRemaining) }))] }));
};
//# sourceMappingURL=ProgressBar.js.map