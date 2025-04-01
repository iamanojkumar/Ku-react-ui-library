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
import { jsx as _jsx } from "react/jsx-runtime";
import React, { forwardRef } from 'react';
import './List.css';
export const ListItem = forwardRef((_a, ref) => {
    var { children, className = '' } = _a, props = __rest(_a, ["children", "className"]);
    return (_jsx("li", Object.assign({ ref: ref, className: `ku-list__item ${className}` }, props, { children: children })));
});
ListItem.displayName = 'ListItem';
export const List = forwardRef((_a, ref) => {
    var { children, variant = 'unordered', marker = 'disc', nested = false, className = '' } = _a, props = __rest(_a, ["children", "variant", "marker", "nested", "className"]);
    const isOrdered = variant === 'ordered';
    const Component = isOrdered ? 'ol' : 'ul';
    // Get the marker style class
    const getMarkerClass = () => {
        if (variant === 'none')
            return 'ku-list--no-marker';
        return `ku-list--${marker}`;
    };
    // Count direct ListItem children for aria-count
    const itemCount = React.Children.toArray(children).filter((child) => React.isValidElement(child) && child.type === ListItem).length;
    return (_jsx(Component, Object.assign({ ref: ref, className: `ku-list ${getMarkerClass()} ${nested ? 'ku-list--nested' : ''} ${className}`, role: variant === 'none' ? 'list' : undefined, "aria-label": `${variant} list with ${itemCount} items` }, props, { children: children })));
});
List.displayName = 'List';
//# sourceMappingURL=List.js.map