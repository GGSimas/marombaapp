import {
  ArrowBack,
  BackButton,
  Button,
  Screen,
  SecurityTextInput,
  TextInput,
} from '@components';
import { useAppTheme } from '@hooks';
import { Text, View } from 'react-native';

export function LoginScreen() {
  const { colors, typography } = useAppTheme();
  return (
    <>
      <Screen scrollable>
        <View style={{ marginTop: 40, marginBottom: 32 }}>
          <BackButton onPress={() => {}} />
        </View>

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
