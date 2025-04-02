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
import './Button.css';
export const Button = React.forwardRef((_a, ref) => {
    var { variant = 'primary', size = 'md', isLoading = false, leftIcon, rightIcon, fullWidth = false, children, className, disabled, loadingText = 'Loading, please wait', spinnerInButton = true, badge, counter, isPressed = false } = _a, props = __rest(_a, ["variant", "size", "isLoading", "leftIcon", "rightIcon", "fullWidth", "children", "className", "disabled", "loadingText", "spinnerInButton", "badge", "counter", "isPressed"]);
    const buttonClasses = classNames('ku-button', `ku-button--${variant}`, `ku-button--${size}`, {
        'ku-button--loading': isLoading && spinnerInButton,
        'ku-button--full-width': fullWidth,
    }, className);
    // For screen readers to announce the loading state
    const ariaProps = Object.assign(Object.assign({}, (isLoading ? {
        'aria-busy': true,
        'aria-label': loadingText,
        role: 'status',
    } : {})), (isPressed !== undefined ? {
        'aria-pressed': isPressed,
    } : {}));
    return (_jsxs("button", Object.assign({ ref: ref, className: buttonClasses, disabled: disabled || isLoading }, ariaProps, props, { children: [badge && (_jsx("span", { className: "ku-button__badge", children: badge })), isLoading && spinnerInButton && (_jsx("span", { className: "ku-button__loader", "aria-hidden": "true", children: _jsx("svg", { className: "ku-button__loader-svg", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: _jsx("circle", { className: "ku-button__loader-circle", cx: "12", cy: "12", r: "10", stroke: "currentColor", strokeWidth: "var(--ku-button-loading-spinner-width)", strokeLinecap: "round" }) }) })), !isLoading && leftIcon && (_jsx("span", { className: "ku-button__icon ku-button__icon--left", "aria-hidden": "true", children: leftIcon })), _jsxs("span", { className: "ku-button__content", children: [children, counter !== undefined && (_jsx("span", { className: "ku-button__counter", children: counter }))] }), !isLoading && rightIcon && (_jsx("span", { className: "ku-button__icon ku-button__icon--right", "aria-hidden": "true", children: rightIcon }))] })));
});
Button.displayName = 'Button';
export default Button;
//# sourceMappingURL=Button.js.map