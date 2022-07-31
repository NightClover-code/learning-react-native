import React, { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Header: FC = () => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.text}>React Native Tutorial</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    marginTop: 30,
    height: 50,
    backgroundColor: '#eee',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#000',
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

export default Header;
