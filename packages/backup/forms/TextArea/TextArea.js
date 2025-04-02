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
import React, { useEffect, useRef } from 'react';
const TextArea = React.forwardRef((_a, ref) => {
    var { label, error, helperText, size = 'md', variant = 'outlined', disabled = false, className = '', id, ariaLabel, placeholder, maxHeight, onChange, value, defaultValue } = _a, props = __rest(_a, ["label", "error", "helperText", "size", "variant", "disabled", "className", "id", "ariaLabel", "placeholder", "maxHeight", "onChange", "value", "defaultValue"]);
    const textareaRef = useRef(null);
    const combinedRef = (node) => {
        textareaRef.current = node;
        if (typeof ref === 'function') {
            ref(node);
        }
        else if (ref) {
            ref.current = node;
        }
    };
    const adjustHeight = () => {
        const textarea = textareaRef.current;
        if (!textarea)
            return;
        // Reset height to auto to get the correct scrollHeight
        textarea.style.height = 'auto';
        // Calculate new height
        const newHeight = textarea.scrollHeight;
        // Apply maxHeight if specified and content exceeds it
        if (maxHeight) {
            const maxHeightValue = parseInt(maxHeight);
            textarea.style.height = `${Math.min(newHeight, maxHeightValue)}px`;
            textarea.style.overflowY = newHeight > maxHeightValue ? 'auto' : 'hidden';
        }
        else {
            textarea.style.height = `${newHeight}px`;
            textarea.style.overflowY = 'hidden';
        }
    };
    // Adjust height on mount and when content changes
    useEffect(() => {
        adjustHeight();
    }, [value, defaultValue]);
    const handleChange = (e) => {
        adjustHeight();
        onChange === null || onChange === void 0 ? void 0 : onChange(e);
    };
    const textareaId = id || `textarea-${Math.random().toString(36).substr(2, 9)}`;
    const helperTextId = `${textareaId}-helper`;
    const errorId = `${textareaId}-error`;
    return (_jsxs("div", { className: "ku-textarea-wrapper", children: [label && (_jsx("label", { htmlFor: textareaId, className: `ku-textarea-label ${disabled ? 'ku-textarea-label--disabled' : ''}`, children: label })), _jsx("div", { className: `ku-textarea-field ku-textarea-field--${variant}`, children: _jsx("textarea", Object.assign({ ref: combinedRef, id: textareaId, className: `ku-textarea ku-textarea--${variant} ku-textarea--${size} ${error ? 'ku-textarea--error' : ''} ${disabled ? 'ku-textarea--disabled' : ''} ${className}`, "aria-label": !label ? ariaLabel : undefined, "aria-invalid": !!error, "aria-describedby": `${helperText ? helperTextId : ''} ${error ? errorId : ''}`, disabled: disabled, placeholder: placeholder, onChange: handleChange, value: value, defaultValue: defaultValue, style: { maxHeight: maxHeight } }, props)) }), helperText && !error && (_jsx("span", { id: helperTextId, className: "ku-textarea-helper", children: helperText })), error && (_jsx("span", { id: errorId, className: "ku-textarea-error", children: error }))] }));
});
TextArea.displayName = 'TextArea';
export { TextArea };
//# sourceMappingURL=TextArea.js.map