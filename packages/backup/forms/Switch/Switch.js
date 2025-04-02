var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef } from 'react';
import { classNames } from '../../../utils/classNames';
import './Switch.css';
export const Switch = forwardRef((_a, ref) => {
    var { label, hideLabel = false, description, error, hasError = false, isLoading = false, size = 'md', checked, disabled, wrapperClassName, labelClassName, className, id, 'aria-describedby': ariaDescribedBy } = _a, props = __rest(_a, ["label", "hideLabel", "description", "error", "hasError", "isLoading", "size", "checked", "disabled", "wrapperClassName", "labelClassName", "className", "id", 'aria-describedby']);
    const switchId = id || `switch-${Math.random().toString(36).slice(2, 11)}`;
    const descriptionId = description ? `${switchId}-description` : undefined;
    const errorId = error ? `${switchId}-error` : undefined;
    const ariaDescribedByIds = [
        ariaDescribedBy,
        descriptionId,
        errorId
    ].filter(Boolean).join(' ');
    return (_jsxs("div", { className: classNames('ku-switch-wrapper', {
            'ku-switch-disabled': disabled,
            'ku-switch-error': hasError,
            'ku-switch-loading': isLoading
        }, wrapperClassName), children: [_jsxs("div", { className: "ku-switch-label-group", children: [_jsx("label", { htmlFor: switchId, className: classNames('ku-switch-label', {
                            'ku-switch-label-hidden': hideLabel,
                        }, labelClassName), children: label }), description && (_jsx("div", { id: descriptionId, className: "ku-switch-description", children: description }))] }), _jsxs("div", { className: "ku-switch-control", children: [_jsx("input", Object.assign({}, props, { ref: ref, type: "checkbox", role: "switch", id: switchId, checked: checked, disabled: disabled || isLoading, className: "ku-switch-input", "aria-checked": checked, "aria-describedby": ariaDescribedByIds || undefined, "aria-invalid": hasError, tabIndex: 0 })), _jsxs("div", { className: classNames('ku-switch', `ku-switch-${size}`, className), children: [_jsx("div", { className: "ku-switch-thumb", "aria-hidden": "true" }), isLoading && _jsx("div", { className: "ku-switch-loading-indicator" })] })] }), error && (_jsx("div", { id: errorId, className: "ku-switch-error-message", role: "alert", children: error }))] }));
});
Switch.displayName = 'Switch';
//# sourceMappingURL=Switch.js.map