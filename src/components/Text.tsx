import React from 'react';
import { Text as RNText, TextProps } from 'react-native';
import { globalStyles } from '../styles/theme';

export function Text({ style, ...props }: TextProps) {
  return <RNText style={[globalStyles.body, style]} {...props} />;
}
