import React, { useLayoutEffect } from 'react';
import { ActivityIndicator, FlatList, Text } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useGetArticles } from '../hooks/useGetArticles';
import SmallCard from '../components/SmallCard';

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

  const getArticles = useGetArticles(title);

  if (getArticles.isError) {
    console.log(getArticles.error);
  }

  let articles;

  if (getArticles.isSuccess) {
    articles = getArticles?.data?.data.articles;
  }

  return (
    <>
      {getArticles.isLoading ? (
        <ActivityIndicator size={'large'} style={{ marginTop: 50 }} />
      ) : (
        <FlatList
          style={{ padding: 20 }}
          data={articles}
          renderItem={({ item }) => <SmallCard article={item} />}
          // MAKE PAGINATION
          // ListFooterComponent={<Text style={{ fontSize: 40 }}>Load More</Text>}
        />
      )}
    </>
  );
};

export default CategoryScreen;
