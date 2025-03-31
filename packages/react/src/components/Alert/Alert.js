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
import { InfoCircleIcon, AlertTriangleIcon, CircleCheckIcon, ExclamationCircleIcon, XIcon, } from '@ku-design-system/core';
import './Alert.css';
const variantToIcon = {
    info: InfoCircleIcon,
    success: CircleCheckIcon,
    warning: AlertTriangleIcon,
    error: ExclamationCircleIcon,
};
const Alert = React.forwardRef((_a, ref) => {
    var { variant = 'info', title, icon, dismissible = false, onDismiss, actions, showActions = true, fullWidthOnMobile = true, className, children } = _a, props = __rest(_a, ["variant", "title", "icon", "dismissible", "onDismiss", "actions", "showActions", "fullWidthOnMobile", "className", "children"]);
    const IconComponent = variantToIcon[variant];
    const defaultIcon = React.createElement(IconComponent, { size: 24 });
    return (_jsx("div", Object.assign({ ref: ref, className: classNames('ku-alert', `ku-alert--${variant}`, {
            'ku-alert--full-width-mobile': fullWidthOnMobile,
            'ku-alert--with-title': !!title,
        }, className), role: "alert" }, props, { children: _jsxs("div", { className: "ku-alert-content", children: [_jsx("span", { className: "ku-alert-icon", "aria-hidden": "true", children: icon || defaultIcon }), _jsxs("div", { className: "ku-alert-message", children: [title && (_jsx("div", { className: "ku-alert-title", children: title })), _jsx("div", { className: "ku-alert-description", children: children })] }), actions && showActions && (_jsx("div", { className: "ku-alert-actions", children: actions })), dismissible && (_jsx("button", { type: "button", className: "ku-alert-dismiss", onClick: onDismiss, "aria-label": "Dismiss alert", children: React.createElement(XIcon, { size: 20 }) }))] }) })));
});
Alert.displayName = 'Alert';
export { Alert };
//# sourceMappingURL=Alert.js.map