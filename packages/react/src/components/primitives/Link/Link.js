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
import './Link.css';
export const Link = forwardRef((_a, ref) => {
    var { children, icon: Icon, trailingIcon: TrailingIcon, variant = 'default', disabled = false, external = false, className = '', href, onClick, target, rel } = _a, props = __rest(_a, ["children", "icon", "trailingIcon", "variant", "disabled", "external", "className", "href", "onClick", "target", "rel"]);
    // Handle external link attributes
    const externalProps = external
        ? {
            target: target || '_blank',
            rel: rel || 'noopener noreferrer',
        }
        : {};
    // Handle disabled state
    const handleClick = (e) => {
        if (disabled) {
            e.preventDefault();
            return;
        }
        onClick === null || onClick === void 0 ? void 0 : onClick(e);
    };
    // Determine if the link should use button role
    const isButton = !href && onClick;
    return (_jsxs("a", Object.assign({ ref: ref, className: `ku-link ku-link--${variant} ${disabled ? 'ku-link--disabled' : ''} ${className}`, href: disabled ? undefined : href, onClick: handleClick, "aria-disabled": disabled, role: isButton ? 'button' : undefined, tabIndex: disabled ? -1 : 0 }, externalProps, props, { children: [Icon && (_jsx("span", { className: "ku-link__icon ku-link__icon--leading", "aria-hidden": "true", children: _jsx(Icon, { size: 16 }) })), _jsx("span", { className: "ku-link__text", children: children }), TrailingIcon && (_jsx("span", { className: "ku-link__icon ku-link__icon--trailing", "aria-hidden": "true", children: _jsx(TrailingIcon, { size: 16 }) }))] })));
});
Link.displayName = 'Link';
//# sourceMappingURL=Link.js.map