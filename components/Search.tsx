import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { MyNavigationProp } from '../types/Navigation';
import { useNavigation } from '@react-navigation/native';

const Search = () => {
  const navigation = useNavigation<MyNavigationProp>();

  const handlePress = () => {
    navigation.navigate('SearchScreen');
  };

  return (
    <AntDesign
      style={{ marginRight: 16 }}
      onPress={handlePress}
      name="search1"
      size={24}
      color={'black'}
    />
  );
};

export default Search;
