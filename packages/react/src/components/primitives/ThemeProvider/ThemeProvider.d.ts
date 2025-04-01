import React from 'react';
import './ThemeProvider.css';
type Theme = 'light' | 'dark';
interface ThemeContextValue {
    theme: Theme;
    toggleTheme: () => void;
}
export interface ThemeProviderProps {
    children: React.ReactNode;
    defaultTheme?: Theme;
}
export declare const ThemeProvider: ({ children, defaultTheme, }: ThemeProviderProps) => JSX.Element;
export declare const useTheme: () => ThemeContextValue;
export {};
//# sourceMappingURL=ThemeProvider.d.ts.map