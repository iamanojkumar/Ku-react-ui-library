export const radius = {
  // Base radius tokens
  base: {
    none: '0',
    xs: '2px',
    sm: '4px',
    md: '6px',
    lg: '8px',
    xl: '12px',
    '2xl': '16px',
    '3xl': '24px',
    full: '9999px'
  },

  // Component-specific radius tokens
  components: {
    button: {
      sm: '4px',
      md: '6px',
      lg: '8px',
      full: '9999px'
    },
    card: {
      sm: '4px',
      md: '8px',
      lg: '12px'
    },
    input: {
      sm: '4px',
      md: '6px',
      lg: '8px'
    },
    modal: {
      sm: '8px',
      md: '12px',
      lg: '16px'
    },
    tooltip: {
      sm: '4px',
      md: '6px',
      lg: '8px'
    }
  },

  // Radius presets
  presets: {
    button: {
      sm: '4px',
      md: '6px',
      lg: '8px',
      pill: '9999px'
    },
    card: {
      sm: '4px',
      md: '8px',
      lg: '12px'
    },
    input: {
      sm: '4px',
      md: '6px',
      lg: '8px'
    },
    modal: {
      sm: '8px',
      md: '12px',
      lg: '16px'
    },
    tooltip: {
      sm: '4px',
      md: '6px',
      lg: '8px'
    }
  }
} as const;

export type RadiusToken = keyof typeof radius;
export type RadiusPreset = keyof typeof radius.presets; 