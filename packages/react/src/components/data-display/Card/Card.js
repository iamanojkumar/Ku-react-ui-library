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
import classNames from 'classnames';
import './Card.css';
export const Card = (_a) => {
    var { variant = 'elevated', clickable = false, disabled = false, media, actions, className, children, onClick } = _a, props = __rest(_a, ["variant", "clickable", "disabled", "media", "actions", "className", "children", "onClick"]);
    const handleClick = (e) => {
        if (disabled)
            return;
        onClick === null || onClick === void 0 ? void 0 : onClick(e);
    };
    return (_jsxs("div", Object.assign({ className: classNames('ku-card', `ku-card--${variant}`, {
            'ku-card--clickable': clickable && !disabled,
            'ku-card--disabled': disabled,
        }, className), onClick: handleClick, role: clickable ? 'button' : undefined, tabIndex: clickable ? 0 : undefined, "aria-disabled": disabled }, props, { children: [media && (_jsx("div", { className: "ku-card__media", children: media })), _jsx("div", { className: "ku-card__content", children: children }), actions && (_jsx("div", { className: "ku-card__actions", children: actions }))] })));
};
Card.displayName = 'Card';
export default Card;
//# sourceMappingURL=Card.js.map