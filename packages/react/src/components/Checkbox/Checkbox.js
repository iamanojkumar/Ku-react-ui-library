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
import classNames from 'classnames';
import { CheckIcon, MinusIcon } from '@ku-design-system/core';
import './Checkbox.css';
export const Checkbox = forwardRef((_a, ref) => {
    var { label, hideLabel = false, error = false, errorMessage, indeterminate = false, helperText, className, id, disabled, checked, onChange } = _a, props = __rest(_a, ["label", "hideLabel", "error", "errorMessage", "indeterminate", "helperText", "className", "id", "disabled", "checked", "onChange"]);
    const checkboxId = id || `checkbox-${Math.random().toString(36).substr(2, 9)}`;
    // Handle indeterminate state
    React.useEffect(() => {
        if (ref && 'current' in ref && ref.current) {
            ref.current.indeterminate = indeterminate;
        }
    }, [indeterminate, ref]);
    return (_jsxs("div", { className: classNames('ku-checkbox-wrapper', {
            'ku-checkbox-wrapper--error': error,
            'ku-checkbox-wrapper--disabled': disabled,
        }, className), children: [_jsxs("div", { className: "ku-checkbox-container", children: [_jsx("input", Object.assign({}, props, { ref: ref, type: "checkbox", id: checkboxId, className: "ku-checkbox__input", disabled: disabled, checked: checked, onChange: onChange, "aria-invalid": error, "aria-describedby": (errorMessage || helperText)
                            ? `${checkboxId}-description`
                            : undefined })), _jsx("div", { className: "ku-checkbox__box", "aria-hidden": "true", children: indeterminate ? (React.createElement(MinusIcon, {
                            size: 12,
                            stroke: 2,
                            className: 'ku-checkbox__icon'
                        })) : (React.createElement(CheckIcon, {
                            size: 12,
                            stroke: 2,
                            className: 'ku-checkbox__icon'
                        })) }), label && (_jsx("label", { htmlFor: checkboxId, className: classNames('ku-checkbox__label', {
                            'ku-checkbox__label--hidden': hideLabel,
                        }), children: label }))] }), (errorMessage || helperText) && (_jsx("div", { id: `${checkboxId}-description`, className: classNames('ku-checkbox__message', {
                    'ku-checkbox__message--error': error,
                }), children: error ? errorMessage : helperText }))] }));
});
Checkbox.displayName = 'Checkbox';
export default Checkbox;
//# sourceMappingURL=Checkbox.js.map