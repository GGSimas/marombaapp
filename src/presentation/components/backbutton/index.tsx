import { Pressable, PressableProps, StyleSheet } from 'react-native';
import { ArrowBack } from '../icon';
import { useAppTheme } from '@hooks';

export function BackButton({ ...rest }: Readonly<PressableProps>) {
  const { colors, radius } = useAppTheme();
  return (
    <Pressable
      hitSlop={40}
      style={[
        styles.container,
        {
          backgroundColor: colors.secondary,
          borderRadius: radius._20,
        },
      ]}
      {...rest}
    >
      <ArrowBack size={16} color={colors.white} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
