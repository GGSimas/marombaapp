import { useAppSafeArea } from '@hooks';
import React from 'react';
import {
  View,
  ScrollView,
  StyleProp,
  ViewStyle,
  ColorValue,
} from 'react-native';

type ContainerProps = React.PropsWithChildren & {
  backgroundColor: ColorValue;
};

export function ViewContainer({
  children,
  backgroundColor,
}: Readonly<ContainerProps>) {
  const { top, bottom } = useAppSafeArea();
  return (
    <View
      style={[
        $container,
        {
          backgroundColor,
          paddingTop: top,
          paddingBottom: bottom,
          paddingHorizontal: 24,
        },
      ]}
    >
      {children}
    </View>
  );
}

export function ScrollViewContainer({
  children,
  backgroundColor,
}: Readonly<ContainerProps>) {
  const { top, bottom } = useAppSafeArea();
  return (
    <ScrollView
      style={[
        $container,
        {
          backgroundColor,
          paddingTop: top,
          paddingBottom: bottom,
          paddingHorizontal: 24,
        },
      ]}
      contentContainerStyle={{ flexGrow: 1 }}
      keyboardShouldPersistTaps="handled"
    >
      {children}
    </ScrollView>
  );
}

const $container: StyleProp<ViewStyle> = {
  flex: 1,
};
