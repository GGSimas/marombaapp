import { useAppTheme } from '@hooks';
import React from 'react';
import {
  Pressable,
  PressableProps,
  StyleProp,
  Text,
  ViewStyle,
  TextStyle,
} from 'react-native';

type ButtonVariant = 'solid' | 'outline' | 'link';

type ButtonProps = PressableProps & {
  title: string;
  variant?: ButtonVariant;
  disabled?: boolean;
};

type ButtonVariantStyle = {
  container: StyleProp<ViewStyle>;
  content: StyleProp<TextStyle>;
};

export function Button({
  title,
  variant = 'solid',
  disabled = false,
  ...rest
}: Readonly<ButtonProps>) {
  const { colors, radius, typography } = useAppTheme();

  const buttonFactoryStyle: Record<
    ButtonVariant,
    { default: ButtonVariantStyle; disabled: ButtonVariantStyle }
  > = {
    solid: {
      default: {
        container: {
          width: '100%',
          backgroundColor: colors.primary,
          height: 56,
          justifyContent: 'center',
          borderRadius: radius._20,
        },
        content: {
          ...typography.button_title,
          color: colors.primaryForeground,
          alignSelf: 'center',
        },
      },
      disabled: {
        container: {},
        content: {},
      },
    },
    outline: {
      default: {
        container: {
          width: '100%',
          backgroundColor: colors.transparent,
          borderWidth: 1,
          borderColor: colors.secondaryForeground,
          borderRadius: radius._20,
          height: 56,
          justifyContent: 'center',
        },
        content: {
          ...typography.button_title,
          color: colors.secondaryForeground,
          alignSelf: 'center',
        },
      },
      disabled: {
        container: {},
        content: {},
      },
    },
    link: {
      default: {
        container: {
          width: '100%',
          backgroundColor: colors.transparent,
          height: 56,
          justifyContent: 'center',
        },
        content: {
          ...typography.button_title,
          color: colors.primary,
          alignSelf: 'center',
        },
      },
      disabled: {
        container: {},
        content: {},
      },
    },
  };

  const buttonPresset =
    buttonFactoryStyle[variant][disabled ? 'disabled' : 'default'];
  return (
    <Pressable style={buttonPresset.container} {...rest}>
      <Text style={buttonPresset.content}>{title}</Text>
    </Pressable>
  );
}
