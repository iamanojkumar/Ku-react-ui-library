export const lightColors = {
  // Brand Colors
  Brand: {
    primary: '#0066ff'
  },

  // Background Colors
  Background: {
    'surface-1': '#fbfdff',
    'surface-2': '#fafdff',
    'surface-3': '#f7f9fc',
    'surface-4': '#edf1f5',
    'surface-5': '#dae1e7'
  },

  // Text Colors
  text: {
    primary: '#133144',
    secondary: '#4d6577',
    tertiary: '#bbc7d1'
  },

  // Schematic Colors
  Schematic: {
    success: {
      'success-1': '#f3fcee',
      'success-2': '#73c900',
      'success-3': '#598200'
    },
    warning: {
      'warning-1': '#fff6eb',
      'warning-2': '#ea9400',
      'warning-3': '#9e5a00'
    },
    alert: {
      'alert-1': '#fff4f2',
      'alert-2': '#ff715b',
      'alert-3': '#d00900'
    },
    info: {
      'info-1': '#f1faff',
      'info-2': '#509aff',
      'info-3': '#0060e4'
    }
  },

  // State Colors
  state: {
    neutral: {
      active: '#fbfdff',
      hover: '#8da0af',
      idle: '#bbc7d1'
    },
    Brand: {
      active: '#0066ff'
    }
  },

  // Border Colors
  border: {
    b1: '#edf1f5',
    b2: '#dae1e7'
  },

  // Extra Colors
  extra: {
    neutrals: {
      white: '#ffffff',
      black: '#000000'
    },
    gray: {
      100: '#fbfdff',
      200: '#fafdff',
      300: '#f7f9fc',
      400: '#edf1f5',
      500: '#dae1e7',
      600: '#bbc7d1',
      700: '#8ea1b0',
      800: '#8da0af',
      900: '#869aa8',
      1000: '#728797',
      1100: '#4d6577',
      1200: '#133144'
    },
    blue: {
      100: '#f1faff',
      200: '#f0f9ff',
      300: '#ebf7ff',
      400: '#ddefff',
      500: '#c1e1ff',
      600: '#8fc7ff',
      700: '#539aff',
      800: '#509aff',
      900: '#3f93ff',
      1000: '#0082ff',
      1100: '#0060e4',
      1200: '#0025a7'
    },
    green: {
      100: '#f3fcee',
      200: '#f2fced',
      300: '#edfae7',
      400: '#e1f7d6',
      500: '#c8f0b3',
      600: '#9ee475',
      700: '#73ca00',
      800: '#73c900',
      900: '#73c000',
      1000: '#71a900',
      1100: '#598200',
      1200: '#184900'
    },
    red: {
      100: '#fff4f2',
      200: '#fff4f1',
      300: '#fff0ed',
      400: '#ffe6e1',
      500: '#ffd2ca',
      600: '#ffafa2',
      700: '#ff735d',
      800: '#ff715b',
      900: '#ff624d',
      1000: '#ff2b22',
      1100: '#d00900',
      1200: '#710002'
    }
  }
};

export const darkColors = {
  // Brand Colors
  Brand: {
    primary: '#3385ff'
  },

  // Background Colors
  Background: {
    'surface-1': '#1a1a1a',
    'surface-2': '#262626',
    'surface-3': '#333333',
    'surface-4': '#404040',
    'surface-5': '#595959'
  },

  // Text Colors
  text: {
    primary: '#ffffff',
    secondary: 'rgba(255, 255, 255, 0.7)',
    tertiary: 'rgba(255, 255, 255, 0.5)'
  },

  // Schematic Colors
  Schematic: {
    success: {
      'success-1': '#1b5e20',
      'success-2': '#4caf50',
      'success-3': '#81c784'
    },
    warning: {
      'warning-1': '#e65100',
      'warning-2': '#ff9800',
      'warning-3': '#ffb74d'
    },
    alert: {
      'alert-1': '#b71c1c',
      'alert-2': '#f44336',
      'alert-3': '#e57373'
    },
    info: {
      'info-1': '#0d47a1',
      'info-2': '#2196f3',
      'info-3': '#64b5f6'
    }
  },

  // State Colors
  state: {
    neutral: {
      active: '#404040',
      hover: '#595959',
      idle: '#737373'
    },
    Brand: {
      active: '#3385ff'
    }
  },

  // Border Colors
  border: {
    b1: '#404040',
    b2: '#595959'
  },

  // Extra Colors
  extra: {
    neutrals: {
      white: '#ffffff',
      black: '#000000'
    },
    gray: {
      100: '#1a1a1a',
      200: '#262626',
      300: '#333333',
      400: '#404040',
      500: '#595959',
      600: '#737373',
      700: '#8c8c8c',
      800: '#a6a6a6',
      900: '#bfbfbf',
      1000: '#d9d9d9',
      1100: '#f2f2f2',
      1200: '#ffffff'
    },
    blue: {
      100: '#0d47a1',
      200: '#1565c0',
      300: '#1976d2',
      400: '#1e88e5',
      500: '#2196f3',
      600: '#42a5f5',
      700: '#64b5f6',
      800: '#90caf9',
      900: '#bbdefb',
      1000: '#e3f2fd',
      1100: '#f5f9ff',
      1200: '#ffffff'
    },
    green: {
      100: '#1b5e20',
      200: '#2e7d32',
      300: '#388e3c',
      400: '#43a047',
      500: '#4caf50',
      600: '#66bb6a',
      700: '#81c784',
      800: '#a5d6a7',
      900: '#c8e6c9',
      1000: '#e8f5e9',
      1100: '#f1f8e9',
      1200: '#ffffff'
    },
    red: {
      100: '#b71c1c',
      200: '#c62828',
      300: '#d32f2f',
      400: '#e53935',
      500: '#f44336',
      600: '#ef5350',
      700: '#e57373',
      800: '#ef9a9a',
      900: '#ffcdd2',
      1000: '#ffebee',
      1100: '#ffefef',
      1200: '#ffffff'
    }
  }
};

export type ColorToken = keyof typeof lightColors;

type ColorVariants = {
  [K in ColorToken]: typeof lightColors[K]
};

type VariantKey<T extends ColorToken> = keyof ColorVariants[T];

export function getColorValue<T extends ColorToken>(
  theme: 'light' | 'dark',
  token: T,
  variant?: VariantKey<T>
): string {
  const colors = theme === 'light' ? lightColors : darkColors;
  const value = colors[token];
  
  if (variant) {
    if (typeof value === 'object' && value !== null) {
      return (value as any)[variant]?.toString() || '';
    }
    return '';
  }
  
  if (typeof value === 'string') {
    return value;
  }
  
  return '';
}

export default {
  light: lightColors,
  dark: darkColors,
  getColorValue
}; 