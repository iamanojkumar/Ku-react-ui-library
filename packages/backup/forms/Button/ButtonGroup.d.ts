import React from 'react';
import './ButtonGroup.css';
export interface ButtonGroupProps extends React.HTMLAttributes<HTMLDivElement> {
    /**
     * The behavior of the button group
     * @default 'radio'
     */
    type: 'radio' | 'checkbox';
    /**
     * The orientation of the button group
     * @default 'horizontal'
     */
    orientation?: 'horizontal' | 'vertical';
    /**
     * Optional class name
     */
    className?: string;
    children: React.ReactNode;
}
export declare const ButtonGroup: React.FC<ButtonGroupProps>;
export default ButtonGroup;
//# sourceMappingURL=ButtonGroup.d.ts.map