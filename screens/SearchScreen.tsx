import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

const SearchScreen = () => {
  return (
    <View>
      <TextInput
        style={styles.searchInput}
        placeholder={'Search for news'}
        autoFocus
      />
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  searchInput: {
    height: 40,
    margin: 20,
    padding: 10,
    borderRadius: 5,
    fontSize: 16,
    backgroundColor: '#fff',
    borderColor: '#ccc',
    borderWidth: 1,
  },
});
