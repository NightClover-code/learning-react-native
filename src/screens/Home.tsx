import { StackScreenProps } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { FC, useEffect, useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import GlobalStyle from '../components/GlobalStyle';
import { RootStackParamList } from '../navigators/RootStack';
import { getAsyncUsername } from '../utils/async-storage';

type HomeProps = StackScreenProps<RootStackParamList, 'Home'>;

const Home: FC<HomeProps> = ({ navigation }) => {
  const [username, setUsername] = useState<string>('');
  const [isLogged, setIsLogged] = useState<boolean>(false);

  const onPressNavigateHandler = () => {
    navigation.navigate('Login');
  };

  const getData = async () => {
    const data = await getAsyncUsername();

    if (!data) return null;

    setIsLogged(true);
    setUsername(data!);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />

      <Text style={styles.text}>
        {!isLogged
          ? 'Please login to the application.'
          : `Welcome to the React Native Tutorial ${username}!`}
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
    ...GlobalStyle.CustomFont,
  },
});

export default Home;
