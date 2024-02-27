import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Dimensions,
} from 'react-native';
import { ArticleType } from '../types/Article';
import moment from 'moment';
import FallbackImage from './FallbackImage';

type ArticleProps = {
  article: ArticleType;
};

const Article: React.FC<ArticleProps> = ({ article }) => {
  const content = article.content;

  const startIndex = content.lastIndexOf('[');

  const newContent = content.slice(0, startIndex);

  const windowWidth = Dimensions.get('window').width;
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.date}>
        {moment(article.publishedAt).format('YYYY-MM-DD')}
      </Text>
      <Text style={styles.title}>{article.title}</Text>
      <Text style={styles.description}>{article.description}</Text>
      {!article.urlToImage ? (
        <FallbackImage
          width={'100%'}
          height={windowWidth < 400 ? 300 : 500}
          fontSize={15}
        />
      ) : (
        <View style={styles.imgContainer}>
          <Image
            style={{
              ...styles.articleImg,
              height: windowWidth < 400 ? 300 : 500,
            }}
            source={{
              uri: article.urlToImage,
            }}
          />
        </View>
      )}
      <Text style={styles.author}>
        by: {article.author ? article.author : 'Anonymous'}
      </Text>

      <Text style={styles.content}>{newContent}</Text>
    </ScrollView>
  );
};

export default Article;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    marginTop: 20,
  },
  date: {
    marginTop: 4,
    color: '#b4b9c4',
    textAlign: 'center',
    marginBottom: 4,
  },

  title: {
    fontWeight: 'bold',
    fontSize: 17,
    color: 'black',
    marginBottom: 4,
  },

  description: {
    color: '#B4B4B8',
    lineHeight: 17,
    fontSize: 12.5,
    marginBottom: 8,
  },

  imgContainer: {
    overflow: 'hidden',
    marginBottom: 8,
  },
  articleImg: {
    borderRadius: 8,
    width: '100%',
  },

  author: {
    marginBottom: 4,
    color: '#b4b9c4',
  },

  content: {
    lineHeight: 22,
    fontSize: 16,
  },
});
