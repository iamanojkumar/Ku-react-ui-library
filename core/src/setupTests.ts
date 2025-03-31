/**
 * Test Setup Configuration
 * This file configures the testing environment and provides mock implementations
 */

import '@testing-library/jest-dom';

// Mock CSS Variables for Light Theme
const mockLightThemeVariables: { [key: string]: string } = {
  '--ku-color-primary-50': '#e6f0ff',
  '--ku-color-primary-500': '#0066ff',
  '--ku-color-text-primary': '#212121',
  '--ku-color-background-default': '#ffffff',
  '--ku-color-success-500': '#4caf50',
  '--ku-color-warning-500': '#ff9800',
  '--ku-color-error-500': '#f44336'
};

// Mock CSS Variables for Dark Theme
const mockDarkThemeVariables: { [key: string]: string } = {
  '--ku-color-primary-50': '#001433',
  '--ku-color-primary-500': '#3385ff',
  '--ku-color-text-primary': '#ffffff',
  '--ku-color-background-default': '#121212',
  '--ku-color-success-500': '#81c784',
  '--ku-color-warning-500': '#ffb74d',
  '--ku-color-error-500': '#e57373'
};

// Current theme state
let currentTheme: 'light' | 'dark' = 'light';

// Mock getComputedStyle to return our CSS variables
Object.defineProperty(window, 'getComputedStyle', {
  value: (element: Element) => ({
    getPropertyValue: (prop: string) => {
      const variables = currentTheme === 'light' ? mockLightThemeVariables : mockDarkThemeVariables;
      return variables[prop] || '';
    }
  })
});

// Mock matchMedia for theme detection
Object.defineProperty(window, 'matchMedia', {
  value: (query: string) => ({
    matches: query === '(prefers-color-scheme: dark)' ? currentTheme === 'dark' : false,
    media: query,
    onchange: null,
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })
});

// Mock ResizeObserver
class ResizeObserverMock {
  observe = jest.fn();
  unobserve = jest.fn();
  disconnect = jest.fn();
}

window.ResizeObserver = ResizeObserverMock;

// Helper to update theme in tests
export function setTestTheme(theme: 'light' | 'dark') {
  currentTheme = theme;
  document.documentElement.setAttribute('data-theme', theme);
  // Dispatch theme change event
  window.dispatchEvent(new CustomEvent('ku-theme-change', { detail: { theme } }));
}

// Helper to get computed CSS variable
export function getTestCssVariable(name: string) {
  const variables = currentTheme === 'light' ? mockLightThemeVariables : mockDarkThemeVariables;
  return variables[name];
}

// Helper to set CSS variable for testing
export function setTestCssVariable(name: string, value: string) {
  if (currentTheme === 'light') {
    mockLightThemeVariables[name] = value;
  } else {
    mockDarkThemeVariables[name] = value;
  }
}

// Reset all mocks after each test
afterEach(() => {
  // Reset theme to light
  currentTheme = 'light';
  document.documentElement.removeAttribute('data-theme');
  
  // Reset CSS variables to defaults
  Object.keys(mockLightThemeVariables).forEach(key => {
    delete mockLightThemeVariables[key];
  });
  Object.keys(mockDarkThemeVariables).forEach(key => {
    delete mockDarkThemeVariables[key];
  });
  
  // Clear all mocks
  jest.clearAllMocks();
}); 