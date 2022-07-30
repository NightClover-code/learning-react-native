import { useState } from 'react';
import {
  FlatList,
  RefreshControl,
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
  const [currentItem, setCurrentItem] = useState<Item>({ name: '' });

  const onListRefresh = () => {
    setLoading(true);
    setItems([...items, { name: 'box 6' }]);
    setLoading(false);
  };

  return (
    <FlatList
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
    // <ScrollView
    //   style={styles.container}
    //   refreshControl={
    //     <RefreshControl refreshing={loading} onRefresh={onListRefresh} />
    //   }
    // >

    // </ScrollView>
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
