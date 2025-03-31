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
import React, { createContext, useContext } from 'react';
import { ListItem } from '../ListItem/ListItem';
import classNames from 'classnames';
import './Menu.css';
const MenuContext = createContext({});
export const Menu = React.forwardRef((_a, ref) => {
    var { children, className, onSelect, selectedValue, dense = false } = _a, props = __rest(_a, ["children", "className", "onSelect", "selectedValue", "dense"]);
    return (_jsx(MenuContext.Provider, { value: { onSelect, selectedValue }, children: _jsx("div", Object.assign({ ref: ref, role: "menu", className: classNames('ku-menu', className, {
                'ku-menu--dense': dense
            }) }, props, { children: children })) }));
});
export const MenuItem = React.forwardRef((_a, ref) => {
    var { children, className, value, leadingIcon, trailingIcon, subText, disabled, loading, shortcutText, onClick } = _a, props = __rest(_a, ["children", "className", "value", "leadingIcon", "trailingIcon", "subText", "disabled", "loading", "shortcutText", "onClick"]);
    const { onSelect, selectedValue } = useContext(MenuContext);
    const isSelected = selectedValue === value;
    const handleClick = () => {
        if (!disabled && !loading) {
            onSelect === null || onSelect === void 0 ? void 0 : onSelect(value);
            onClick === null || onClick === void 0 ? void 0 : onClick();
        }
    };
    return (_jsx(ListItem, Object.assign({ ref: ref, role: "menuitem", className: classNames('ku-menu-item', className), onClick: handleClick, selected: isSelected, disabled: disabled, loading: loading, leadingIcon: leadingIcon, trailingIcon: _jsxs(_Fragment, { children: [shortcutText && (_jsx("span", { className: "ku-menu-item__shortcut", children: shortcutText })), trailingIcon] }), showLeadingIcon: !!leadingIcon, showTrailingIcon1: !!(shortcutText || trailingIcon), subText: subText, showSubText: !!subText, clickable: true }, props, { children: children })));
});
Menu.displayName = 'Menu';
MenuItem.displayName = 'MenuItem';
//# sourceMappingURL=Menu.js.map