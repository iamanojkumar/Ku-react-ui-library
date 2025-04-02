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
import { forwardRef, useState, useRef, useEffect } from 'react';
import { ChevronDownIcon, ExclamationCircleIcon } from '@ku-design-system/core';
import { Menu, MenuItem } from '../Menu/Menu';
import { Badge } from '../Badge/Badge';
import './ComboSelect.css';
export const ComboSelect = forwardRef((_a, ref) => {
    var { options, label, helperText, error, hasError, hideLabel, icon, prefix, className, id, disabled, placeholder, required, isMulti = false, value, onChange, 'aria-label': ariaLabel } = _a, props = __rest(_a, ["options", "label", "helperText", "error", "hasError", "hideLabel", "icon", "prefix", "className", "id", "disabled", "placeholder", "required", "isMulti", "value", "onChange", 'aria-label']);
    const [isOpen, setIsOpen] = useState(false);
    const [searchValue, setSearchValue] = useState('');
    const [selectedValues, setSelectedValues] = useState(isMulti ? (Array.isArray(value) ? value : []) : (value ? [value] : []));
    const containerRef = useRef(null);
    const inputRef = useRef(null);
    const selectId = id || `select-${Math.random().toString(36).substr(2, 9)}`;
    const helperId = helperText ? `${selectId}-helper` : undefined;
    const errorId = error ? `${selectId}-error` : undefined;
    const describedBy = [helperId, errorId].filter(Boolean).join(' ') || undefined;
    // Filter options based on search value
    const filteredOptions = options.filter(option => option.label.toLowerCase().includes(searchValue.toLowerCase()));
    // Handle click outside to close menu
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (containerRef.current && !containerRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);
    // Handle option selection
    const handleSelect = (optionValue) => {
        if (isMulti) {
            const newValues = selectedValues.includes(optionValue)
                ? selectedValues.filter(v => v !== optionValue)
                : [...selectedValues, optionValue];
            setSelectedValues(newValues);
            onChange === null || onChange === void 0 ? void 0 : onChange(newValues);
        }
        else {
            setSelectedValues([optionValue]);
            onChange === null || onChange === void 0 ? void 0 : onChange(optionValue);
            setIsOpen(false);
        }
        setSearchValue('');
    };
    // Remove selected value (for multi-select)
    const handleRemoveValue = (valueToRemove) => {
        const newValues = selectedValues.filter(v => v !== valueToRemove);
        setSelectedValues(newValues);
        onChange === null || onChange === void 0 ? void 0 : onChange(newValues);
    };
    // Get display value for input
    const getDisplayValue = () => {
        if (searchValue)
            return searchValue;
        if (!isMulti) {
            const selectedOption = options.find(opt => opt.value === selectedValues[0]);
            return (selectedOption === null || selectedOption === void 0 ? void 0 : selectedOption.label) || '';
        }
        return '';
    };
    return (_jsxs("div", { ref: containerRef, className: [
            'ku-combo-select',
            disabled && 'ku-combo-select--disabled',
            hasError && 'ku-combo-select--error',
            icon && 'ku-combo-select--has-icon',
            prefix && 'ku-combo-select--has-prefix',
            isOpen && 'ku-combo-select--open',
            className
        ].filter(Boolean).join(' '), children: [label && (_jsx("label", { htmlFor: selectId, className: [
                    'ku-combo-select__label',
                    hideLabel && 'ku-combo-select__label--hidden',
                    required && 'ku-combo-select__label--required'
                ].filter(Boolean).join(' '), children: label })), _jsxs("div", { className: "ku-combo-select__input-wrapper", children: [icon && (_jsx("div", { className: "ku-combo-select__icon", "aria-hidden": "true", children: icon })), prefix && (_jsx("div", { className: "ku-combo-select__prefix", "aria-hidden": "true", children: prefix })), _jsxs("div", { className: "ku-combo-select__values", children: [isMulti && selectedValues.map(val => {
                                const option = options.find(opt => opt.value === val);
                                if (!option)
                                    return null;
                                return (_jsx(Badge, { size: "sm", variant: "subtle", color: "default", dismissible: true, onDismiss: () => handleRemoveValue(val), children: option.label }, val));
                            }), _jsx("input", Object.assign({}, props, { ref: inputRef, type: "text", id: selectId, disabled: disabled, value: getDisplayValue(), onChange: (e) => {
                                    setSearchValue(e.target.value);
                                    setIsOpen(true);
                                }, onFocus: () => setIsOpen(true), placeholder: selectedValues.length === 0 ? placeholder : '', "aria-invalid": hasError, "aria-describedby": describedBy, "aria-label": hideLabel ? label || ariaLabel : ariaLabel, "aria-expanded": isOpen, "aria-controls": `${selectId}-menu`, "aria-haspopup": "listbox", role: "combobox", className: "ku-combo-select__input" }))] }), _jsx("div", { className: "ku-combo-select__chevron", "aria-hidden": "true", children: ChevronDownIcon({ size: 16 }) }), hasError && (_jsx("div", { className: "ku-combo-select__error-icon", "aria-hidden": "true", children: ExclamationCircleIcon({ size: 16 }) }))] }), isOpen && (_jsx("div", { className: "ku-combo-select__menu-container", children: _jsxs(Menu, { id: `${selectId}-menu`, role: "listbox", "aria-multiselectable": isMulti, children: [filteredOptions.map(option => (_jsxs(MenuItem, { value: option.value, disabled: option.disabled, leadingIcon: option.icon, role: "option", "aria-selected": selectedValues.includes(option.value), onClick: () => handleSelect(option.value), children: [option.prefix && (_jsx("span", { className: "ku-combo-select__option-prefix", children: option.prefix })), option.label] }, option.value))), filteredOptions.length === 0 && (_jsx(MenuItem, { value: "no-results", disabled: true, children: "No results found" }))] }) })), helperText && (_jsx("div", { id: helperId, className: "ku-combo-select__helper", children: helperText })), error && (_jsx("div", { id: errorId, className: "ku-combo-select__error", children: error }))] }));
});
ComboSelect.displayName = 'ComboSelect';
//# sourceMappingURL=ComboSelect.js.map