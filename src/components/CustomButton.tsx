import React, { FC } from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';

interface Props {
  onPress: () => void;
}

const CustomButton: FC<Props> = ({ onPress }) => {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.text}>Login</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 200,
    color: 'white',
    borderRadius: 30,
    backgroundColor: 'orange',
  },
  text: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
    margin: 10,
  },
});

export default CustomButton;
