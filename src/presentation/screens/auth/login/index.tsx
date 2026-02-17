import {
  ArrowBack,
  Button,
  Screen,
  SecurityTextInput,
  TextInput,
} from '@components';
import { useAppTheme } from '@hooks';
import { useState } from 'react';
import { Pressable, Text, View } from 'react-native';

export function LoginScreen() {
  const { colors, radius, typography } = useAppTheme();
  return (
    <>
      <Screen scrollable>
        <Pressable
          hitSlop={40}
          style={{
            backgroundColor: colors.secondary,
            marginTop: 40,
            width: 30,
            height: 30,
            borderRadius: radius._20,
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 32,
          }}
        >
          <ArrowBack size={16} color={colors.white} />
        </Pressable>

        <View style={{ marginBottom: 32 }}>
          <Text style={{ ...typography.title_30, color: colors.foreground }}>
            Bem vindo de volta
          </Text>
          <Text
            style={{ ...typography.title_16, color: colors.mutedForeground }}
          >
            Insira seus dados para acessar sua conta
          </Text>
        </View>

        <View
          style={{
            gap: 24,
            justifyContent: 'center',
            alignItems: 'flex-end',
          }}
        >
          <TextInput label="E-mail" placeholder="example@email.com" />

          <SecurityTextInput label="Senha" placeholder="********" />
          <Text
            style={{ ...typography.title_15, color: colors.primary }}
            onPress={() => {}}
          >
            Esqueci minha senha
          </Text>
        </View>
        <View style={{ flex: 1, justifyContent: 'flex-end' }}>
          <Button title="Entrar" onPress={() => {}} />
        </View>
      </Screen>
    </>
  );
}
