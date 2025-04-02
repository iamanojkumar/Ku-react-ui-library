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
import { useState, forwardRef } from 'react';
import { IconEye, IconEyeOff } from '@tabler/icons-react';
import { classNames } from '../../../utils/classNames';
import './TextField.css';
export const TextField = forwardRef((_a, ref) => {
    var { label, labelIcon, helperText, error, size = 'md', variant = 'outlined', startIcon, endIcon, prefix, suffix, actionButton, showPasswordToggle, hasLeadingIcon, hasTrailingIcon, wrapperClassName, labelClassName, inputClassName, helperClassName, errorClassName, type, className } = _a, props = __rest(_a, ["label", "labelIcon", "helperText", "error", "size", "variant", "startIcon", "endIcon", "prefix", "suffix", "actionButton", "showPasswordToggle", "hasLeadingIcon", "hasTrailingIcon", "wrapperClassName", "labelClassName", "inputClassName", "helperClassName", "errorClassName", "type", "className"]);
    const [showPassword, setShowPassword] = useState(false);
    const handleTogglePassword = () => {
        setShowPassword(prev => !prev);
    };
    const passwordIcon = showPassword ? (_jsx(IconEye, { size: 20, stroke: 1.5 })) : (_jsx(IconEyeOff, { size: 20, stroke: 1.5 }));
    const inputType = type === 'password' && showPassword ? 'text' : type;
    const renderEndIcon = () => {
        if (type === 'password' && showPasswordToggle) {
            return (_jsx("button", { type: "button", onClick: handleTogglePassword, className: "ku-textfield-password-toggle", "aria-label": showPassword ? 'Hide password' : 'Show password', children: passwordIcon }));
        }
        return endIcon;
    };
    return (_jsxs("div", { className: classNames('ku-textfield-wrapper', `ku-textfield-${variant}`, `ku-textfield-${size}`, {
            'ku-textfield-disabled': props.disabled,
            'ku-textfield-error': error,
            'ku-textfield-with-start-icon': startIcon || hasLeadingIcon,
            'ku-textfield-with-end-icon': endIcon || hasTrailingIcon,
            'ku-textfield-with-prefix': prefix,
            'ku-textfield-with-suffix': suffix,
            'ku-textfield-with-action': actionButton,
            'ku-textfield-with-password-toggle': type === 'password' && showPasswordToggle,
        }, wrapperClassName), children: [label && (_jsxs("label", { className: classNames('ku-textfield-label', {
                    'ku-textfield-label-with-icon': labelIcon,
                }, labelClassName), children: [label, labelIcon && _jsx("span", { className: "ku-textfield-label-icon", children: labelIcon })] })), _jsxs("div", { className: "ku-textfield-input-wrapper", children: [prefix && _jsx("span", { className: "ku-textfield-prefix", children: prefix }), startIcon && _jsx("span", { className: "ku-textfield-start-icon", children: startIcon }), _jsx("input", Object.assign({}, props, { ref: ref, type: inputType, className: classNames('ku-textfield-input', inputClassName, className) })), endIcon && _jsx("span", { className: "ku-textfield-end-icon", children: endIcon }), type === 'password' && showPasswordToggle && (_jsx("button", { type: "button", onClick: handleTogglePassword, className: "ku-textfield-password-toggle", "aria-label": showPassword ? 'Hide password' : 'Show password', children: passwordIcon })), suffix && _jsx("span", { className: "ku-textfield-suffix", children: suffix }), actionButton && (_jsx("span", { className: "ku-textfield-action", children: actionButton }))] }), helperText && !error && (_jsx("span", { className: classNames('ku-textfield-helper', helperClassName), children: helperText })), error && (_jsx("span", { className: classNames('ku-textfield-error-text', errorClassName), children: error }))] }));
});
TextField.displayName = 'TextField';
//# sourceMappingURL=TextField.js.map