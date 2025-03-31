import { lightColors, darkColors } from './colors';
import { spacing } from './spacing';
import { effects } from './effects';

export const semanticTokens = {
  interactive: {
    focus: {
      light: lightColors.Brand.primary,
      dark: darkColors.Brand.primary,
    },
    pressed: {
      light: lightColors.Brand.primary,
      dark: darkColors.Brand.primary,
    },
    dragged: {
      light: lightColors.Brand.primary,
      dark: darkColors.Brand.primary,
    },
  },
  surface: {
    elevation: {
      0: {
        light: lightColors.Background['surface-1'],
        dark: darkColors.Background['surface-1'],
      },
      1: {
        light: '#f8f9fa',
        dark: '#2d3033',
      },
      2: {
        light: '#f1f3f5',
        dark: '#3a3f44',
      },
      3: {
        light: '#e9ecef',
        dark: '#474d54',
      },
    },
  },
  overlay: {
    background: {
      default: 'rgba(0, 0, 0, 0.5)',
      light: 'rgba(0, 0, 0, 0.2)',
      heavy: 'rgba(0, 0, 0, 0.8)',
    },
  },
  layout: {
    gap: {
      small: spacing[4],
      medium: spacing[8],
      large: spacing[12],
    },
  },
  component: {
    padding: {
      small: spacing[2],
      medium: spacing[4],
      large: spacing[6],
    },
    height: {
      input: '40px',
      button: '40px',
      toolbar: '56px',
      header: '64px',
    },
    minWidth: {
      button: '64px',
    },
  },
  animation: {
    easing: {
      inOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
      out: 'cubic-bezier(0, 0, 0.2, 1)',
      in: 'cubic-bezier(0.4, 0, 1, 1)',
    },
    duration: {
      instant: '0ms',
      fast: '150ms',
      normal: '250ms',
      slow: '350ms',
    },
  },
  focus: {
    ring: {
      style: 'solid',
      width: {
        small: '2px',
        medium: '3px',
        large: '4px',
      },
      offset: {
        small: '1px',
        medium: '2px',
        large: '3px',
      },
      highContrast: '4px solid #ffffff',
    },
  },
  border: {
    style: {
      solid: 'solid',
      dashed: 'dashed',
    },
    width: {
      thin: '1px',
      medium: '2px',
      thick: '4px',
    },
  },
  zIndex: {
    dropdown: 1000,
    sticky: 1020,
    modal: 1030,
    popover: 1040,
    tooltip: 1050,
  },
  breakpoint: {
    mobile: '320px',
    tablet: '768px',
    desktop: '1024px',
    wide: '1440px',
  },
} as const;

export type SemanticTokens = typeof semanticTokens; 