import {
  BackButton,
  Button,
  Screen,
  SecurityTextInput,
  TextInput,
} from '@components';
import { useAppTheme } from '@hooks';
import { Text, View } from 'react-native';

export function SignUpScreen() {
  const { colors, typography } = useAppTheme();
  return (
    <Screen scrollable>
      <BackButton onPress={() => {}} />
      <View style={{ marginTop: 20 }}>
        <Text style={{ ...typography.title_30, color: colors.foreground }}>
          Crie sua conta
        </Text>
        <Text style={{ ...typography.title_16, color: colors.mutedForeground }}>
          Preencha seus dados para começar a treinar e monitorar sua evolução
        </Text>
      </View>

      <View style={{ marginTop: 32, gap: 12 }}>
        <TextInput
          label="Nome de usuário"
          placeholder="Nome que vai aparecer para todos"
        />
        <TextInput label="E-mail" placeholder="example@email.com" />
        <SecurityTextInput label="Senha" placeholder="*******" />
        <SecurityTextInput label="Confirme sua senha" placeholder="*******" />
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: 'flex-end',
          alignItems: 'center',
          gap: 24,
        }}
      >
        <Button title="Cadastrar" onPress={() => {}} />
        <Text style={{ ...typography.title_16, color: colors.mutedForeground }}>
          Já possui uma conta?{' '}
          <Text
            style={{
              ...typography.title_16,
              fontWeight: 'bold',
              color: colors.primary,
            }}
            onPress={() => {}}
          >
            Fazer login
          </Text>
        </Text>
      </View>
    </Screen>
  );
}
