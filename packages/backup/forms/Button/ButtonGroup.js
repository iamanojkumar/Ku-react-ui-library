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
import classNames from 'classnames';
import './ButtonGroup.css';
export const ButtonGroup = (_a) => {
    var { type = 'radio', orientation = 'horizontal', className, children } = _a, props = __rest(_a, ["type", "orientation", "className", "children"]);
    const groupClasses = classNames('ku-button-group', `ku-button-group--${type}`, {
        'ku-button-group--vertical': orientation === 'vertical',
    }, className);
    return (_jsx("div", Object.assign({ className: groupClasses, role: type === 'radio' ? 'radiogroup' : undefined }, props, { children: children })));
};
ButtonGroup.displayName = 'ButtonGroup';
export default ButtonGroup;
//# sourceMappingURL=ButtonGroup.js.map