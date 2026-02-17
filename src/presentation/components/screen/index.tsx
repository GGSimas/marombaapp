import React from 'react';
import { ScrollViewContainer, ViewContainer } from './screen-container';
import { useAppSafeArea, useAppTheme } from '@hooks';
import { KeyboardAvoidingView, Platform, View } from 'react-native';

type ScreenProps = React.PropsWithChildren & {
  scrollable?: boolean;
};
export function Screen({
  scrollable = false,
  children,
}: Readonly<ScreenProps>) {
  const { colors } = useAppTheme();
  const { top, bottom } = useAppSafeArea();
  const Container = scrollable ? ScrollViewContainer : ViewContainer;

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior="padding"
      keyboardVerticalOffset={Platform.select({
        ios: 0,
        android: -100,
      })}
    >
      <Container backgroundColor={colors.background}>
        <View
          style={{
            flex: 1,
            paddingTop: top,
            paddingBottom: bottom,
            paddingHorizontal: 20,
          }}
        >
          {children}
        </View>
      </Container>
    </KeyboardAvoidingView>
  );
}
