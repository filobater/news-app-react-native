import React, { useCallback, useLayoutEffect, useState } from 'react';

import Categories from '../layout/Categories';
import {
  ActivityIndicator,
  Button,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { useGetArticles } from '../hooks/useGetArticles';
import Card from '../components/Card';

import Pagination from '../components/Pagination';
import { ArticleType } from '../types/Article';

// import { useEffect } from 'react';
// import { AppState, Platform } from 'react-native';
// import type { AppStateStatus } from 'react-native';
// import { focusManager } from '@tanstack/react-query';

const HomeScreen = () => {
  const [pageNum, setPageNum] = useState(1);

  // function onAppStateChange(status: AppStateStatus) {
  //   if (Platform.OS !== 'web') {
  //     focusManager.setFocused(status === 'active');
  //   }
  // }

  // useEffect(() => {
  //   const subscription = AppState.addEventListener('change', onAppStateChange);

  //   return () => subscription.remove();
  // }, []);

  const getArticles = useGetArticles('general', pageNum);

  if (getArticles.isError) {
    console.log(getArticles.error);
  }

  let articles;

  if (getArticles.isSuccess) {
    articles = getArticles?.data?.data.articles;
  }

  // handle Errors IMPORTANT********************************

  const renderItem = useCallback(
    ({ item }: { item: ArticleType }) => <Card article={item} />,
    []
  );

  return (
    <View style={{ backgroundColor: 'white', flex: 1 }}>
      <View style={{ paddingVertical: 10 }}>
        <Text style={styles.categoriesText}>Categories</Text>
        <Categories />
      </View>
      {getArticles.isLoading ? (
        <ActivityIndicator size={'large'} style={{ marginTop: 50 }} />
      ) : (
        <FlatList
          refreshing={false}
          onRefresh={() => getArticles.refetch()}
          initialNumToRender={10}
          style={{ paddingHorizontal: 16, paddingTop: 8 }}
          data={articles}
          renderItem={renderItem}
          ListFooterComponent={
            <Pagination pageNum={pageNum} setPageNum={setPageNum} />
          }
        />
      )}
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  categoriesText: {
    fontSize: 20,
    fontWeight: '600',
    marginLeft: 16,
    marginBottom: 16,
    marginTop: 6,
  },
});
