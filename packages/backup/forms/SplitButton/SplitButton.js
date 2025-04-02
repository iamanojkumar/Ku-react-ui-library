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
import React, { useState, useRef } from 'react';
import { Button } from '../Button/Button';
import { Menu, MenuItem } from '../../navigation/Menu/Menu';
import { ChevronDownIcon } from '@ku-design-system/core';
import classNames from 'classnames';
import './SplitButton.css';
export const SplitButton = React.forwardRef((_a, ref) => {
    var { children, onClick, options, variant = 'primary', size = 'md', disabled = false, className, open: controlledOpen, onOpenChange } = _a, props = __rest(_a, ["children", "onClick", "options", "variant", "size", "disabled", "className", "open", "onOpenChange"]);
    const [uncontrolledOpen, setUncontrolledOpen] = useState(false);
    const menuRef = useRef(null);
    const triggerRef = useRef(null);
    const isOpen = controlledOpen !== null && controlledOpen !== void 0 ? controlledOpen : uncontrolledOpen;
    const setIsOpen = (newOpen) => {
        setUncontrolledOpen(newOpen);
        onOpenChange === null || onOpenChange === void 0 ? void 0 : onOpenChange(newOpen);
    };
    // Close menu when clicking outside
    React.useEffect(() => {
        const handleClickOutside = (event) => {
            var _a;
            if (isOpen &&
                menuRef.current &&
                !menuRef.current.contains(event.target) &&
                !((_a = triggerRef.current) === null || _a === void 0 ? void 0 : _a.contains(event.target))) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isOpen]);
    return (_jsxs("div", { ref: ref, className: classNames('ku-split-button', `ku-split-button--${variant}`, `ku-split-button--${size}`, className), children: [_jsx(Button, Object.assign({ variant: variant, size: size, disabled: disabled, onClick: onClick, className: "ku-split-button__main" }, props, { children: children })), _jsx(Button, { ref: triggerRef, variant: variant, size: size, disabled: disabled, onClick: () => setIsOpen(!isOpen), className: "ku-split-button__trigger", "aria-expanded": isOpen, "aria-haspopup": "true", children: _jsx(ChevronDownIcon, { size: 16 }) }), isOpen && (_jsx("div", { ref: menuRef, className: "ku-split-button__menu", children: _jsx(Menu, { children: options.map((option, index) => (_jsx(MenuItem, { value: option.value, leadingIcon: option.leadingIcon, trailingIcon: option.trailingIcon, disabled: option.disabled, onClick: () => {
                            option.onClick();
                            setIsOpen(false);
                        }, children: option.label }, index))) }) }))] }));
});
SplitButton.displayName = 'SplitButton';
//# sourceMappingURL=SplitButton.js.map