import React, { FC } from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';

interface Props {
  isLogged: boolean;
  onPress: () => void;
}

const CustomButton: FC<Props> = ({ isLogged, onPress }) => {
  return (
    <Pressable
      style={() => [
        { backgroundColor: isLogged ? 'red' : 'green' },
        styles.button,
      ]}
      onPress={onPress}
    >
      <Text style={styles.text}>{isLogged ? 'clear' : 'submit'}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 200,
    color: 'white',
    borderRadius: 30,
  },
  text: {
    color: '#000',
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

export default CustomButton;
