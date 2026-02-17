import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import { LoginScreen, SignUpScreen, WelcomeScreen } from '@screens';

export type AuthStackParams = {
  welcome: undefined;
  login: undefined;
  signup: undefined;
};

export type AuthScreenNavigationProps<RouteName extends keyof AuthStackParams> =
  NativeStackScreenProps<AuthStackParams, RouteName>;

const { Navigator, Screen } = createNativeStackNavigator<AuthStackParams>();

export function AuthStack() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="welcome" component={WelcomeScreen} />
      <Screen name="login" component={LoginScreen} />
      <Screen name="signup" component={SignUpScreen} />
    </Navigator>
  );
}
