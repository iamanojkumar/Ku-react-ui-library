import React, { createContext, useContext, useId } from 'react';
import { ChevronDownIcon, CircleDotIcon, ChevronRightIcon } from '@ku-design-system/core';
import classNames from 'classnames';
import './Accordion.css';

// Context for managing accordion state
interface AccordionContextValue {
  expandedItems: string[];
  onToggle: (itemId: string) => void;
  allowMultiple?: boolean;
  showLeadingIcons?: boolean;
  showTrailingIcons?: boolean;
}

const AccordionContext = createContext<AccordionContextValue | null>(null);

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

export interface AccordionItemProps extends React.ComponentPropsWithoutRef<'div'> {}

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

export interface AccordionContentProps extends React.ComponentPropsWithoutRef<'div'> {}

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

const AccordionRoot = React.forwardRef<HTMLDivElement, AccordionProps>(({
  children,
  allowMultiple = false,
  defaultExpanded = [],
  variant = 'outlined',
  showLeadingIcons = false,
  showTrailingIcons = false,
  className,
  ...props
}, ref) => {
  const [expandedItems, setExpandedItems] = React.useState<string[]>(defaultExpanded);

  const onToggle = (itemId: string) => {
    if (allowMultiple) {
      setExpandedItems(prev =>
        prev.includes(itemId)
          ? prev.filter(id => id !== itemId)
          : [...prev, itemId]
      );
    } else {
      setExpandedItems(prev =>
        prev.includes(itemId) ? [] : [itemId]
      );
    }
  };

  return (
    <AccordionContext.Provider value={{ 
      expandedItems, 
      onToggle, 
      allowMultiple,
      showLeadingIcons,
      showTrailingIcons 
    }}>
      <div 
        ref={ref} 
        className={classNames('ku-accordion', `ku-accordion--${variant}`, className)} 
        role="presentation" 
        {...props}
      >
        {children}
      </div>
    </AccordionContext.Provider>
  );
});

const AccordionItem = React.forwardRef<HTMLDivElement, AccordionItemProps>(({
  children,
  className,
  ...props
}, ref) => {
  const id = useId();
  const contentId = `${id}-content`;
  const headerId = `${id}-header`;

  return (
    <div ref={ref} className={classNames('ku-accordion-item', className)} {...props}>
      {React.Children.map(children, child => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child as React.ReactElement, {
            id,
            contentId,
            headerId,
          });
        }
        return child;
      })}
    </div>
  );
});

const AccordionTrigger = React.forwardRef<HTMLButtonElement, AccordionTriggerPropsWithRefs>(({
  children,
  className,
  id,
  contentId,
  headerId,
  leadingIcon,
  trailingIcon,
  disabled = false,
  ...props
}, ref) => {
  const context = useContext(AccordionContext);
  if (!context || !id) return null;

  const { expandedItems, onToggle, showLeadingIcons, showTrailingIcons } = context;
  const isExpanded = expandedItems.includes(id);

  const defaultLeadingIcon = <CircleDotIcon size={20} />;
  const defaultTrailingIcon = <ChevronRightIcon size={16} />;

  return (
    <h3 className="ku-accordion-header" id={headerId}>
      <button
        ref={ref}
        type="button"
        className={classNames('ku-accordion-trigger', className, {
          'ku-accordion-trigger--expanded': isExpanded,
        })}
        onClick={() => onToggle(id)}
        aria-expanded={isExpanded}
        aria-controls={contentId}
        disabled={disabled}
        {...props}
      >
        <span className="ku-accordion-trigger-content">
          {(showLeadingIcons || leadingIcon) && (
            <span className="ku-accordion-icon--leading" aria-hidden="true">
              {leadingIcon || defaultLeadingIcon}
            </span>
          )}
          {children}
          {(showTrailingIcons || trailingIcon) && (
            <span className="ku-accordion-icon--trailing" aria-hidden="true">
              {trailingIcon || defaultTrailingIcon}
            </span>
          )}
        </span>
        <ChevronDownIcon
          className="ku-accordion-trigger-icon"
          aria-hidden="true"
          size={20}
        />
      </button>
    </h3>
  );
});

const AccordionContent = React.forwardRef<HTMLDivElement, AccordionContentPropsWithRefs>(({
  children,
  className,
  id,
  contentId,
  headerId,
  ...props
}, ref) => {
  const context = useContext(AccordionContext);
  if (!context || !id) return null;

  const { expandedItems } = context;
  const isExpanded = expandedItems.includes(id);

  return (
    <div
      ref={ref}
      id={contentId}
      role="region"
      aria-labelledby={headerId}
      className={classNames('ku-accordion-content', className, {
        'ku-accordion-content--expanded': isExpanded,
      })}
      hidden={!isExpanded}
      {...props}
    >
      <div className="ku-accordion-content-inner">
        {children}
      </div>
    </div>
  );
});

AccordionRoot.displayName = 'Accordion';
AccordionItem.displayName = 'AccordionItem';
AccordionTrigger.displayName = 'AccordionTrigger';
AccordionContent.displayName = 'AccordionContent';

const Accordion = AccordionRoot as AccordionComponent;
Accordion.Item = AccordionItem;
Accordion.Trigger = AccordionTrigger;
Accordion.Content = AccordionContent;

export { Accordion };
export type { AccordionProps, AccordionItemProps, AccordionTriggerProps, AccordionContentProps }; 