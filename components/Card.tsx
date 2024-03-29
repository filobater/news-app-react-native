import moment from 'moment';
import React from 'react';
import {
  Dimensions,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { ArticleType } from '../types/Article';
import { MyNavigationProp } from '../types/Navigation';

import { useNavigation } from '@react-navigation/native';
import FallbackImage from './FallbackImage';

type CardProps = {
  article: ArticleType;
};

const Card: React.FC<CardProps> = ({ article }) => {
  const navigation = useNavigation<MyNavigationProp>();

  const handlePress = () => {
    navigation.navigate('ArticleScreen', { article });
  };

  const windowWidth = Dimensions.get('window').width;

  return (
    <Pressable
      onPress={handlePress}
      style={({ pressed }) =>
        pressed ? { ...styles.container, ...styles.pressed } : styles.container
      }
    >
      {!article.urlToImage ? (
        <FallbackImage
          width={'100%'}
          height={windowWidth < 400 ? 200 : 400}
          fontSize={14}
        />
      ) : (
        <View style={styles.imgContainer}>
          <Image
            style={{
              ...styles.newsImage,
              height: windowWidth < 400 ? 200 : 400,
            }}
            source={{
              uri: article.urlToImage,
            }}
          />
        </View>
      )}

      <Text style={styles.title}>{article.title}</Text>
      <Text style={styles.newsPaper}>
        {article?.source?.name}.{' '}
        {moment(article.publishedAt).format('YYYY-MM-DD')}
      </Text>
    </Pressable>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    marginBottom: 40,
  },
  pressed: {
    opacity: 0.7,
  },

  imgContainer: {
    overflow: 'hidden',
    marginBottom: 16,
  },
  newsImage: {
    borderRadius: 8,
    width: '100%',
  },

  title: {
    fontWeight: 'bold',
    fontSize: 18,

    color: 'black',
  },

  newsPaper: {
    marginTop: 4,
    color: '#b4b9c4',
  },
});
