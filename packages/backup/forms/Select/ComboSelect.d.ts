import React from 'react';
import './ComboSelect.css';
export interface ComboSelectOption {
    value: string;
    label: string;
    icon?: React.ReactNode;
    prefix?: React.ReactNode;
    disabled?: boolean;
}
export interface ComboSelectProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'prefix' | 'value' | 'onChange'> {
    options: ComboSelectOption[];
    label?: string;
    helperText?: string;
    error?: string;
    hasError?: boolean;
    hideLabel?: boolean;
    icon?: React.ReactNode;
    prefix?: React.ReactNode;
    className?: string;
    placeholder?: string;
    isMulti?: boolean;
    value?: string | string[];
    onChange?: (value: string | string[]) => void;
}
export declare const ComboSelect: React.ForwardRefExoticComponent<ComboSelectProps & React.RefAttributes<HTMLInputElement>>;
//# sourceMappingURL=ComboSelect.d.ts.map