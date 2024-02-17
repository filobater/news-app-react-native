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
      title: title,
    });
  }, [navigation]);

  return <Text>{title}</Text>;
};

export default CategoryScreen;
