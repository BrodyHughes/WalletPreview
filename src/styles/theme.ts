import { StyleSheet, TextStyle } from 'react-native';

type FontWeight = TextStyle['fontWeight'];

export const typography = {
  system: {
    regular: {
      fontFamily: 'System',
      fontWeight: '400' as FontWeight,
    },
    medium: {
      fontFamily: 'System',
      fontWeight: '500' as FontWeight,
    },
    semibold: {
      fontFamily: 'System',
      fontWeight: '600' as FontWeight,
    },
    bold: {
      fontFamily: 'System',
      fontWeight: '700' as FontWeight,
    },
  },
  sizes: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 18,
    xl: 20,
    xxl: 24,
  },
} as const;

export const globalStyles = StyleSheet.create({
  // Text styles
  textRegular: {
    fontFamily: 'System',
    fontWeight: '400',
  },
  textMedium: {
    fontFamily: 'System',
    fontWeight: '500',
  },
  textSemibold: {
    fontFamily: 'System',
    fontWeight: '600',
  },
  textBold: {
    fontFamily: 'System',
    fontWeight: '700',
  },

  // Common text styles
  heading: {
    fontFamily: 'System',
    fontWeight: '700',
    fontSize: typography.sizes.xxl,
  },
  subheading: {
    fontFamily: 'System',
    fontWeight: '600',
    fontSize: typography.sizes.xl,
  },
  body: {
    fontFamily: 'System',
    fontWeight: '400',
    fontSize: typography.sizes.md,
  },
  caption: {
    fontFamily: 'System',
    fontWeight: '400',
    fontSize: typography.sizes.sm,
  },
});
