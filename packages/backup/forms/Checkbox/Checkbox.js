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
import React, { forwardRef } from 'react';
import classNames from 'classnames';
import { IconCheck, IconMinus, IconLoader2 } from '@tabler/icons-react';
import './Checkbox.css';
export const Checkbox = forwardRef((_a, ref) => {
    var { label, hideLabel = false, error = false, errorMessage, indeterminate = false, helperText, loading = false, size = 'md', className, id, disabled, checked, defaultChecked, onChange, onKeyDown } = _a, props = __rest(_a, ["label", "hideLabel", "error", "errorMessage", "indeterminate", "helperText", "loading", "size", "className", "id", "disabled", "checked", "defaultChecked", "onChange", "onKeyDown"]);
    const checkboxId = id || `checkbox-${Math.random().toString(36).substr(2, 9)}`;
    const checkboxRef = React.useRef(null);
    // CSS Variables for icon sizing
    const iconStyle = React.useMemo(() => ({
        '--ku-checkbox-current-icon-size': 'var(--ku-checkbox-icon-size)',
        '--ku-checkbox-current-icon-stroke': 'var(--ku-checkbox-icon-stroke-width)'
    }), []);
    // Merge refs
    React.useEffect(() => {
        if (typeof ref === 'function') {
            ref(checkboxRef.current);
        }
        else if (ref) {
            ref.current = checkboxRef.current;
        }
    }, [ref]);
    // Handle indeterminate state
    React.useEffect(() => {
        if (checkboxRef.current) {
            checkboxRef.current.indeterminate = indeterminate;
        }
    }, [indeterminate]);
    const handleChange = (e) => {
        if (!disabled && !loading && onChange) {
            onChange(e);
        }
    };
    const handleKeyDown = (e) => {
        var _a;
        // Handle space and enter keys
        if ((e.key === ' ' || e.key === 'Enter') && !disabled && !loading) {
            e.preventDefault();
            const newEvent = new Event('change', { bubbles: true });
            (_a = checkboxRef.current) === null || _a === void 0 ? void 0 : _a.dispatchEvent(newEvent);
        }
        // Call the original onKeyDown handler if provided
        if (onKeyDown) {
            onKeyDown(e);
        }
    };
    const renderIcon = () => {
        if (loading) {
            return (_jsx(IconLoader2, { className: "ku-checkbox__icon ku-checkbox__icon--loading", "aria-hidden": "true", size: "var(--ku-checkbox-current-icon-size)", strokeWidth: "var(--ku-checkbox-current-icon-stroke)", style: iconStyle }));
        }
        if (indeterminate) {
            return (_jsx(IconMinus, { className: "ku-checkbox__icon", "aria-hidden": "true", size: "var(--ku-checkbox-current-icon-size)", strokeWidth: "var(--ku-checkbox-current-icon-stroke)", style: iconStyle }));
        }
        if (checked) {
            return (_jsx(IconCheck, { className: "ku-checkbox__icon", "aria-hidden": "true", size: "var(--ku-checkbox-current-icon-size)", strokeWidth: "var(--ku-checkbox-current-icon-stroke)", style: iconStyle }));
        }
        return null;
    };
    return (_jsxs("div", { className: classNames('ku-checkbox-wrapper', `ku-checkbox-wrapper--${size}`, {
            'ku-checkbox-wrapper--error': error,
            'ku-checkbox-wrapper--disabled': disabled,
            'ku-checkbox-wrapper--loading': loading,
        }, className), children: [_jsxs("div", { className: "ku-checkbox-container", children: [_jsx("input", Object.assign({}, props, { ref: checkboxRef, type: "checkbox", id: checkboxId, className: "ku-checkbox__input", disabled: disabled || loading, checked: checked, defaultChecked: defaultChecked, onChange: handleChange, onKeyDown: handleKeyDown, "aria-invalid": error, "aria-busy": loading, "aria-describedby": (errorMessage || helperText)
                            ? `${checkboxId}-description`
                            : undefined, "aria-checked": indeterminate ? 'mixed' : checked })), _jsx("div", { className: "ku-checkbox__box", "aria-hidden": "true", role: "presentation", children: renderIcon() }), label && (_jsx("label", { htmlFor: checkboxId, className: classNames('ku-checkbox__label', {
                            'ku-checkbox__label--hidden': hideLabel,
                        }), children: label }))] }), (errorMessage || helperText) && (_jsx("div", { id: `${checkboxId}-description`, className: classNames('ku-checkbox__message', {
                    'ku-checkbox__message--error': error,
                }), role: error ? 'alert' : 'status', children: error ? errorMessage : helperText }))] }));
});
Checkbox.displayName = 'Checkbox';
export default Checkbox;
//# sourceMappingURL=Checkbox.js.map