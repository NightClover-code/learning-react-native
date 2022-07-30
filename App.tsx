import { Button, Linking, StyleSheet, Text, View } from 'react-native';
import AdvancedList from './features/AdvancedList';

export default function App() {
  return <AdvancedList />;
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
