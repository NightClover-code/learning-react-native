import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import RootStack from './src/navigators/RootStack';

export default function App() {
  let [fontsLoaded] = useFonts({
    'Poppins-bold': require('./assets/fonts/Poppins-Bold.ttf'),
    'Poppins-regular': require('./assets/fonts/Poppins-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return <RootStack />;
}
