import { StackScreenProps } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { FC } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { RootStackParamList } from '../navigators/RootStack';

type HomeProps = StackScreenProps<RootStackParamList, 'Home'>;

const Home: FC<HomeProps> = ({ navigation, route }) => {
  const userName = route.params?.userName;

  const onPressNavigateHandler = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />

      <Text style={styles.text}>
        Welcome to the React Native Tutorial {userName && userName}!
      </Text>

      <Pressable onPress={onPressNavigateHandler}>
        <Text style={{ ...styles.text, color: 'blue' }}>Login</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderColor: '#000',
    borderWidth: 1,
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

export default Home;
