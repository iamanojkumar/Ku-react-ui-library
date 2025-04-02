import React, { createContext, useContext, useCallback, useEffect } from 'react';
import './Tabs.css';

type TabsContextType = {
  selectedIndex: number;
  setSelectedIndex: (index: number) => void;
  variant?: 'default' | 'pills' | 'underline';
  pillStyle?: 'outline' | 'filled';
  color?: 'primary' | 'success' | 'warning' | 'danger' | 'neutral';
  equalWidth?: boolean;
};

const TabsContext = createContext<TabsContextType | null>(null);

export interface TabsProps {
  /**
   * The currently selected tab index
   */
  selectedIndex?: number;
  /**
   * Callback when the selected tab changes
   */
  onChange?: (index: number) => void;
  /**
   * Visual variant of the tabs
   * @default 'default'
   */
  variant?: 'default' | 'pills' | 'underline';
  /**
   * Style of pills variant
   * @default 'filled'
   */
  pillStyle?: 'outline' | 'filled';
  /**
   * Color variant
   * @default 'primary'
   */
  color?: 'primary' | 'success' | 'warning' | 'danger' | 'neutral';
  /**
   * Whether to make all tabs equal width
   * @default false
   */
  equalWidth?: boolean;
  /**
   * The tabs content
   */
  children: React.ReactNode;
  /**
   * Additional class name
   */
  className?: string;
}

export const Tabs: React.FC<TabsProps> = ({
  selectedIndex: controlledIndex,
  onChange,
  variant = 'default',
  pillStyle = 'filled',
  color = 'primary',
  equalWidth = false,
  children,
  className,
}) => {
  const [selectedIndex, setSelectedIndex] = React.useState(controlledIndex ?? 0);

  useEffect(() => {
    if (controlledIndex !== undefined) {
      setSelectedIndex(controlledIndex);
    }
  }, [controlledIndex]);

  const handleChange = useCallback((index: number) => {
    if (controlledIndex === undefined) {
      setSelectedIndex(index);
    }
    onChange?.(index);
  }, [controlledIndex, onChange]);

  return (
    <TabsContext.Provider value={{ 
      selectedIndex, 
      setSelectedIndex: handleChange, 
      variant, 
      pillStyle,
      color,
      equalWidth 
    }}>
      <div className={['ku-tabs', className].filter(Boolean).join(' ')}>
        {children}
      </div>
    </TabsContext.Provider>
  );
};

export interface TabListProps {
  /**
   * The tab triggers
   */
  children: React.ReactNode;
  /**
   * Additional class name
   */
  className?: string;
}

export const TabList: React.FC<TabListProps> = ({ children, className }) => {
  const context = useContext(TabsContext);
  if (!context) throw new Error('TabList must be used within Tabs');

  const { variant, pillStyle, color, equalWidth } = context;

  const handleKeyDown = (e: React.KeyboardEvent) => {
    const tabs = Array.from(e.currentTarget.children);
    const currentIndex = tabs.indexOf(document.activeElement as Element);
    let nextIndex: number;

    switch (e.key) {
      case 'ArrowLeft':
        nextIndex = currentIndex > 0 ? currentIndex - 1 : tabs.length - 1;
        break;
      case 'ArrowRight':
        nextIndex = currentIndex < tabs.length - 1 ? currentIndex + 1 : 0;
        break;
      case 'Home':
        nextIndex = 0;
        break;
      case 'End':
        nextIndex = tabs.length - 1;
        break;
      default:
        return;
    }

    e.preventDefault();
    (tabs[nextIndex] as HTMLElement).focus();
    context.setSelectedIndex(nextIndex);
  };

  return (
    <div
      role="tablist"
      className={[
        'ku-tabs__list',
        `ku-tabs__list--${variant}`,
        variant === 'pills' && `ku-tabs__list--pills-${pillStyle}`,
        `ku-tabs__list--${color}`,
        equalWidth && 'ku-tabs__list--equal-width',
        className
      ].filter(Boolean).join(' ')}
      onKeyDown={handleKeyDown}
    >
      {children}
    </div>
  );
};

export interface TabProps {
  /**
   * Index of the tab
   */
  index: number;
  /**
   * Whether the tab is disabled
   */
  disabled?: boolean;
  /**
   * Icon to display next to the tab text
   */
  icon?: React.ReactNode;
  /**
   * The tab content
   */
  children: React.ReactNode;
  /**
   * Additional class name
   */
  className?: string;
}

export const Tab: React.FC<TabProps> = ({
  index,
  disabled = false,
  icon,
  children,
  className,
}) => {
  const context = useContext(TabsContext);
  if (!context) throw new Error('Tab must be used within Tabs');

  const { selectedIndex, setSelectedIndex, variant, pillStyle, color } = context;
  const isSelected = selectedIndex === index;

  return (
    <button
      role="tab"
      aria-selected={isSelected}
      aria-disabled={disabled}
      disabled={disabled}
      tabIndex={isSelected ? 0 : -1}
      onClick={() => !disabled && setSelectedIndex(index)}
      className={[
        'ku-tabs__tab',
        `ku-tabs__tab--${variant}`,
        variant === 'pills' && `ku-tabs__tab--pills-${pillStyle}`,
        `ku-tabs__tab--${color}`,
        isSelected && 'ku-tabs__tab--selected',
        disabled && 'ku-tabs__tab--disabled',
        className
      ].filter(Boolean).join(' ')}
    >
      {icon && <span className="ku-tabs__tab-icon">{icon}</span>}
      {children}
    </button>
  );
};

export interface TabPanelsProps {
  /**
   * The tab panels
   */
  children: React.ReactNode;
  /**
   * Additional class name
   */
  className?: string;
}

export const TabPanels: React.FC<TabPanelsProps> = ({ children, className }) => {
  return (
    <div className={['ku-tabs__panels', className].filter(Boolean).join(' ')}>
      {children}
    </div>
  );
};

export interface TabPanelProps {
  /**
   * Index of the panel
   */
  index: number;
  /**
   * The panel content
   */
  children: React.ReactNode;
  /**
   * Additional class name
   */
  className?: string;
}

export const TabPanel: React.FC<TabPanelProps> = ({ index, children, className }) => {
  const context = useContext(TabsContext);
  if (!context) throw new Error('TabPanel must be used within Tabs');

  const { selectedIndex } = context;
  const isSelected = selectedIndex === index;

  if (!isSelected) return null;

  return (
    <div
      role="tabpanel"
      tabIndex={0}
      className={['ku-tabs__panel', className].filter(Boolean).join(' ')}
    >
      {children}
    </div>
  );
};

Tabs.displayName = 'Tabs';
TabList.displayName = 'TabList';
Tab.displayName = 'Tab';
TabPanels.displayName = 'TabPanels';
TabPanel.displayName = 'TabPanel'; 