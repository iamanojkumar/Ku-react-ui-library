import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import React, { useState, useRef, useEffect } from 'react';
import './Breadcrumb.css';
const DefaultSeparator = () => (_jsx("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", className: "ku-breadcrumb__separator-icon", children: _jsx("path", { d: "M6 12L10 8L6 4", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }) }));
const BreadcrumbItem = ({ children, icon, disabled, href, onClick, className = '', }) => {
    const classes = [
        'ku-breadcrumb__item',
        disabled && 'ku-breadcrumb__item--disabled',
        className,
    ]
        .filter(Boolean)
        .join(' ');
    const handleClick = (event) => {
        if (disabled) {
            event.preventDefault();
            return;
        }
        onClick === null || onClick === void 0 ? void 0 : onClick(event);
    };
    return (_jsxs("a", { href: href, className: classes, onClick: handleClick, "aria-disabled": disabled, tabIndex: disabled ? -1 : undefined, children: [icon && _jsx("span", { className: "ku-breadcrumb__icon", children: icon }), _jsx("span", { className: "ku-breadcrumb__text", children: children })] }));
};
export const Breadcrumb = ({ items, separator = _jsx(DefaultSeparator, {}), maxItems = 5, showIcons = true, className = '', }) => {
    const [shouldCollapse, setShouldCollapse] = useState(false);
    const containerRef = useRef(null);
    useEffect(() => {
        const checkCollapse = () => {
            if (items.length > maxItems) {
                setShouldCollapse(true);
            }
            else if (containerRef.current) {
                const { scrollWidth, clientWidth } = containerRef.current;
                setShouldCollapse(scrollWidth > clientWidth);
            }
        };
        checkCollapse();
        window.addEventListener('resize', checkCollapse);
        return () => window.removeEventListener('resize', checkCollapse);
    }, [items.length, maxItems]);
    const renderItems = () => {
        if (!shouldCollapse || items.length <= 3) {
            return items.map((item, index) => (_jsxs(React.Fragment, { children: [index > 0 && _jsx("span", { className: "ku-breadcrumb__separator", children: separator }), _jsx(BreadcrumbItem, Object.assign({}, item, { icon: showIcons ? item.icon : undefined }))] }, index)));
        }
        const firstItem = items[0];
        const lastItems = items.slice(-2);
        const collapsedItems = items.slice(1, -2);
        const collapsedCount = collapsedItems.length;
        return (_jsxs(_Fragment, { children: [_jsx(BreadcrumbItem, Object.assign({}, firstItem, { icon: showIcons ? firstItem.icon : undefined })), _jsx("span", { className: "ku-breadcrumb__separator", children: separator }), _jsxs("button", { className: "ku-breadcrumb__collapse-trigger", title: `${collapsedCount} more items`, "aria-label": `${collapsedCount} more items`, onClick: () => { }, children: [_jsx("span", { className: "ku-breadcrumb__ellipsis", children: "\u2022\u2022\u2022" }), _jsx("span", { className: "ku-breadcrumb__collapse-count", children: collapsedCount })] }), lastItems.map((item, index) => (_jsxs(React.Fragment, { children: [_jsx("span", { className: "ku-breadcrumb__separator", children: separator }), _jsx(BreadcrumbItem, Object.assign({}, item, { icon: showIcons ? item.icon : undefined }))] }, index)))] }));
    };
    const classes = ['ku-breadcrumb', className].filter(Boolean).join(' ');
    return (_jsx("nav", { "aria-label": "Breadcrumb", className: classes, children: _jsx("div", { className: "ku-breadcrumb__container", ref: containerRef, children: renderItems() }) }));
};
//# sourceMappingURL=Breadcrumb.js.map