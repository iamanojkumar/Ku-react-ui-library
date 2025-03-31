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
import './IconButton.css';
export const IconButton = React.forwardRef((_a, ref) => {
    var { icon, variant = 'default', size = 'md', loading = false, showTooltip = false, tooltipText, className, disabled } = _a, props = __rest(_a, ["icon", "variant", "size", "loading", "showTooltip", "tooltipText", "className", "disabled"]);
    const baseClasses = classNames('ku-icon-button', `ku-icon-button--${variant}`, `ku-icon-button--${size}`, {
        'ku-icon-button--loading': loading,
        'ku-icon-button--disabled': disabled,
    }, className);
    return (_jsxs("button", Object.assign({}, props, { ref: ref, className: baseClasses, disabled: disabled || loading, "aria-label": tooltipText, title: showTooltip ? tooltipText : undefined, type: props.type || 'button', children: [_jsx("span", { className: "ku-icon-button__icon", children: loading ? (_jsx("div", { className: "ku-icon-button__spinner", "aria-hidden": "true" })) : (icon) }), showTooltip && tooltipText && (_jsx("span", { className: "ku-icon-button__tooltip", role: "tooltip", children: tooltipText }))] })));
});
IconButton.displayName = 'IconButton';
//# sourceMappingURL=IconButton.js.map