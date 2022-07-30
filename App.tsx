import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {
  FlatList,
  RefreshControl,
  SafeAreaView,
  ScrollView,
  SectionList,
  StyleSheet,
  Text,
  View,
} from 'react-native';

interface Item {
  name: string;
}

interface Person {
  name: string;
  data: string[];
}

export default function App() {
  const [items, setItems] = useState<Item[]>([
    { name: 'box 1' },
    { name: 'box 2' },
    { name: 'box 3' },
    { name: 'box 4' },
    { name: 'box 5' },
  ]);
  const [people, setPeople] = useState<Person[]>([
    { name: 'John Doe', data: ['football, basketball'] },
    { name: 'Max Ele', data: ['football, tennis'] },
    { name: 'Adhan Omar', data: ['football, swimming'] },
    { name: 'Lerre Sonia', data: ['football, baseball'] },
  ]);

  const [loading, setLoading] = useState(false);
  const [counter, setCounter] = useState<number>(items.length + 1);

  const onListRefresh = () => {
    setLoading(true);
    // setCounter(counter + 1);
    // setItems([...items, { name: `box ${counter}` }]);
    setLoading(false);
  };

  return (
    <SafeAreaView>
      <StatusBar style="auto" />
      <SectionList
        style={{ marginTop: 20 }}
        keyExtractor={(el, i) => i.toString()}
        sections={people}
        refreshing={loading}
        onRefresh={onListRefresh}
        renderItem={({ item }) => (
          <View style={styles.box}>
            <Text>{item}</Text>
          </View>
        )}
        renderSectionHeader={({ section }) => (
          <View style={styles.header}>
            <Text>{section.name}</Text>
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
  header: {
    height: 100,
    backgroundColor: 'cyan',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
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
