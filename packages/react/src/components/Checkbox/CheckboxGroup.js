import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import classNames from 'classnames';
import { Checkbox } from './Checkbox';
import './Checkbox.css';
export const CheckboxGroup = ({ name, options, value = [], onChange, label, error = false, errorMessage, helperText, disabled = false, className, }) => {
    const groupId = `checkbox-group-${Math.random().toString(36).substr(2, 9)}`;
    const handleChange = (optionValue, checked) => {
        const newValues = checked
            ? [...value, optionValue]
            : value.filter(v => v !== optionValue);
        onChange(newValues);
    };
    // Calculate indeterminate state for "Select All" checkbox
    const allSelected = options.length > 0 && options.every(opt => value.includes(opt.value));
    const someSelected = options.some(opt => value.includes(opt.value));
    const isIndeterminate = someSelected && !allSelected;
    // Handle "Select All" checkbox
    const handleSelectAll = (checked) => {
        const newValues = checked
            ? options.filter(opt => !opt.disabled).map(opt => opt.value)
            : [];
        onChange(newValues);
    };
    return (_jsxs("div", { className: classNames('ku-checkbox-group', {
            'ku-checkbox-group--error': error,
            'ku-checkbox-group--disabled': disabled,
        }, className), role: "group", "aria-labelledby": label ? `${groupId}-label` : undefined, "aria-describedby": (errorMessage || helperText)
            ? `${groupId}-description`
            : undefined, children: [label && (_jsx("div", { id: `${groupId}-label`, className: "ku-checkbox-group__label", children: label })), options.length > 1 && (_jsx(Checkbox, { label: "Select All", checked: allSelected, indeterminate: isIndeterminate, onChange: (e) => handleSelectAll(e.target.checked), disabled: disabled })), _jsx("div", { className: "ku-checkbox-group__options", children: options.map((option) => (_jsx(Checkbox, { name: name, label: option.label, checked: value.includes(option.value), onChange: (e) => handleChange(option.value, e.target.checked), disabled: disabled || option.disabled }, option.value))) }), (errorMessage || helperText) && (_jsx("div", { id: `${groupId}-description`, className: classNames('ku-checkbox-group__message', {
                    'ku-checkbox-group__message--error': error,
                }), children: error ? errorMessage : helperText }))] }));
};
CheckboxGroup.displayName = 'CheckboxGroup';
export default CheckboxGroup;
//# sourceMappingURL=CheckboxGroup.js.map