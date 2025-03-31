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
import { forwardRef } from 'react';
import './LoadingIndicator.css';
export const LoadingIndicator = forwardRef((_a, ref) => {
    var { variant = 'spinner', size = 'medium', color, ariaLabel = 'Loading...', duration, className = '', style } = _a, props = __rest(_a, ["variant", "size", "color", "ariaLabel", "duration", "className", "style"]);
    // Get the animation duration based on reduced motion preference
    const getAnimationDuration = () => {
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        return prefersReducedMotion ? '1.5s' : '0.75s';
    };
    // Generate dots for the dots variant
    const renderDots = () => {
        return (_jsx("div", { className: "ku-loading__dots", children: [...Array(3)].map((_, index) => (_jsx("div", { className: "ku-loading__dot", style: { animationDelay: `${index * 0.15}s` } }, index))) }));
    };
    // Generate pulse elements
    const renderPulse = () => {
        return (_jsx("div", { className: "ku-loading__pulse", children: [...Array(3)].map((_, index) => (_jsx("div", { className: "ku-loading__pulse-ring", style: { animationDelay: `${index * 0.2}s` } }, index))) }));
    };
    // Render progress if duration is provided
    const renderProgress = () => {
        if (!duration)
            return null;
        return (_jsx("div", { className: "ku-loading__progress", style: { animationDuration: `${duration}s` }, role: "progressbar", "aria-valuemin": 0, "aria-valuemax": 100, "aria-valuenow": 0 }));
    };
    return (_jsxs("div", Object.assign({ ref: ref, className: `ku-loading ku-loading--${variant} ku-loading--${size} ${className}`, role: "status", "aria-label": ariaLabel, style: Object.assign(Object.assign({}, style), { color: color, '--ku-loading-animation-duration': getAnimationDuration() }) }, props, { children: [variant === 'spinner' && _jsx("div", { className: "ku-loading__spinner" }), variant === 'dots' && renderDots(), variant === 'pulse' && renderPulse(), renderProgress(), _jsx("span", { className: "ku-loading__label", children: ariaLabel })] })));
});
LoadingIndicator.displayName = 'LoadingIndicator';
//# sourceMappingURL=LoadingIndicator.js.map