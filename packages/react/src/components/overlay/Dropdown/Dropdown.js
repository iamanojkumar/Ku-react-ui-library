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
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { ChevronDownIcon } from '@ku-design-system/core';
import { Menu, MenuItem } from '../Menu/Menu';
import classNames from 'classnames';
import './Dropdown.css';
export const Dropdown = React.forwardRef((_a, ref) => {
    var { options, value, onChange, placeholder = 'Select an option', disabled = false, error = false, loading = false, clearable = false, dense = false, className } = _a, props = __rest(_a, ["options", "value", "onChange", "placeholder", "disabled", "error", "loading", "clearable", "dense", "className"]);
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);
    const buttonRef = useRef(null);
    const menuRef = useRef(null);
    const selectedOption = options.find(option => option.value === value);
    const handleToggle = () => {
        if (!disabled && !loading) {
            setIsOpen(!isOpen);
        }
    };
    const handleSelect = (optionValue) => {
        onChange === null || onChange === void 0 ? void 0 : onChange(optionValue);
        setIsOpen(false);
    };
    const handleClear = (event) => {
        event.stopPropagation();
        onChange === null || onChange === void 0 ? void 0 : onChange('');
    };
    const handleClickOutside = useCallback((event) => {
        if (dropdownRef.current &&
            !dropdownRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    }, []);
    useEffect(() => {
        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }
        else {
            document.removeEventListener('mousedown', handleClickOutside);
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen, handleClickOutside]);
    return (_jsxs("div", Object.assign({ ref: dropdownRef, className: classNames('ku-dropdown', className, {
            'ku-dropdown--open': isOpen,
            'ku-dropdown--disabled': disabled,
            'ku-dropdown--error': error,
            'ku-dropdown--loading': loading,
            'ku-dropdown--dense': dense
        }) }, props, { children: [_jsxs("button", { ref: buttonRef, type: "button", className: "ku-dropdown__trigger", onClick: handleToggle, disabled: disabled, "aria-haspopup": "listbox", "aria-expanded": isOpen, children: [_jsx("span", { className: "ku-dropdown__trigger-content", children: selectedOption ? (_jsxs(_Fragment, { children: [selectedOption.leadingIcon && (_jsx("span", { className: "ku-dropdown__leading-icon", children: selectedOption.leadingIcon })), _jsx("span", { className: "ku-dropdown__selected-text", children: selectedOption.label })] })) : (_jsx("span", { className: "ku-dropdown__placeholder", children: placeholder })) }), _jsxs("span", { className: "ku-dropdown__trigger-icons", children: [clearable && selectedOption && (_jsx("button", { type: "button", className: "ku-dropdown__clear-button", onClick: handleClear, "aria-label": "Clear selection", children: "\u00D7" })), _jsx(ChevronDownIcon, { className: "ku-dropdown__chevron", "aria-hidden": "true" })] })] }), isOpen && (_jsx("div", { ref: menuRef, className: "ku-dropdown__menu", role: "listbox", children: _jsx(Menu, { dense: dense, selectedValue: value, onSelect: handleSelect, children: options.map((option) => (_jsx(MenuItem, { value: option.value, disabled: option.disabled, leadingIcon: option.leadingIcon, trailingIcon: option.trailingIcon, subText: option.subText, children: option.label }, option.value))) }) }))] })));
});
Dropdown.displayName = 'Dropdown';
//# sourceMappingURL=Dropdown.js.map