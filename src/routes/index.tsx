import { NavigationContainer } from '@react-navigation/native';
import { AuthStack } from './authstack';

export type { AuthScreenNavigationProps } from './authstack';

export function Routes() {
  return (
    <NavigationContainer>
      <AuthStack />
    </NavigationContainer>
  );
}
