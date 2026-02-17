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
  return (
    <View
      style={[
        $container,
        {
          backgroundColor,
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
  return (
    <ScrollView
      style={[$container, { backgroundColor }]}
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
