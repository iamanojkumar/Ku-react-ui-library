export type BreakpointKey = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export interface Breakpoints {
  values: Record<BreakpointKey, number>;
  up: (key: BreakpointKey) => string;
  down: (key: BreakpointKey) => string;
  between: (start: BreakpointKey, end: BreakpointKey) => string;
  container: {
    sm: string;
    md: string;
    lg: string;
    xl: string;
    '2xl': string;
  };
  devices: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
}

export const breakpoints: Breakpoints = {
  // Breakpoint values (in pixels)
  values: {
    xs: 0,       // 0px
    sm: 600,     // 600px
    md: 900,     // 900px
    lg: 1200,    // 1200px
    xl: 1536,    // 1536px
  },

  // Media query helpers
  up: (key: BreakpointKey) => 
    `@media (min-width: ${breakpoints.values[key]}px)`,
  
  down: (key: BreakpointKey) => 
    `@media (max-width: ${breakpoints.values[key] - 0.05}px)`,
  
  between: (start: BreakpointKey, end: BreakpointKey) => 
    `@media (min-width: ${breakpoints.values[start]}px) and (max-width: ${breakpoints.values[end] - 0.05}px)`,

  // Container max-widths
  container: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },

  // Common device breakpoints
  devices: {
    mobile: '@media (max-width: 639px)',
    tablet: '@media (min-width: 640px) and (max-width: 1023px)',
    desktop: '@media (min-width: 1024px)',
  },
}; 