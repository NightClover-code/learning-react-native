import { StackScreenProps } from '@react-navigation/stack';
import { FC } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { RootStackParamList } from '../App';

type HomeProps = StackScreenProps<RootStackParamList, 'Home'>;

const Home: FC<HomeProps> = ({ navigation }) => {
  const onPressNavigateHandler = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to the React Native Tutorial!</Text>

      <Pressable onPress={onPressNavigateHandler}>
        <Text style={styles.text}>Login</Text>
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
    color: '#000',
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

export default Home;
