import React, { useState } from 'react';
import { Pressable, TextInputProps as RNTxtInputProps } from 'react-native';
import { TextInput } from '../textinput';
import { EyeOff, EyeOn } from '../icon';
import { useAppTheme } from '@hooks';

type SecurityTextInputProps = RNTxtInputProps & {
  label: string;
};

export function SecurityTextInput({
  label,
  ...textInpurProps
}: Readonly<SecurityTextInputProps>) {
  const [isSecurityVisible, setIsSecurityVisible] = useState(true);
  const { colors } = useAppTheme();

  function renderIcon() {
    return (
      <Pressable
        hitSlop={40}
        onPress={() => setIsSecurityVisible(prev => !prev)}
      >
        {isSecurityVisible ? (
          <EyeOn size={24} color={colors.foreground} />
        ) : (
          <EyeOff size={24} color={colors.foreground} />
        )}
      </Pressable>
    );
  }
  return (
    <TextInput
      label={label}
      secureTextEntry={isSecurityVisible}
      rightIcon={renderIcon()}
      {...textInpurProps}
    />
  );
}
