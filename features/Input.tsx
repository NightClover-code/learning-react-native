import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function Input() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Please write your name:</Text>
      <TextInput style={styles.input} placeholder="name" />
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
  },
});
