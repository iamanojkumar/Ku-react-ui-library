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
import { ChevronDownIcon, ExclamationCircleIcon } from '@ku-design-system/core';
import './Select.css';
export const Select = forwardRef((_a, ref) => {
    var { options, label, helperText, error, hasError, hideLabel, icon, prefix, className, id, disabled, placeholder, required, 'aria-label': ariaLabel } = _a, props = __rest(_a, ["options", "label", "helperText", "error", "hasError", "hideLabel", "icon", "prefix", "className", "id", "disabled", "placeholder", "required", 'aria-label']);
    const selectId = id || `select-${Math.random().toString(36).substr(2, 9)}`;
    const helperId = helperText ? `${selectId}-helper` : undefined;
    const errorId = error ? `${selectId}-error` : undefined;
    const describedBy = [helperId, errorId].filter(Boolean).join(' ') || undefined;
    return (_jsxs("div", { className: [
            'ku-select',
            disabled && 'ku-select--disabled',
            hasError && 'ku-select--error',
            icon && 'ku-select--has-icon',
            prefix && 'ku-select--has-prefix',
            className
        ].filter(Boolean).join(' '), children: [label && (_jsx("label", { htmlFor: selectId, className: [
                    'ku-select__label',
                    hideLabel && 'ku-select__label--hidden',
                    required && 'ku-select__label--required'
                ].filter(Boolean).join(' '), children: label })), _jsxs("div", { className: "ku-select__input-wrapper", children: [icon && (_jsx("div", { className: "ku-select__icon", "aria-hidden": "true", children: icon })), prefix && (_jsx("div", { className: "ku-select__prefix", "aria-hidden": "true", children: prefix })), _jsxs("select", Object.assign({}, props, { ref: ref, id: selectId, disabled: disabled, "aria-invalid": hasError, "aria-describedby": describedBy, "aria-label": hideLabel ? label || ariaLabel : ariaLabel, required: required, className: "ku-select__input", children: [placeholder && (_jsx("option", { value: "", disabled: required, children: placeholder })), options.map((option) => (_jsx("option", { value: option.value, disabled: option.disabled, children: option.label }, option.value)))] })), _jsx("div", { className: "ku-select__chevron", "aria-hidden": "true", children: ChevronDownIcon({ size: 16 }) }), hasError && (_jsx("div", { className: "ku-select__error-icon", "aria-hidden": "true", children: ExclamationCircleIcon({ size: 16 }) }))] }), helperText && (_jsx("div", { id: helperId, className: "ku-select__helper", children: helperText })), error && (_jsx("div", { id: errorId, className: "ku-select__error", children: error }))] }));
});
Select.displayName = 'Select';
//# sourceMappingURL=Select.js.map