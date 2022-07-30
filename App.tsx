import { StyleSheet } from 'react-native';
import Touchable from './features/Touchable';

export default function App() {
  return <Touchable />;
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
