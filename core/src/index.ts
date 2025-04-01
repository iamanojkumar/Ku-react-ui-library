// Import tokens
import { lightColors, darkColors, getColorValue } from './tokens/colors';
import type { ColorToken } from './tokens/colors';
import { themeVariants, getThemeVariant, isHighContrastTheme, isColorBlindTheme } from './tokens/theme-variants';
import type { ThemeVariant } from './tokens/theme-variants';

// Export icons
export * from './icons';

// Export tokens and utilities
export {
  lightColors,
  darkColors,
  getColorValue,
  themeVariants,
  getThemeVariant,
  isHighContrastTheme,
  isColorBlindTheme
};

// Export types
export type { ColorToken, ThemeVariant };

// Export utilities
export * from './utils/cssVariables';

// Export React hooks
export { useColorVariable, useCssVariable, useRadiusVariable } from './hooks/useCssVariables';

// Export Vue composables
export { useColorVariable as vueUseColorVariable, useCssVariable as vueUseCssVariable } from './composables/useCssVariables';

// Initialize function
export function initialize(): void {
  if (typeof window !== 'undefined') {
    // Check for system dark mode preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const theme = prefersDark ? 'dark' : 'light';
    // Apply theme
    document.documentElement.setAttribute('data-theme', theme);
  }
}

// Default export
export default {
  lightColors,
  darkColors,
  getColorValue,
  themeVariants,
  getThemeVariant,
  isHighContrastTheme,
  isColorBlindTheme,
  initialize
}; 