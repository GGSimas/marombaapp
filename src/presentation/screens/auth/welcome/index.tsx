import { Bottomsheet, Button } from '@components';
import { useAppSafeArea, useAppTheme } from '@hooks';
import { ImageBackground, Text, View } from 'react-native';
import { loginbg } from '@assets';

export function WelcomeScreen() {
  const { colors, typography } = useAppTheme();
  const { bottom } = useAppSafeArea();
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        style={{ flex: 1, justifyContent: 'center' }}
        source={loginbg}
        resizeMode="cover"
      >
        <Text
          style={{
            ...typography.title_30,
            color: colors.white,
            alignSelf: 'center',
          }}
        >
          Marombalog
        </Text>
        <Text
          style={{
            ...typography.title_16,
            color: colors.white,
            alignSelf: 'center',
          }}
        >
          Transfome o seu treino
        </Text>
      </ImageBackground>
      <Bottomsheet visible>
        <View style={{ gap: 16, height: 200, marginBottom: bottom }}>
          <Button title="Acessar conta" onPress={() => {}} />
          <Button
            title="Criar nova conta"
            variant="outline"
            onPress={() => {}}
          />
          <Button
            title="Esqueci minha senha"
            variant="link"
            onPress={() => {}}
          />
        </View>
      </Bottomsheet>
    </View>
  );
}
