import React, { useCallback, useLayoutEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useGetArticles } from '../hooks/useGetArticles';
import SmallCard from '../components/SmallCard';
import Pagination from '../components/Pagination';
import { ArticleType } from '../types/Article';

type RootStackParamList = {
  Category: { title: string };
};

type Props = NativeStackScreenProps<RootStackParamList, 'Category'>;

const CategoryScreen: React.FC<Props> = ({ navigation, route }) => {
  const [pageNum, setPageNum] = useState(1);
  const { title } = route.params;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: title.slice(0, 1).toUpperCase() + title.slice(1),
    });
  }, [navigation, route]);

  const getArticles = useGetArticles(title, pageNum);

  if (getArticles.isError) {
    console.log(getArticles.error);
  }

  let articles;

  if (getArticles.isSuccess) {
    articles = getArticles?.data?.data.articles;
  }

  const renderItem = useCallback(
    ({ item }: { item: ArticleType }) => <SmallCard article={item} />,
    []
  );

  return (
    <>
      {getArticles.isLoading ? (
        <ActivityIndicator size={'large'} style={{ marginTop: 50 }} />
      ) : (
        <FlatList
          style={{ padding: 20 }}
          refreshing={false}
          onRefresh={() => getArticles.refetch()}
          data={articles}
          initialNumToRender={10}
          renderItem={renderItem}
          ListFooterComponent={
            <Pagination pageNum={pageNum} setPageNum={setPageNum} />
          }
        />
      )}
    </>
  );
};

export default CategoryScreen;
