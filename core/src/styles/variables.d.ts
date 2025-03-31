declare module '*.css' {
  const content: { [className: string]: string };
  export default content;
}

declare module '@your-org/design-system-core' {
  // CSS Variables
  export const cssVariables: {
    // Colors
    '--color-primary-50': string;
    '--color-primary-100': string;
    '--color-primary-200': string;
    '--color-primary-300': string;
    '--color-primary-400': string;
    '--color-primary-500': string;
    '--color-primary-600': string;
    '--color-primary-700': string;
    '--color-primary-800': string;
    '--color-primary-900': string;

    '--color-secondary-50': string;
    '--color-secondary-100': string;
    '--color-secondary-200': string;
    '--color-secondary-300': string;
    '--color-secondary-400': string;
    '--color-secondary-500': string;
    '--color-secondary-600': string;
    '--color-secondary-700': string;
    '--color-secondary-800': string;
    '--color-secondary-900': string;

    '--color-success-50': string;
    '--color-success-100': string;
    '--color-success-200': string;
    '--color-success-300': string;
    '--color-success-400': string;
    '--color-success-500': string;
    '--color-success-600': string;
    '--color-success-700': string;
    '--color-success-800': string;
    '--color-success-900': string;

    '--color-warning-50': string;
    '--color-warning-100': string;
    '--color-warning-200': string;
    '--color-warning-300': string;
    '--color-warning-400': string;
    '--color-warning-500': string;
    '--color-warning-600': string;
    '--color-warning-700': string;
    '--color-warning-800': string;
    '--color-warning-900': string;

    '--color-error-50': string;
    '--color-error-100': string;
    '--color-error-200': string;
    '--color-error-300': string;
    '--color-error-400': string;
    '--color-error-500': string;
    '--color-error-600': string;
    '--color-error-700': string;
    '--color-error-800': string;
    '--color-error-900': string;

    // Text colors
    '--color-text-primary': string;
    '--color-text-secondary': string;
    '--color-text-disabled': string;
    '--color-text-hint': string;

    // Background colors
    '--color-background-default': string;
    '--color-background-paper': string;
    '--color-background-disabled': string;

    // Border colors
    '--color-border-light': string;
    '--color-border-default': string;
    '--color-border-dark': string;

    // Typography
    '--font-family-base': string;
    '--font-family-heading': string;
    '--font-family-mono': string;

    // Font sizes
    '--font-size-xs': string;
    '--font-size-sm': string;
    '--font-size-base': string;
    '--font-size-lg': string;
    '--font-size-xl': string;
    '--font-size-2xl': string;
    '--font-size-3xl': string;
    '--font-size-4xl': string;
    '--font-size-5xl': string;
    '--font-size-6xl': string;
    '--font-size-7xl': string;

    // Font weights
    '--font-weight-thin': string;
    '--font-weight-extralight': string;
    '--font-weight-light': string;
    '--font-weight-normal': string;
    '--font-weight-medium': string;
    '--font-weight-semibold': string;
    '--font-weight-bold': string;
    '--font-weight-extrabold': string;
    '--font-weight-black': string;

    // Line heights
    '--line-height-none': string;
    '--line-height-tight': string;
    '--line-height-snug': string;
    '--line-height-normal': string;
    '--line-height-relaxed': string;
    '--line-height-loose': string;

    // Spacing
    '--spacing-px': string;
    '--spacing-0': string;
    '--spacing-0-5': string;
    '--spacing-1': string;
    '--spacing-1-5': string;
    '--spacing-2': string;
    '--spacing-2-5': string;
    '--spacing-3': string;
    '--spacing-3-5': string;
    '--spacing-4': string;
    '--spacing-5': string;
    '--spacing-6': string;
    '--spacing-7': string;
    '--spacing-8': string;
    '--spacing-9': string;
    '--spacing-10': string;
    '--spacing-12': string;
    '--spacing-14': string;
    '--spacing-16': string;
    '--spacing-20': string;
    '--spacing-24': string;
    '--spacing-28': string;
    '--spacing-32': string;
    '--spacing-36': string;
    '--spacing-40': string;
    '--spacing-44': string;
    '--spacing-48': string;
    '--spacing-52': string;
    '--spacing-56': string;
    '--spacing-60': string;
    '--spacing-64': string;
    '--spacing-72': string;
    '--spacing-80': string;
    '--spacing-96': string;

    // Effects
    '--shadow-sm': string;
    '--shadow-base': string;
    '--shadow-md': string;
    '--shadow-lg': string;
    '--shadow-xl': string;
    '--shadow-2xl': string;
    '--shadow-inner': string;

    '--radius-none': string;
    '--radius-sm': string;
    '--radius-base': string;
    '--radius-md': string;
    '--radius-lg': string;
    '--radius-xl': string;
    '--radius-2xl': string;
    '--radius-3xl': string;
    '--radius-full': string;

    '--transition-none': string;
    '--transition-all': string;
    '--transition-colors': string;
    '--transition-opacity': string;
    '--transition-shadow': string;
    '--transition-transform': string;

    '--z-index-0': string;
    '--z-index-10': string;
    '--z-index-20': string;
    '--z-index-30': string;
    '--z-index-40': string;
    '--z-index-50': string;
    '--z-index-auto': string;

    '--focus-ring-width': string;
    '--focus-ring-color': string;
    '--focus-ring-offset': string;
  };
} 