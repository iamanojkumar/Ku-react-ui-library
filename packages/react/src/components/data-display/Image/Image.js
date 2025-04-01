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
import { useState, useEffect, forwardRef } from 'react';
import { IconPhotoOff } from '@tabler/icons-react';
import './Image.css';
export const Image = forwardRef((_a, ref) => {
    var { src, alt = '', width, height, aspectRatio, srcSet, sizes, fallback, isDecorative = false, objectFit = 'cover', className = '', errorMessage = 'Image failed to load' } = _a, props = __rest(_a, ["src", "alt", "width", "height", "aspectRatio", "srcSet", "sizes", "fallback", "isDecorative", "objectFit", "className", "errorMessage"]);
    const [hasError, setHasError] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        setHasError(false);
        setIsLoading(true);
    }, [src]);
    const handleError = () => {
        setHasError(true);
        setIsLoading(false);
    };
    const handleLoad = () => {
        setIsLoading(false);
    };
    const getAspectRatioStyle = () => {
        if (!aspectRatio)
            return {};
        const [width, height] = aspectRatio.split(':').map(Number);
        return {
            aspectRatio: `${width}/${height}`,
        };
    };
    const containerStyle = Object.assign({ width: width || '100%', height: height || 'auto' }, getAspectRatioStyle());
    if (hasError || !src) {
        return (_jsx("div", { className: `ku-image-container ku-image-fallback ${className}`, style: containerStyle, role: !isDecorative ? 'img' : undefined, "aria-label": !isDecorative ? alt : undefined, children: fallback || (_jsxs("div", { className: "ku-image-fallback-content", children: [_jsx(IconPhotoOff, { size: 24, stroke: 2 }), _jsx("span", { className: "ku-image-error-text", children: errorMessage })] })) }));
    }
    return (_jsxs("div", { className: `ku-image-container ${className}`, style: containerStyle, children: [isLoading && (_jsx("div", { className: "ku-image-loading", children: _jsx("div", { className: "ku-image-loading-spinner" }) })), _jsx("img", Object.assign({ ref: ref, src: src, alt: isDecorative ? '' : alt, srcSet: srcSet, sizes: sizes, className: "ku-image", style: { objectFit }, onError: handleError, onLoad: handleLoad }, props))] }));
});
Image.displayName = 'Image';
//# sourceMappingURL=Image.js.map