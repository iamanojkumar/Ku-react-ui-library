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
import './ListItem.css';
export const ListItem = React.forwardRef((_a, ref) => {
    var { children, subText, showSubText = false, leadingIcon, showLeadingIcon = false, trailingIcon1, showTrailingIcon1 = false, trailingIcon2, showTrailingIcon2 = false, showCheckbox = false, checked = false, selected = false, disabled = false, loading = false, clickable = false, className = '', onClick } = _a, props = __rest(_a, ["children", "subText", "showSubText", "leadingIcon", "showLeadingIcon", "trailingIcon1", "showTrailingIcon1", "trailingIcon2", "showTrailingIcon2", "showCheckbox", "checked", "selected", "disabled", "loading", "clickable", "className", "onClick"]);
    const baseClasses = [
        'ku-list-item',
        clickable && 'ku-list-item--clickable',
        selected && 'ku-list-item--selected',
        disabled && 'ku-list-item--disabled',
        loading && 'ku-list-item--loading',
        className,
    ].filter(Boolean).join(' ');
    const handleKeyDown = (event) => {
        if (disabled || loading)
            return;
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            onClick === null || onClick === void 0 ? void 0 : onClick();
        }
    };
    return (_jsxs("div", Object.assign({}, props, { ref: ref, className: baseClasses, onClick: disabled || loading ? undefined : onClick, onKeyDown: handleKeyDown, role: clickable ? 'button' : 'listitem', tabIndex: clickable && !disabled && !loading ? 0 : undefined, "aria-disabled": disabled, "aria-selected": selected, "aria-busy": loading, children: [_jsxs("div", { className: "ku-list-item__content", children: [showCheckbox && (_jsx("div", { className: "ku-list-item__checkbox", children: _jsx("input", { type: "checkbox", checked: checked, disabled: disabled || loading, onChange: () => { }, "aria-label": "List item checkbox" }) })), showLeadingIcon && leadingIcon && (_jsx("div", { className: "ku-list-item__leading-icon", children: leadingIcon })), _jsxs("div", { className: "ku-list-item__text", children: [_jsx("div", { className: "ku-list-item__primary-text", children: children }), showSubText && subText && (_jsx("div", { className: "ku-list-item__sub-text", children: subText }))] }), showTrailingIcon1 && trailingIcon1 && (_jsx("div", { className: "ku-list-item__trailing-icon", children: trailingIcon1 })), showTrailingIcon2 && trailingIcon2 && (_jsx("div", { className: "ku-list-item__trailing-icon", children: trailingIcon2 }))] }), loading && (_jsx("div", { className: "ku-list-item__loading-indicator", "aria-hidden": "true", children: _jsx("div", { className: "ku-list-item__loading-spinner" }) }))] })));
});
ListItem.displayName = 'ListItem';
//# sourceMappingURL=ListItem.js.map