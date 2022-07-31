import { StatusBar } from 'expo-status-bar';
import { FC, useState } from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import {
  Image,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { RootStackParamList } from '../navigators/RootStack';
import CustomButton from '../components/CustomButton';
import GlobalStyle from '../components/GlobalStyle';
import { setAsyncUsername } from '../utils/async-storage';

type LoginProps = StackScreenProps<RootStackParamList, 'Login'>;

const Login: FC<LoginProps> = ({ navigation }) => {
  const [name, setName] = useState<string>('');
  const [showWarning, setWarning] = useState<boolean>(false);

  const onPressHandler = () => {
    if (name.length > 2) {
      setAsyncUsername(navigation, name);
    } else {
      setWarning(true);
    }
  };

  const onPressNavigateHandler = () => {
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <Modal
        visible={showWarning}
        transparent
        animationType="fade"
        hardwareAccelerated
        onRequestClose={() => setWarning(false)}
      >
        <View style={styles.warningModalContainer}>
          <View style={styles.warningModal}>
            <Text style={styles.text}>
              The name must be at least 3 chars long!
            </Text>

            <Pressable onPress={() => setWarning(false)}>
              <Text style={styles.text}>OK</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      <Text style={styles.text}>Please write your name:</Text>
      <TextInput
        style={styles.input}
        placeholder="e.g. John"
        onChangeText={val => setName(val)}
      />
      <CustomButton onPress={onPressHandler} />

      <Pressable onPress={onPressNavigateHandler}>
        <Text style={{ ...styles.text, color: 'blue' }}>Back to Home</Text>
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
    ...GlobalStyle.CustomFont,
  },
  input: {
    width: 250,
    height: 50,
    fontSize: 20,
    borderWidth: 1,
    borderColor: '#555',
    borderRadius: 5,
    paddingHorizontal: 5,
    marginBottom: 15,
  },
  button: {
    width: 200,
    color: 'white',
    borderRadius: 30,
  },
  warningModalContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00000099',
  },
  warningModal: {
    width: 300,
    height: 300,
    backgroundColor: '#fff',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#555',
    borderRadius: 5,
    justifyContent: 'center',
  },
  image: {
    width: 100,
    height: 100,
    margin: 10,
  },
});

export default Login;
