import React, { useLayoutEffect } from 'react';
import { Text } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

type RootStackParamList = {
  Category: { title: string };
};

type Props = NativeStackScreenProps<RootStackParamList, 'Category'>;

const CategoryScreen: React.FC<Props> = ({ navigation, route }) => {
  const { title } = route.params;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: title.slice(0, 1).toUpperCase() + title.slice(1),
    });
  }, [navigation, route]);

  return (
    <>
      <Text>{title}</Text>
    </>
  );
};

export default CategoryScreen;
