import { useAppTheme } from '@hooks';
import React, { useEffect, useRef } from 'react';
import { Animated, Pressable } from 'react-native';

import { styles } from './styles';
const TRANSLATE_Y_DEFAULT_VALUE = 999;

type BottomsheetProps = React.PropsWithChildren & {
  visible?: boolean;
  dismisable?: boolean;
  onRequestClose?: () => void;
};
export function Bottomsheet({
  children,
  visible = false,
  dismisable = false,
  onRequestClose,
}: Readonly<BottomsheetProps>) {
  const { colors, radius } = useAppTheme();
  const translateY = useRef(
    new Animated.Value(TRANSLATE_Y_DEFAULT_VALUE),
  ).current;

  useEffect(() => {
    Animated.timing(translateY, {
      toValue: visible ? 0 : TRANSLATE_Y_DEFAULT_VALUE,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  }, [visible, translateY]);

  const handleCloseAnimation = () => {
    if (!dismisable) return;
    onRequestClose?.();
  };

  return (
    <Animated.View
      style={[
        styles.sheet,
        {
          borderTopLeftRadius: radius._20,
          borderTopRightRadius: radius._20,
          backgroundColor: colors.card,
          transform: [{ translateY }],
        },
      ]}
    >
      {dismisable && (
        <Pressable
          style={[
            styles.backDrop,
            {
              backgroundColor: colors.accent,
              borderRadius: radius._12,
              marginBottom: 16,
            },
          ]}
          onPress={handleCloseAnimation}
        />
      )}
      {children}
    </Animated.View>
  );
}
