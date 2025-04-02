import React from 'react';
export interface TextAreaProps extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'size'> {
    /** The label for the textarea */
    label?: string;
    /** Error message to display */
    error?: string;
    /** Helper text to provide additional context */
    helperText?: string;
    /** Size variant of the textarea */
    size?: 'sm' | 'md' | 'lg';
    /** Visual variant of the textarea */
    variant?: 'outlined' | 'filled' | 'subtle';
    /** Whether the textarea is disabled */
    disabled?: boolean;
    /** Accessibility label when no visual label is provided */
    ariaLabel?: string;
    /** ID for connecting label with textarea */
    id?: string;
    /** Maximum height before scrolling begins */
    maxHeight?: string;
}
declare const TextArea: React.ForwardRefExoticComponent<TextAreaProps & React.RefAttributes<HTMLTextAreaElement>>;
export { TextArea };
//# sourceMappingURL=TextArea.d.ts.map