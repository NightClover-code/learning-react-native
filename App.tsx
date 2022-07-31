import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import RootBottomTab from './src/navigators/RootTab';

export default function App() {
  let [fontsLoaded] = useFonts({
    'Poppins-bold': require('./assets/fonts/Poppins-Bold.ttf'),
    'Poppins-regular': require('./assets/fonts/Poppins-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return <RootBottomTab />;
}
