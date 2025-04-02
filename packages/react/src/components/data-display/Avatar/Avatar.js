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
import { jsx as _jsx } from "react/jsx-runtime";
import React from 'react';
import { UserIcon } from '@ku-design-system/core';
import './Avatar.css';
export const Avatar = React.forwardRef((_a, ref) => {
    var { size = 'md', shape = 'circle', color = 'default', src, alt, fallback, initials, grouped = false, borderColor, className } = _a, props = __rest(_a, ["size", "shape", "color", "src", "alt", "fallback", "initials", "grouped", "borderColor", "className"]);
    const [error, setError] = React.useState(false);
    const hasImage = src && !error;
    const handleError = () => {
        setError(true);
    };
    // Get icon size based on avatar size
    const getIconSize = () => {
        switch (size) {
            case 'xs':
                return 16;
            case 'sm':
                return 20;
            case 'lg':
                return 32;
            case 'xl':
                return 40;
            default: // md
                return 24;
        }
    };
    const renderContent = () => {
        if (hasImage) {
            return (_jsx("img", { src: src, alt: alt, className: "ku-avatar__image", onError: handleError }));
        }
        if (fallback) {
            return _jsx("div", { className: "ku-avatar__fallback", children: fallback });
        }
        if (initials) {
            return _jsx("div", { className: "ku-avatar__initials", children: initials });
        }
        // Default fallback using UserIcon from core library
        return (_jsx("div", { className: "ku-avatar__fallback", children: React.createElement(UserIcon, {
                size: getIconSize(),
                stroke: 2
            }) }));
    };
    const classes = [
        'ku-avatar',
        `ku-avatar--${size}`,
        `ku-avatar--${shape}`,
        `ku-avatar--${color}`,
        grouped && 'ku-avatar--grouped',
        className
    ].filter(Boolean).join(' ');
    const style = borderColor ? { '--ku-avatar-border-color': borderColor } : undefined;
    return (_jsx("div", Object.assign({ ref: ref, className: classes, style: style, role: alt ? 'img' : undefined, "aria-label": alt }, props, { children: renderContent() })));
});
Avatar.displayName = 'Avatar';
//# sourceMappingURL=Avatar.js.map