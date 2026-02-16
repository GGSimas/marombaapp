import React from 'react';
import { ScrollViewContainer, ViewContainer } from './screen-container';
import { useAppTheme } from '@hooks';

type ScreenProps = React.PropsWithChildren & {
  scrollable?: boolean;
};
export function Screen({
  scrollable = false,
  children,
}: Readonly<ScreenProps>) {
  const { colors } = useAppTheme();
  const Container = scrollable ? ScrollViewContainer : ViewContainer;

  return <Container backgroundColor={colors.background}>{children}</Container>;
}
