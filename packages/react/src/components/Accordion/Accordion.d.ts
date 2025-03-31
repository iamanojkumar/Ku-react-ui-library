import React from 'react';
import './Accordion.css';
export type AccordionVariant = 'contained' | 'outlined' | 'ghost';
export interface AccordionProps extends React.ComponentPropsWithoutRef<'div'> {
    /**
     * Allow multiple items to be expanded at once
     * @default false
     */
    allowMultiple?: boolean;
    /**
     * Default expanded item IDs
     */
    defaultExpanded?: string[];
    /**
     * The variant of the accordion
     * @default 'outlined'
     */
    variant?: AccordionVariant;
    /**
     * Show leading icons for all items
     * @default false
     */
    showLeadingIcons?: boolean;
    /**
     * Show trailing icons for all items
     * @default false
     */
    showTrailingIcons?: boolean;
}
export interface AccordionItemProps extends React.ComponentPropsWithoutRef<'div'> {
}
export interface AccordionTriggerProps extends React.ComponentPropsWithoutRef<'button'> {
    /**
     * Custom icon to display before the trigger text
     * This will override the default icon when showLeadingIcons is true
     */
    leadingIcon?: React.ReactNode;
    /**
     * Custom icon to display after the trigger text (before the chevron)
     * This will override the default icon when showTrailingIcons is true
     */
    trailingIcon?: React.ReactNode;
    /**
     * Whether the trigger is disabled
     * @default false
     */
    disabled?: boolean;
}
export interface AccordionContentProps extends React.ComponentPropsWithoutRef<'div'> {
}
interface AccordionTriggerPropsWithRefs extends AccordionTriggerProps {
    id?: string;
    contentId?: string;
    headerId?: string;
}
interface AccordionContentPropsWithRefs extends AccordionContentProps {
    id?: string;
    contentId?: string;
    headerId?: string;
}
type AccordionComponent = React.ForwardRefExoticComponent<AccordionProps & React.RefAttributes<HTMLDivElement>> & {
    Item: React.ForwardRefExoticComponent<AccordionItemProps & React.RefAttributes<HTMLDivElement>>;
    Trigger: React.ForwardRefExoticComponent<AccordionTriggerPropsWithRefs & React.RefAttributes<HTMLButtonElement>>;
    Content: React.ForwardRefExoticComponent<AccordionContentPropsWithRefs & React.RefAttributes<HTMLDivElement>>;
};
declare const Accordion: AccordionComponent;
export { Accordion };
export type { AccordionProps, AccordionItemProps, AccordionTriggerProps, AccordionContentProps };
//# sourceMappingURL=Accordion.d.ts.map