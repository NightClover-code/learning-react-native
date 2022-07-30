import { useState } from 'react';
import {
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default function App() {
  const [items, setItems] = useState([
    { key: 1, item: 'box 1' },
    { key: 2, item: 'box 2' },
    { key: 3, item: 'box 3' },
    { key: 4, item: 'box 4' },
    { key: 5, item: 'box 5' },
  ]);
  const [loading, setLoading] = useState(false);

  const onListRefresh = () => {
    setLoading(true);
    setItems([...items, { key: 6, item: 'box 6' }]);
    setLoading(false);
  };

  return (
    <ScrollView
      style={styles.container}
      refreshControl={
        <RefreshControl refreshing={loading} onRefresh={onListRefresh} />
      }
    >
      {items.map(el => (
        <View style={styles.box} key={el.key}>
          <Text>{el.item}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
  },
  text: {
    color: '#000',
    margin: 10,
    fontSize: 20,
  },
  box: {
    height: 200,
    margin: 10,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
