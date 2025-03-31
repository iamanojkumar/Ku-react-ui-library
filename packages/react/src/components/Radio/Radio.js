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
import React, { forwardRef } from 'react';
import { CircleIcon, CircleDotIcon } from '@ku-design-system/core';
import './Radio.css';
export const Radio = forwardRef((_a, ref) => {
    var { label, description, error, hasError, hideLabel, className, id, disabled, checked } = _a, props = __rest(_a, ["label", "description", "error", "hasError", "hideLabel", "className", "id", "disabled", "checked"]);
    const radioId = id || `radio-${Math.random().toString(36).substr(2, 9)}`;
    const descriptionId = description ? `${radioId}-description` : undefined;
    const errorId = error ? `${radioId}-error` : undefined;
    return (_jsxs("div", { className: [
            'ku-radio',
            disabled && 'ku-radio--disabled',
            hasError && 'ku-radio--error',
            className
        ].filter(Boolean).join(' '), children: [_jsxs("div", { className: "ku-radio__input-wrapper", children: [_jsx("input", Object.assign({}, props, { ref: ref, type: "radio", id: radioId, disabled: disabled, checked: checked, "aria-describedby": [descriptionId, errorId].filter(Boolean).join(' ') || undefined, className: "ku-radio__input" })), _jsx("div", { className: "ku-radio__control", "aria-hidden": "true", children: checked ? _jsx(CircleDotIcon, { size: 16 }) : _jsx(CircleIcon, { size: 16 }) })] }), label && (_jsx("label", { htmlFor: radioId, className: [
                    'ku-radio__label',
                    hideLabel && 'ku-radio__label--hidden'
                ].filter(Boolean).join(' '), children: label })), description && (_jsx("div", { id: descriptionId, className: "ku-radio__description", children: description })), error && (_jsx("div", { id: errorId, className: "ku-radio__error", children: error }))] }));
});
export const RadioGroup = forwardRef((_a, ref) => {
    var { children, name, value, onChange, label, required, error, className } = _a, props = __rest(_a, ["children", "name", "value", "onChange", "label", "required", "error", "className"]);
    const handleChange = (event) => {
        onChange === null || onChange === void 0 ? void 0 : onChange(event.target.value);
    };
    const groupId = `radio-group-${Math.random().toString(36).substr(2, 9)}`;
    const errorId = error ? `${groupId}-error` : undefined;
    return (_jsxs("div", Object.assign({ ref: ref, role: "radiogroup", "aria-labelledby": label ? `${groupId}-label` : undefined, "aria-required": required, "aria-invalid": !!error, "aria-errormessage": errorId, className: [
            'ku-radio-group',
            error && 'ku-radio-group--error',
            className
        ].filter(Boolean).join(' ') }, props, { children: [label && (_jsxs("div", { id: `${groupId}-label`, className: "ku-radio-group__label", children: [label, required && _jsx("span", { className: "ku-radio-group__required", children: "*" })] })), _jsx("div", { className: "ku-radio-group__options", children: React.Children.map(children, child => {
                    if (!React.isValidElement(child))
                        return null;
                    return React.cloneElement(child, {
                        name,
                        checked: value === child.props.value,
                        onChange: handleChange,
                        hasError: !!error,
                    });
                }) }), error && (_jsx("div", { id: errorId, className: "ku-radio-group__error", children: error }))] })));
});
Radio.displayName = 'Radio';
RadioGroup.displayName = 'RadioGroup';
//# sourceMappingURL=Radio.js.map