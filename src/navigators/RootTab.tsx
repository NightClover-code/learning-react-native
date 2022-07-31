import { NavigationContainer } from '@react-navigation/native';
import Home from '../screens/Home';
import Login from '../screens/Login';
import Header from '../components/Header';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

export type RootStackParamList = {
  Login: undefined;
  Home: undefined;
};

const Tab = createBottomTabNavigator<RootStackParamList>();

export default function RootBottomTab() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home">
        <Tab.Screen
          name="Home"
          component={Home}
          options={{ header: () => <Header /> }}
        />
        <Tab.Screen
          name="Login"
          component={Login}
          options={{ header: () => <Header /> }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
