import { Routes } from '@routes';
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

function App() {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle="light-content" translucent />
      <Routes />
    </SafeAreaProvider>
  );
}

export default App;
