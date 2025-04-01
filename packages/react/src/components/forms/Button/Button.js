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
import React from 'react';
import classNames from 'classnames';
import { RefreshIcon } from '@ku-design-system/core';
import './Button.css';
export const Button = React.forwardRef((_a, ref) => {
    var { variant = 'primary', size = 'md', isLoading = false, leftIcon, rightIcon, className, children, disabled, fullWidth = false, loadingText = 'Loading, please wait', spinnerInButton = true } = _a, props = __rest(_a, ["variant", "size", "isLoading", "leftIcon", "rightIcon", "className", "children", "disabled", "fullWidth", "loadingText", "spinnerInButton"]);
    // For screen readers to announce the loading state
    const ariaProps = isLoading ? {
        'aria-busy': true,
        'aria-label': loadingText,
        role: 'status',
    } : {};
    // Get spinner size based on button size
    const getSpinnerSize = () => {
        switch (size) {
            case 'sm':
                return 16;
            case 'lg':
                return 24;
            default:
                return 20;
        }
    };
    return (_jsxs("button", Object.assign({ ref: ref, className: classNames('ku-button', `ku-button--${variant}`, `ku-button--${size}`, {
            'ku-button--loading': isLoading && spinnerInButton,
            'ku-button--full-width': fullWidth,
        }, className), disabled: disabled || isLoading }, ariaProps, props, { children: [isLoading && spinnerInButton && (_jsx("span", { className: "ku-button__loader", "aria-hidden": "true", children: React.createElement(RefreshIcon, {
                    className: "ku-button__loader-svg",
                    size: getSpinnerSize(),
                    stroke: 2
                }) })), !isLoading && leftIcon && (_jsx("span", { className: "ku-button__icon ku-button__icon--left", "aria-hidden": "true", children: leftIcon })), _jsx("span", { className: "ku-button__content", children: children }), !isLoading && rightIcon && (_jsx("span", { className: "ku-button__icon ku-button__icon--right", "aria-hidden": "true", children: rightIcon }))] })));
});
Button.displayName = 'Button';
export default Button;
//# sourceMappingURL=Button.js.map