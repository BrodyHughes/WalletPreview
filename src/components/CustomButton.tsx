import React from 'react';
import { TouchableOpacity, Text, TouchableOpacityProps, ActivityIndicator, ViewStyle, TextStyle } from 'react-native';
import { buttonStyles } from '../styles/components';

interface CustomButtonProps extends TouchableOpacityProps {
  title: string;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  isLoading?: boolean;
  disabled?: boolean;
  buttonStyle?: ViewStyle;
  textStyle?: TextStyle;
}

export function CustomButton({
  title,
  variant = 'primary',
  size = 'medium',
  isLoading = false,
  disabled = false,
  buttonStyle,
  textStyle,
  ...props
}: CustomButtonProps) {
  return (
    <TouchableOpacity
      style={[buttonStyles.button, buttonStyles[variant], buttonStyles[size], disabled && buttonStyles.disabled, buttonStyle]}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <ActivityIndicator color={variant === 'outline' ? '#3498db' : '#fff'} />
      ) : (
        <Text
          style={[
            buttonStyles.text,
            buttonStyles[`${variant}Text`],
            buttonStyles[`${size}Text`],
            disabled && buttonStyles.disabledText,
            textStyle,
          ]}
        >
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
}
