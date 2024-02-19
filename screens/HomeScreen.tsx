import React, { useLayoutEffect } from 'react';

import Categories from '../layout/Categories';
import {
  ActivityIndicator,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { useGetArticles } from '../hooks/useGetArticles';
import Card from '../components/Card';

// import { useEffect } from 'react';
// import { AppState, Platform } from 'react-native';
// import type { AppStateStatus } from 'react-native';
// import { focusManager } from '@tanstack/react-query';

const HomeScreen = () => {
  // function onAppStateChange(status: AppStateStatus) {
  //   if (Platform.OS !== 'web') {
  //     focusManager.setFocused(status === 'active');
  //   }
  // }

  // useEffect(() => {
  //   const subscription = AppState.addEventListener('change', onAppStateChange);

  //   return () => subscription.remove();
  // }, []);

  const getArticles = useGetArticles();

  if (getArticles.isError) {
    console.log(getArticles.error);
  }

  let articles;

  if (getArticles.isSuccess) {
    articles = getArticles?.data?.data.articles;
  }

  // handle Errors IMPORTANT********************************

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
          style={{ paddingHorizontal: 16, paddingTop: 8 }}
          data={articles?.slice(1)}
          renderItem={({ item }) => (
            <Card
              title={item.title}
              src={item.urlToImage}
              time={item.publishedAt}
              newspaperName={item.source.name}
            />
          )}
          // MAKE PAGINATION
          ListFooterComponent={<Text style={{ fontSize: 40 }}>Load More</Text>}
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
