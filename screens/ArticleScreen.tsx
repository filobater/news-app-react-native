import React, { useLayoutEffect } from 'react';
import Article from '../components/Article';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ArticleType } from '../types/Article';

type RootStackParamList = {
  ArticleScreen: { article: ArticleType };
};

type Props = NativeStackScreenProps<RootStackParamList, 'ArticleScreen'>;

const ArticleScreen: React.FC<Props> = ({ navigation, route }) => {
  const { article } = route.params;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: article.title,
    });
  }, [navigation, route]);

  return <Article article={article} />;
};

export default ArticleScreen;
