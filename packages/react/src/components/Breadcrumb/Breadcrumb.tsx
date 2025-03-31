import React, { useState, useRef, useEffect } from 'react';
import './Breadcrumb.css';

export interface BreadcrumbItemProps {
  /** The content of the breadcrumb item */
  children: React.ReactNode;
  /** Optional icon to display before the content */
  icon?: React.ReactNode;
  /** Whether the item is disabled */
  disabled?: boolean;
  /** URL for the breadcrumb item */
  href?: string;
  /** Click handler for the breadcrumb item */
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
  /** Additional CSS class name */
  className?: string;
}

export interface BreadcrumbProps {
  /** Array of breadcrumb items */
  items: BreadcrumbItemProps[];
  /** Custom separator between items */
  separator?: React.ReactNode;
  /** Maximum number of items to show before collapsing */
  maxItems?: number;
  /** Whether to show icons */
  showIcons?: boolean;
  /** Additional CSS class name */
  className?: string;
}

const DefaultSeparator = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="ku-breadcrumb__separator-icon"
  >
    <path
      d="M6 12L10 8L6 4"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const BreadcrumbItem: React.FC<BreadcrumbItemProps> = ({
  children,
  icon,
  disabled,
  href,
  onClick,
  className = '',
}) => {
  const classes = [
    'ku-breadcrumb__item',
    disabled && 'ku-breadcrumb__item--disabled',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (disabled) {
      event.preventDefault();
      return;
    }
    onClick?.(event);
  };

  return (
    <a
      href={href}
      className={classes}
      onClick={handleClick}
      aria-disabled={disabled}
      tabIndex={disabled ? -1 : undefined}
    >
      {icon && <span className="ku-breadcrumb__icon">{icon}</span>}
      <span className="ku-breadcrumb__text">{children}</span>
    </a>
  );
};

export const Breadcrumb: React.FC<BreadcrumbProps> = ({
  items,
  separator = <DefaultSeparator />,
  maxItems = 5,
  showIcons = true,
  className = '',
}) => {
  const [shouldCollapse, setShouldCollapse] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkCollapse = () => {
      if (items.length > maxItems) {
        setShouldCollapse(true);
      } else if (containerRef.current) {
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
      return items.map((item, index) => (
        <React.Fragment key={index}>
          {index > 0 && <span className="ku-breadcrumb__separator">{separator}</span>}
          <BreadcrumbItem {...item} icon={showIcons ? item.icon : undefined} />
        </React.Fragment>
      ));
    }

    const firstItem = items[0];
    const lastItems = items.slice(-2);
    const collapsedItems = items.slice(1, -2);
    const collapsedCount = collapsedItems.length;

    return (
      <>
        <BreadcrumbItem {...firstItem} icon={showIcons ? firstItem.icon : undefined} />
        <span className="ku-breadcrumb__separator">{separator}</span>
        <button
          className="ku-breadcrumb__collapse-trigger"
          title={`${collapsedCount} more items`}
          aria-label={`${collapsedCount} more items`}
          onClick={() => {/* TODO: Implement expand functionality */}}
        >
          <span className="ku-breadcrumb__ellipsis">•••</span>
          <span className="ku-breadcrumb__collapse-count">{collapsedCount}</span>
        </button>
        {lastItems.map((item, index) => (
          <React.Fragment key={index}>
            <span className="ku-breadcrumb__separator">{separator}</span>
            <BreadcrumbItem {...item} icon={showIcons ? item.icon : undefined} />
          </React.Fragment>
        ))}
      </>
    );
  };

  const classes = ['ku-breadcrumb', className].filter(Boolean).join(' ');

  return (
    <nav aria-label="Breadcrumb" className={classes}>
      <div className="ku-breadcrumb__container" ref={containerRef}>
        {renderItems()}
      </div>
    </nav>
  );
}; 