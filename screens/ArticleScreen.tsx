import React, { useLayoutEffect, useState } from 'react';
import Article from '../components/Article';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ArticleType } from '../types/Article';
import { FontAwesome } from '@expo/vector-icons';

type RootStackParamList = {
  ArticleScreen: { article: ArticleType };
};

type Props = NativeStackScreenProps<RootStackParamList, 'ArticleScreen'>;

const ArticleScreen: React.FC<Props> = ({ navigation, route }) => {
  const { article } = route.params;

  const [checked, setChecked] = useState(false);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: article.title,
      headerRight: () => (
        <FontAwesome
          onPress={() => setChecked(!checked)}
          name={`bookmark${!checked ? '-o' : ''}`}
          size={24}
          color="black"
        />
      ),
    });
  }, [navigation, route, checked]);

  return <Article article={article} />;
};

export default ArticleScreen;
