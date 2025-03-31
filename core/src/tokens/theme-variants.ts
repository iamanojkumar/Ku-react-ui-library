import { lightColors, darkColors } from './colors';

export type ThemeVariant = {
  name: string;
  colors: typeof lightColors;
  isDark: boolean;
};

// Default themes
export const defaultThemes = {
  light: {
    name: 'Light',
    colors: lightColors,
    isDark: false
  },
  dark: {
    name: 'Dark',
    colors: darkColors,
    isDark: true
  }
} as const;

// High contrast themes
export const highContrastThemes = {
  light: {
    name: 'High Contrast Light',
    colors: {
      ...lightColors,
      text: {
        ...lightColors.text,
        primary: '#000000',
        secondary: '#000000',
        tertiary: '#000000'
      },
      Background: {
        ...lightColors.Background,
        'surface-1': '#ffffff',
        'surface-2': '#ffffff',
        'surface-3': '#ffffff',
        'surface-4': '#ffffff',
        'surface-5': '#ffffff'
      },
      border: {
        ...lightColors.border,
        b1: '#000000',
        b2: '#000000'
      },
      extra: {
        ...lightColors.extra,
        neutrals: {
          ...lightColors.extra.neutrals,
          white: '#ffffff',
          black: '#000000'
        },
        gray: {
          ...lightColors.extra.gray,
          100: '#ffffff',
          200: '#ffffff',
          300: '#ffffff',
          400: '#ffffff',
          500: '#ffffff',
          600: '#ffffff',
          700: '#ffffff',
          800: '#ffffff',
          900: '#ffffff',
          1000: '#ffffff',
          1100: '#ffffff',
          1200: '#ffffff'
        },
        blue: {
          ...lightColors.extra.blue,
          100: '#ffffff',
          200: '#ffffff',
          300: '#ffffff',
          400: '#ffffff',
          500: '#ffffff',
          600: '#ffffff',
          700: '#ffffff',
          800: '#ffffff',
          900: '#ffffff',
          1000: '#ffffff',
          1100: '#ffffff',
          1200: '#ffffff'
        },
        green: {
          ...lightColors.extra.green,
          100: '#ffffff',
          200: '#ffffff',
          300: '#ffffff',
          400: '#ffffff',
          500: '#ffffff',
          600: '#ffffff',
          700: '#ffffff',
          800: '#ffffff',
          900: '#ffffff',
          1000: '#ffffff',
          1100: '#ffffff',
          1200: '#ffffff'
        },
        red: {
          ...lightColors.extra.red,
          100: '#ffffff',
          200: '#ffffff',
          300: '#ffffff',
          400: '#ffffff',
          500: '#ffffff',
          600: '#ffffff',
          700: '#ffffff',
          800: '#ffffff',
          900: '#ffffff',
          1000: '#ffffff',
          1100: '#ffffff',
          1200: '#ffffff'
        }
      }
    },
    isDark: false
  },
  dark: {
    name: 'High Contrast Dark',
    colors: {
      ...darkColors,
      text: {
        ...darkColors.text,
        primary: '#ffffff',
        secondary: '#ffffff',
        tertiary: '#ffffff'
      },
      Background: {
        ...darkColors.Background,
        'surface-1': '#000000',
        'surface-2': '#000000',
        'surface-3': '#000000',
        'surface-4': '#000000',
        'surface-5': '#000000'
      },
      border: {
        ...darkColors.border,
        b1: '#ffffff',
        b2: '#ffffff'
      },
      extra: {
        ...darkColors.extra,
        neutrals: {
          ...darkColors.extra.neutrals,
          white: '#ffffff',
          black: '#000000'
        },
        gray: {
          ...darkColors.extra.gray,
          100: '#000000',
          200: '#000000',
          300: '#000000',
          400: '#000000',
          500: '#000000',
          600: '#000000',
          700: '#000000',
          800: '#000000',
          900: '#000000',
          1000: '#000000',
          1100: '#000000',
          1200: '#000000'
        },
        blue: {
          ...darkColors.extra.blue,
          100: '#000000',
          200: '#000000',
          300: '#000000',
          400: '#000000',
          500: '#000000',
          600: '#000000',
          700: '#000000',
          800: '#000000',
          900: '#000000',
          1000: '#000000',
          1100: '#000000',
          1200: '#000000'
        },
        green: {
          ...darkColors.extra.green,
          100: '#000000',
          200: '#000000',
          300: '#000000',
          400: '#000000',
          500: '#000000',
          600: '#000000',
          700: '#000000',
          800: '#000000',
          900: '#000000',
          1000: '#000000',
          1100: '#000000',
          1200: '#000000'
        },
        red: {
          ...darkColors.extra.red,
          100: '#000000',
          200: '#000000',
          300: '#000000',
          400: '#000000',
          500: '#000000',
          600: '#000000',
          700: '#000000',
          800: '#000000',
          900: '#000000',
          1000: '#000000',
          1100: '#000000',
          1200: '#000000'
        }
      }
    },
    isDark: true
  }
} as const;

