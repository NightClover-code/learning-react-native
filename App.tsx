import { StyleSheet } from 'react-native';
import Input from './features/Input';

export default function App() {
  return <Input />;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  text: {
    color: '#000',
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
