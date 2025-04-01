import { jsx as _jsx } from "react/jsx-runtime";
import React from 'react';
import './Divider.css';
/**
 * Divider component for visual content separation
 */
export const Divider = React.forwardRef(({ orientation = 'horizontal', decorative = true, label, className = '', style, as: Component = 'hr', }, ref) => {
    // If there's a label, the divider is not decorative
    const isDecorative = label ? false : decorative;
    const classes = [
        'ku-divider',
        `ku-divider--${orientation}`,
        label && 'ku-divider--with-label',
        className,
    ]
        .filter(Boolean)
        .join(' ');
    // Determine appropriate ARIA attributes
    const ariaProps = isDecorative
        ? {
            'aria-hidden': 'true',
            role: undefined,
        }
        : {
            role: 'separator',
            'aria-orientation': orientation,
        };
    // For vertical dividers or when there's a label, we need to use a div
    const ElementType = orientation === 'vertical' || label ? 'div' : Component;
    return React.createElement(ElementType, Object.assign({ ref, className: classes, style }, ariaProps), label && (_jsx("div", { className: "ku-divider__label-container", children: _jsx("span", { className: "ku-divider__label", children: label }) })));
});
Divider.displayName = 'Divider';
//# sourceMappingURL=Divider.js.map