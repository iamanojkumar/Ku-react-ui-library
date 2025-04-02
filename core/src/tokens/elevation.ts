export const elevation = {
  // Shadow tokens
  shadow: {
    none: 'none',
    xs: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    sm: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
    outline: '0 0 0 3px rgba(66, 153, 225, 0.5)'
  },

  // Z-index tokens
  zIndex: {
    negative: -1,
    zero: 0,
    low: 10,
    medium: 20,
    high: 30,
    higher: 40,
    highest: 50,
    modal: 100,
    tooltip: 200,
    popover: 300,
    dropdown: 400,
    overlay: 500
  },

  // Elevation presets
  presets: {
    card: {
      shadow: 'md',
      zIndex: 'zero'
    },
    dropdown: {
      shadow: 'lg',
      zIndex: 'dropdown'
    },
    modal: {
      shadow: '2xl',
      zIndex: 'modal'
    },
    tooltip: {
      shadow: 'sm',
      zIndex: 'tooltip'
    },
    popover: {
      shadow: 'lg',
      zIndex: 'popover'
    },
    overlay: {
      shadow: 'none',
      zIndex: 'overlay'
    }
  }
} as const;

export type ElevationToken = keyof typeof elevation;
export type ElevationPreset = keyof typeof elevation.presets; 