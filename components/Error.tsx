import React from 'react';
import { Button, Pressable, StyleSheet, Text, View } from 'react-native';

type ErrorProps = {
  errorMessage: string;
  refetch: () => void;
};

const Error: React.FC<ErrorProps> = ({ errorMessage, refetch }) => {
  const handlePress = () => {
    refetch();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.errorText}>{errorMessage}</Text>
      <Pressable onPress={handlePress} style={styles.btn}>
        <Text style={styles.btnText}>try again</Text>
      </Pressable>
    </View>
  );
};

export default Error;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f8d7da',
    padding: 20,
    margin: 20,
    borderRadius: 5,
    alignItems: 'center',
  },
  errorText: {
    color: '#c0392b',
    fontSize: 16,
  },

  btn: {
    backgroundColor: '#c0392b',
    padding: 8,
    borderRadius: 5,
    width: '50%',
    margin: 10,
    alignItems: 'center',
  },

  btnText: {
    color: '#fff',
    textTransform: 'capitalize',
    fontSize: 14,
  },
});
