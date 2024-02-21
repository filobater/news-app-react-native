import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

type ErrorProps = {
  errorMessage: string;
};

const Error: React.FC<ErrorProps> = ({ errorMessage }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.errorText}>{errorMessage}</Text>
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
});
