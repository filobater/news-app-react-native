import React, { useCallback, useContext } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { BookmarksContext } from '../contexts/BookmarksContext';
import SmallCard from '../components/SmallCard';
import { ArticleType } from '../types/Article';

const BookmarkScreen = () => {
  const bookmarksCtx = useContext(BookmarksContext);

  const renderItem = useCallback(
    ({ item }: { item: ArticleType }) => <SmallCard article={item} />,
    []
  );

  if (bookmarksCtx?.bookmarks.length === 0) {
    return (
      <View style={styles.container}>
        <Text>There is no bookmarks yet</Text>
      </View>
    );
  }
  return (
    <FlatList
      style={{ padding: 20 }}
      data={bookmarksCtx?.bookmarks}
      renderItem={renderItem}
    />
  );
};

export default BookmarkScreen;

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  text: {
    fontSize: 24,
  },
});
