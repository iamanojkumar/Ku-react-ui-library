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
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import { XIcon } from '@ku-design-system/core';
import './Badge.css';
export const Badge = React.forwardRef((_a, ref) => {
    var { size = 'md', variant = 'solid', color = 'default', children, icon, dismissible = false, onDismiss, empty = false, position, absolute = false, className } = _a, props = __rest(_a, ["size", "variant", "color", "children", "icon", "dismissible", "onDismiss", "empty", "position", "absolute", "className"]);
    const handleDismiss = (e) => {
        e.stopPropagation();
        onDismiss === null || onDismiss === void 0 ? void 0 : onDismiss();
    };
    // Get icon size based on badge size
    const getIconSize = () => {
        switch (size) {
            case 'xs':
                return 10;
            case 'sm':
                return 12;
            case 'lg':
                return 16;
            default: // md
                return 14;
        }
    };
    const classes = [
        'ku-badge',
        `ku-badge--${size}`,
        `ku-badge--${variant}`,
        `ku-badge--${color}`,
        empty && 'ku-badge--empty',
        position && `ku-badge--${position}`,
        absolute && 'ku-badge--absolute',
        className
    ].filter(Boolean).join(' ');
    const renderContent = () => {
        if (empty)
            return null;
        return (_jsxs(_Fragment, { children: [icon && _jsx("span", { className: "ku-badge__icon", children: icon }), children && _jsx("span", { className: "ku-badge__content", children: children }), dismissible && (_jsx("button", { type: "button", className: "ku-badge__dismiss", onClick: handleDismiss, "aria-label": "Dismiss", children: React.createElement(XIcon, {
                        size: getIconSize(),
                        stroke: 2
                    }) }))] }));
    };
    return (_jsx("div", Object.assign({ ref: ref, className: classes }, props, { children: renderContent() })));
});
Badge.displayName = 'Badge';
//# sourceMappingURL=Badge.js.map