// Color blind themes
export const colorBlindThemes = {
  light: {
    name: 'Color Blind Light',
    colors: {
      ...lightColors,
      text: {
        ...lightColors.text,
        primary: '#000000',
        secondary: '#000000',
        tertiary: '#000000'
      },
      Background: {
        ...lightColors.Background,
        'surface-1': '#ffffff',
        'surface-2': '#ffffff',
        'surface-3': '#ffffff',
        'surface-4': '#ffffff',
        'surface-5': '#ffffff'
      },
      border: {
        ...lightColors.border,
        b1: '#000000',
        b2: '#000000'
      },
      extra: {
        ...lightColors.extra,
        neutrals: {
          ...lightColors.extra.neutrals,
          white: '#ffffff',
          black: '#000000'
        },
        gray: {
          ...lightColors.extra.gray,
          100: '#ffffff',
          200: '#ffffff',
          300: '#ffffff',
          400: '#ffffff',
          500: '#ffffff',
          600: '#ffffff',
          700: '#ffffff',
          800: '#ffffff',
          900: '#ffffff',
          1000: '#ffffff',
          1100: '#ffffff',
          1200: '#ffffff'
        },
        blue: {
          ...lightColors.extra.blue,
          100: '#ffffff',
          200: '#ffffff',
          300: '#ffffff',
          400: '#ffffff',
          500: '#ffffff',
          600: '#ffffff',
          700: '#ffffff',
          800: '#ffffff',
          900: '#ffffff',
          1000: '#ffffff',
          1100: '#ffffff',
          1200: '#ffffff'
        },
        green: {
          ...lightColors.extra.green,
          100: '#ffffff',
          200: '#ffffff',
          300: '#ffffff',
          400: '#ffffff',
          500: '#ffffff',
          600: '#ffffff',
          700: '#ffffff',
          800: '#ffffff',
          900: '#ffffff',
          1000: '#ffffff',
          1100: '#ffffff',
          1200: '#ffffff'
        },
        red: {
          ...lightColors.extra.red,
          100: '#ffffff',
          200: '#ffffff',
          300: '#ffffff',
          400: '#ffffff',
          500: '#ffffff',
          600: '#ffffff',
          700: '#ffffff',
          800: '#ffffff',
          900: '#ffffff',
          1000: '#ffffff',
          1100: '#ffffff',
          1200: '#ffffff'
        }
      }
    },
    isDark: false
  },
  dark: {
    name: 'Color Blind Dark',
    colors: {
      ...darkColors,
      text: {
        ...darkColors.text,
        primary: '#ffffff',
        secondary: '#ffffff',
        tertiary: '#ffffff'
      },
      Background: {
        ...darkColors.Background,
        'surface-1': '#000000',
        'surface-2': '#000000',
        'surface-3': '#000000',
        'surface-4': '#000000',
        'surface-5': '#000000'
      },
      border: {
        ...darkColors.border,
        b1: '#ffffff',
        b2: '#ffffff'
      },
      extra: {
        ...darkColors.extra,
        neutrals: {
          ...darkColors.extra.neutrals,
          white: '#ffffff',
          black: '#000000'
        },
        gray: {
          ...darkColors.extra.gray,
          100: '#000000',
          200: '#000000',
          300: '#000000',
          400: '#000000',
          500: '#000000',
          600: '#000000',
          700: '#000000',
          800: '#000000',
          900: '#000000',
          1000: '#000000',
          1100: '#000000',
          1200: '#000000'
        },
        blue: {
          ...darkColors.extra.blue,
          100: '#000000',
          200: '#000000',
          300: '#000000',
          400: '#000000',
          500: '#000000',
          600: '#000000',
          700: '#000000',
          800: '#000000',
          900: '#000000',
          1000: '#000000',
          1100: '#000000',
          1200: '#000000'
        },
        green: {
          ...darkColors.extra.green,
          100: '#000000',
          200: '#000000',
          300: '#000000',
          400: '#000000',
          500: '#000000',
          600: '#000000',
          700: '#000000',
          800: '#000000',
          900: '#000000',
          1000: '#000000',
          1100: '#000000',
          1200: '#000000'
        },
        red: {
          ...darkColors.extra.red,
          100: '#000000',
          200: '#000000',
          300: '#000000',
          400: '#000000',
          500: '#000000',
          600: '#000000',
          700: '#000000',
          800: '#000000',
          900: '#000000',
          1000: '#000000',
          1100: '#000000',
          1200: '#000000'
        }
      }
    },
    isDark: true
  }
} as const;

// All theme variants
export const themeVariants = {
  ...defaultThemes,
  ...highContrastThemes,
  ...colorBlindThemes
} as const;

// Helper functions
export const getThemeVariant = (name: string): ThemeVariant | undefined => {
  return Object.values(themeVariants).find(theme => theme.name === name);
};

export const isHighContrastTheme = (name: string): boolean => {
  return name.includes('High Contrast');
};

export const isColorBlindTheme = (name: string): boolean => {
  return name.includes('Color Blind');
};

export default themeVariants; 