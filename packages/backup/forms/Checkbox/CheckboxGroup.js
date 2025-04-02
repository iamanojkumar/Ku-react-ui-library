import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import classNames from 'classnames';
import { Checkbox } from './Checkbox';
import './Checkbox.css';
export const CheckboxGroup = ({ name, label, options, value = [], onChange, error = false, errorMessage, helperText, disabled = false, className, }) => {
    const [selectAllChecked, setSelectAllChecked] = React.useState(false);
    const [isIndeterminate, setIsIndeterminate] = React.useState(false);
    // Update select all state when values change
    React.useEffect(() => {
        const enabledOptions = options.filter(opt => !opt.disabled);
        const selectedEnabledCount = value.filter(v => enabledOptions.some(opt => opt.value === v)).length;
        setSelectAllChecked(selectedEnabledCount === enabledOptions.length && enabledOptions.length > 0);
        setIsIndeterminate(selectedEnabledCount > 0 && selectedEnabledCount < enabledOptions.length);
    }, [value, options]);
    const handleSelectAll = (checked) => {
        if (disabled)
            return;
        const newValues = checked
            ? options
                .filter(opt => !opt.disabled)
                .map(opt => opt.value)
            : [];
        onChange(newValues);
    };
    const handleOptionChange = (optionValue, checked) => {
        if (disabled)
            return;
        const newValues = checked
            ? [...value, optionValue]
            : value.filter(v => v !== optionValue);
        onChange(newValues);
    };
    return (_jsxs("div", { className: classNames('ku-checkbox-group', {
            'ku-checkbox-group--error': error,
            'ku-checkbox-group--disabled': disabled,
        }, className), role: "group", "aria-labelledby": `${name}-group-label`, children: [_jsx("div", { id: `${name}-group-label`, className: "ku-checkbox-group__label", children: label }), _jsxs("div", { className: "ku-checkbox-group__options", children: [options.length > 1 && (_jsx(Checkbox, { label: "Select All", checked: selectAllChecked, indeterminate: isIndeterminate, onChange: (e) => handleSelectAll(e.target.checked), disabled: disabled, error: error })), options.map((option) => (_jsx(Checkbox, { name: name, label: option.label, checked: value.includes(option.value), onChange: (e) => handleOptionChange(option.value, e.target.checked), disabled: disabled || option.disabled, error: error }, option.value)))] }), (errorMessage || helperText) && (_jsx("div", { className: classNames('ku-checkbox-group__message', {
                    'ku-checkbox-group__message--error': error,
                }), role: error ? 'alert' : 'status', children: error ? errorMessage : helperText }))] }));
};
export default CheckboxGroup;
//# sourceMappingURL=CheckboxGroup.js.map