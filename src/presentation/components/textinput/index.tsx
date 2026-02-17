import {
  Pressable,
  TextInput as RNTextInput,
  TextInputProps as RNTxtInputProps,
  Text,
  View,
} from 'react-native';

import { styles } from './styles';
import { useAppTheme } from '@hooks';
import { useRef } from 'react';

type TextInputProps = RNTxtInputProps & {
  label: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
};

export function TextInput({
  label,
  rightIcon,
  leftIcon,
  ...textInputProps
}: Readonly<TextInputProps>) {
  const { colors, radius, typography } = useAppTheme();
  const inputRef = useRef<RNTextInput>(null);

  return (
    <Pressable style={{ gap: 8 }} onPress={() => inputRef.current?.focus()}>
      <Text style={{ color: colors.foreground, ...typography.title_15 }}>
        {label}
      </Text>
      <View
        style={[
          styles.container,
          {
            backgroundColor: colors.input,
            borderRadius: radius._8,
          },
        ]}
      >
        {leftIcon}
        <RNTextInput
          ref={inputRef}
          style={{ color: colors.foreground, flex: 1, flexShrink: 1 }}
          placeholderTextColor={colors.mutedForeground}
          {...textInputProps}
        />
        {rightIcon}
      </View>
    </Pressable>
  );
}
