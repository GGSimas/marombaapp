import { Bottomsheet, Button } from '@components';
import { useAppSafeArea, useAppTheme } from '@hooks';
import { ImageBackground, Text, View } from 'react-native';
import { loginbg } from '@assets';

import { styles } from './styles';

export function WelcomeScreen() {
  const { colors, typography } = useAppTheme();
  const { bottom } = useAppSafeArea();
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.content}
        source={loginbg}
        resizeMode="cover"
      >
        <Text
          style={[
            styles.text,
            {
              ...typography.title_30,
              color: colors.white,
            },
          ]}
        >
          Marombalog
        </Text>
        <Text
          style={[
            styles.text,
            {
              ...typography.title_16,
              color: colors.white,
            },
          ]}
        >
          Transfome o seu treino
        </Text>
      </ImageBackground>
      <Bottomsheet visible>
        <View style={[styles.actions, { marginBottom: bottom }]}>
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
