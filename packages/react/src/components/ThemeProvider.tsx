import React from 'react';

interface ThemeProviderProps {
  children: React.ReactNode;
  theme?: Record<string, any>;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children, theme }) => {
  return (
    <div className="ku-theme-provider" style={theme}>
      {children}
    </div>
  );
}; 