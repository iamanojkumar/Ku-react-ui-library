import React from 'react';
import { ThemeVariant, lightColors } from '@ku-design-system/core';

interface ThemeProviderProps {
  children: React.ReactNode;
  theme?: Partial<ThemeVariant>;
}

const defaultTheme: ThemeVariant = {
  name: 'Light',
  colors: lightColors,
  isDark: false
};

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children, theme = defaultTheme }) => {
  // Apply theme variables to the root element
  const themeStyles = {
    ...theme.colors,
    '--ku-theme-mode': theme.isDark ? 'dark' : 'light',
  };

  return (
    <div 
      className="ku-theme-provider" 
      data-theme={theme.isDark ? 'dark' : 'light'}
      style={themeStyles as React.CSSProperties}
    >
      {children}
    </div>
  );
}; 