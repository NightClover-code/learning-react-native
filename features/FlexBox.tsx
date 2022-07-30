import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function FlexBox() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="inverted" />

      <View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'stretch',
          }}
        >
          <View
            style={{
              flexDirection: 'row',
            }}
          >
            <View style={styles.box1}>
              <Text style={styles.text}>1</Text>
            </View>
            <View style={styles.box2}>
              <Text style={styles.text}>2</Text>
            </View>
          </View>
          <View style={styles.box3}>
            <Text style={styles.text}>3</Text>
          </View>
        </View>

        <View style={styles.box4}>
          <Text style={styles.text}>4</Text>
        </View>
        <View style={styles.box5}>
          <Text style={styles.text}>5</Text>
        </View>
      </View>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'stretch',
          flex: 1,
        }}
      >
        <View style={styles.box6}>
          <Text style={styles.text}>6</Text>
        </View>
        <View style={styles.box7}>
          <Text style={styles.text}>7</Text>
        </View>
      </View>
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
  box1: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box2: {
    flex: 3,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box3: {
    flex: 1,
    backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box4: {
    backgroundColor: 'purple',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box5: {
    flex: 1,
    backgroundColor: 'magenta',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box6: {
    backgroundColor: 'cyan',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box7: {
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
