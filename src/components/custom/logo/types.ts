export type LogoColorScheme = {
  primary: string;
  secondary: string;
  accent: string;
  text: string;
};

export type LogoColorSchemeName = 'black' | 'orange' | 'gradient';

export type LogoSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type LogoVariant = 'full' | 'compact' | 'icon';

export type SizeConfig = {
  iconSize: number;
  textSize: string;
  subTextSize: string;
  spacing: string;
};

export const COLOR_SCHEMES: Record<LogoColorSchemeName, LogoColorScheme> = {
  black: {
    primary: '#1f2937', // Gray-800
    secondary: '#f97316', // Orange-500
    accent: '#fb923c', // Orange-400
    text: '#111827', // Gray-900
  },
  orange: {
    primary: '#ea580c', // Orange-600
    secondary: '#1f2937', // Gray-800
    accent: '#fed7aa', // Orange-200
    text: '#1f2937', // Gray-800
  },
  gradient: {
    primary: '#1f2937', // Gray-800
    secondary: '#f97316', // Orange-500
    accent: '#fb923c', // Orange-400
    text: '#111827', // Gray-900
  },
};

export const SIZE_CONFIGS: Record<LogoSize, SizeConfig> = {
  xs: {
    iconSize: 28,
    textSize: 'text-sm',
    subTextSize: 'text-xs',
    spacing: 'space-x-2',
  },
  sm: {
    iconSize: 36,
    textSize: 'text-base',
    subTextSize: 'text-xs',
    spacing: 'space-x-3',
  },
  md: {
    iconSize: 48,
    textSize: 'text-xl',
    subTextSize: 'text-sm',
    spacing: 'space-x-4',
  },
  lg: {
    iconSize: 64,
    textSize: 'text-2xl',
    subTextSize: 'text-base',
    spacing: 'space-x-4',
  },
  xl: {
    iconSize: 80,
    textSize: 'text-3xl',
    subTextSize: 'text-lg',
    spacing: 'space-x-5',
  },
};
