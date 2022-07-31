import { useState } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Styles() {
  const [counter, setCounter] = useState<number>(0);

  const onClickHandler = () => {
    setCounter(counter + 5);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{counter}</Text>
      <TouchableOpacity style={styles.button} onPress={onClickHandler}>
        <Text style={styles.text}>cac</Text>
      </TouchableOpacity>
      <Text style={styles.text}>You clicked {counter} times</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '50%',
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
  button: {
    width: 200,
    backgroundColor: 'orange',
    borderRadius: 100,
  },
});
