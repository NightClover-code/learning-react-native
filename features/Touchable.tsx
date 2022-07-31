import { useState } from 'react';
import {
  Alert,
  Button,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';

export default function Touchable() {
  const [name, setName] = useState<string>('');
  const [isLogged, setIsLogged] = useState<boolean>(false);
  const [showWarning, setWarning] = useState<boolean>(false);

  const onPressHandler = () => {
    if (name.length > 2) {
      setIsLogged(!isLogged);
    } else {
      setWarning(true);
    }
  };

  return (
    <View style={styles.container}>
      <Modal
        visible={showWarning}
        transparent
        onRequestClose={() => setWarning(false)}
      >
        <View style={styles.warningModalContainer}>
          <View style={styles.warningModal}>
            <Text style={styles.text}>
              The name must be at least 3 chars long!
            </Text>

            <Pressable>
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
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.button}
        onPress={onPressHandler}
      >
        <Text style={styles.text}>{isLogged ? 'clear' : 'submit'}</Text>
      </TouchableOpacity>
      {isLogged && (
        <Text style={styles.text}>You are registered as {name}</Text>
      )}
    </View>
  );
}

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
    backgroundColor: 'orange',
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
});
