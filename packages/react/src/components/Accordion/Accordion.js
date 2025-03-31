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
import React, { createContext, useContext, useId } from 'react';
import { ChevronDownIcon, CircleDotIcon, ChevronRightIcon } from '@ku-design-system/core';
import classNames from 'classnames';
import './Accordion.css';
const AccordionContext = createContext(null);
const AccordionRoot = React.forwardRef((_a, ref) => {
    var { children, allowMultiple = false, defaultExpanded = [], variant = 'outlined', showLeadingIcons = false, showTrailingIcons = false, className } = _a, props = __rest(_a, ["children", "allowMultiple", "defaultExpanded", "variant", "showLeadingIcons", "showTrailingIcons", "className"]);
    const [expandedItems, setExpandedItems] = React.useState(defaultExpanded);
    const onToggle = (itemId) => {
        if (allowMultiple) {
            setExpandedItems(prev => prev.includes(itemId)
                ? prev.filter(id => id !== itemId)
                : [...prev, itemId]);
        }
        else {
            setExpandedItems(prev => prev.includes(itemId) ? [] : [itemId]);
        }
    };
    return (_jsx(AccordionContext.Provider, { value: {
            expandedItems,
            onToggle,
            allowMultiple,
            showLeadingIcons,
            showTrailingIcons
        }, children: _jsx("div", Object.assign({ ref: ref, className: classNames('ku-accordion', `ku-accordion--${variant}`, className), role: "presentation" }, props, { children: children })) }));
});
const AccordionItem = React.forwardRef((_a, ref) => {
    var { children, className } = _a, props = __rest(_a, ["children", "className"]);
    const id = useId();
    const contentId = `${id}-content`;
    const headerId = `${id}-header`;
    return (_jsx("div", Object.assign({ ref: ref, className: classNames('ku-accordion-item', className) }, props, { children: React.Children.map(children, child => {
            if (React.isValidElement(child)) {
                return React.cloneElement(child, {
                    id,
                    contentId,
                    headerId,
                });
            }
            return child;
        }) })));
});
const AccordionTrigger = React.forwardRef((_a, ref) => {
    var { children, className, id, contentId, headerId, leadingIcon, trailingIcon, disabled = false } = _a, props = __rest(_a, ["children", "className", "id", "contentId", "headerId", "leadingIcon", "trailingIcon", "disabled"]);
    const context = useContext(AccordionContext);
    if (!context || !id)
        return null;
    const { expandedItems, onToggle, showLeadingIcons, showTrailingIcons } = context;
    const isExpanded = expandedItems.includes(id);
    const defaultLeadingIcon = _jsx(CircleDotIcon, { size: 20 });
    const defaultTrailingIcon = _jsx(ChevronRightIcon, { size: 16 });
    return (_jsx("h3", { className: "ku-accordion-header", id: headerId, children: _jsxs("button", Object.assign({ ref: ref, type: "button", className: classNames('ku-accordion-trigger', className, {
                'ku-accordion-trigger--expanded': isExpanded,
            }), onClick: () => onToggle(id), "aria-expanded": isExpanded, "aria-controls": contentId, disabled: disabled }, props, { children: [_jsxs("span", { className: "ku-accordion-trigger-content", children: [(showLeadingIcons || leadingIcon) && (_jsx("span", { className: "ku-accordion-icon--leading", "aria-hidden": "true", children: leadingIcon || defaultLeadingIcon })), children, (showTrailingIcons || trailingIcon) && (_jsx("span", { className: "ku-accordion-icon--trailing", "aria-hidden": "true", children: trailingIcon || defaultTrailingIcon }))] }), _jsx(ChevronDownIcon, { className: "ku-accordion-trigger-icon", "aria-hidden": "true", size: 20 })] })) }));
});
const AccordionContent = React.forwardRef((_a, ref) => {
    var { children, className, id, contentId, headerId } = _a, props = __rest(_a, ["children", "className", "id", "contentId", "headerId"]);
    const context = useContext(AccordionContext);
    if (!context || !id)
        return null;
    const { expandedItems } = context;
    const isExpanded = expandedItems.includes(id);
    return (_jsx("div", Object.assign({ ref: ref, id: contentId, role: "region", "aria-labelledby": headerId, className: classNames('ku-accordion-content', className, {
            'ku-accordion-content--expanded': isExpanded,
        }), hidden: !isExpanded }, props, { children: _jsx("div", { className: "ku-accordion-content-inner", children: children }) })));
});
AccordionRoot.displayName = 'Accordion';
AccordionItem.displayName = 'AccordionItem';
AccordionTrigger.displayName = 'AccordionTrigger';
AccordionContent.displayName = 'AccordionContent';
const Accordion = AccordionRoot;
Accordion.Item = AccordionItem;
Accordion.Trigger = AccordionTrigger;
Accordion.Content = AccordionContent;
export { Accordion };
//# sourceMappingURL=Accordion.js.map