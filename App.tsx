import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {
  FlatList,
  RefreshControl,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

interface Item {
  name: string;
}

export default function App() {
  const [items, setItems] = useState<Item[]>([
    { name: 'box 1' },
    { name: 'box 2' },
    { name: 'box 3' },
    { name: 'box 4' },
    { name: 'box 5' },
  ]);
  const [loading, setLoading] = useState(false);
  const [counter, setCounter] = useState<number>(items.length + 1);

  const onListRefresh = () => {
    setLoading(true);
    setCounter(counter + 1);
    setItems([...items, { name: `box ${counter}` }]);
    setLoading(false);
  };

  return (
    <SafeAreaView>
      <StatusBar style="auto" />
      <FlatList
        style={{ marginTop: 20 }}
        keyExtractor={(el, i) => i.toString()}
        data={items}
        refreshing={loading}
        onRefresh={onListRefresh}
        renderItem={({ item }) => (
          <View style={styles.box}>
            <Text>{item.name}</Text>
          </View>
        )}
      />
    </SafeAreaView>
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
