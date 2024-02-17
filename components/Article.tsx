import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

type ArticleProps = {
  src: string;
  content: string;
  title: string;
  date: string;
  description: string;
  author?: string | null;
};

const Article: React.FC<ArticleProps> = ({
  src,
  date,
  title,
  content,
  description,
  author,
}) => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.date}>{date}</Text>
      <Text style={styles.title}>
        {title.slice(0, 1).toUpperCase() + title.slice(1)}
      </Text>
      <Text style={styles.description}>{description}</Text>
      <View style={styles.imgContainer}>
        <Image
          style={styles.articleImg}
          source={{
            uri: src,
          }}
        />
      </View>
      <Text style={styles.author}>
        by:{' '}
        {author
          ? author.slice(0, 1).toUpperCase() + author.slice(1)
          : 'Anonymous'}
      </Text>

      <Text style={styles.content}>{content}</Text>
    </ScrollView>
  );
};

export default Article;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
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
    height: 300,
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
