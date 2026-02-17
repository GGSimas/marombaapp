import { LoginScreen, SignUpScreen, WelcomeScreen } from '@screens';
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

function App() {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle="light-content" translucent />
      <SignUpScreen />
    </SafeAreaProvider>
  );
}

export default App;
