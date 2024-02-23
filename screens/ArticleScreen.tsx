import React, { useContext, useLayoutEffect, useState } from 'react';
import Article from '../components/Article';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ArticleType } from '../types/Article';
import { FontAwesome } from '@expo/vector-icons';
import { BookmarksContext } from '../contexts/BookmarksContext';

type RootStackParamList = {
  ArticleScreen: { article: ArticleType };
};

type Props = NativeStackScreenProps<RootStackParamList, 'ArticleScreen'>;

const ArticleScreen: React.FC<Props> = ({ navigation, route }) => {
  const bookmarksCtx = useContext(BookmarksContext);

  const { article } = route.params;

  // console.log(article);
  const articleBookmarked = bookmarksCtx?.bookmarks.find(
    (bookmark) => bookmark.url === article.url
  );

  const handlePress = () => {
    if (!articleBookmarked) {
      bookmarksCtx?.handleAddToBookmarks(article);
    } else {
      bookmarksCtx?.handleRemoveBookmark(article.url);
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      title: article.title,
      headerRight: () => (
        <FontAwesome
          onPress={handlePress}
          name={`bookmark${!articleBookmarked ? '-o' : ''}`}
          size={24}
          color="black"
        />
      ),
    });
  }, [navigation, route, articleBookmarked]);

  return <Article article={article} />;
};

export default ArticleScreen;
