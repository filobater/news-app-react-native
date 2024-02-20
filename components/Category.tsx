import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MyNavigationProp } from '../types/Navigation';

type CategoryProps = {
  name: string;
};

const Category: React.FC<CategoryProps> = ({ name }) => {
  const navigation = useNavigation<MyNavigationProp>();

  const handlePress = () => {
    navigation.navigate('Category', { title: name });
  };

  return (
    <Pressable
      onPress={handlePress}
      style={({ pressed }) =>
        pressed ? { ...styles.container, ...styles.pressed } : styles.container
      }
    >
      <Text style={{ textTransform: 'capitalize' }}>{name}</Text>
    </Pressable>
  );
};

export default Category;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#c3c7c9',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginHorizontal: 6,
  },
  pressed: {
    opacity: 0.7,
  },
});
