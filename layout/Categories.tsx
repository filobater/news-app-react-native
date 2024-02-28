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
    <ScrollView horizontal>
      {categories.map((category) => (
        <Category key={category} name={category} />
      ))}
    </ScrollView>
  );
};

export default Categories;

const styles = StyleSheet.create({});
