const colors = {
  background: '#0b0f12',
  foreground: '#e6f7ee',
  primary: '#00c853',
  primaryForeground: '#001a09',
  border: '#ffffff2c',
  input: '#0f1416',
  secondary: '#0e1a17',
  secondaryForeground: '#cfffe0',
  muted: '#111416',
  mutedForeground: '#88958e',
  success: '#00e676',
  successForeground: '#00230a',
  accent: '#66ffb2',
  accentForeground: '#00220a',
  destructive: '#ff5252',
  destructiveForeground: '#2a0000',
  warning: '#ffb300',
  warningForeground: '#2a1a00',
  card: '#0f1615',
  cardForeground: '#e9faf0',
  sidebar: '#07100e',
  sidebarForeground: '#bfecd1',
  sidebarPrimary: '#042915',
  sidebarPrimaryForeground: '#a8ffd1',
};

const radius = {
  _6: 6,
  _8: 8,
  _12: 12,
  _20: 20,
};

const typography = {};

export const theme = {
  colors,
  radius,
  typography,
};

export type Theme = typeof theme;
