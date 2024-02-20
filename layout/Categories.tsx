import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import Category from '../components/Category';

const Categories: React.FC = () => {
  const categories = [
    'Artificial intelligence',
    'business',
    'science',
    'sports',
    'technology',
    'health',
  ];
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        {categories.map((category) => (
          <Category key={category} name={category} />
        ))}
      </ScrollView>
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  container: {
    marginLeft: 8,
  },
});
