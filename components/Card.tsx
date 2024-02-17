import React from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

type CardProps = {
  src: string;
  title: string;
  time: string;
  newspaperName: string;
};

const Card: React.FC<CardProps> = ({ src, title, time, newspaperName }) => {
  return (
    <Pressable
      style={({ pressed }) =>
        pressed ? { ...styles.container, ...styles.pressed } : styles.container
      }
    >
      <View style={styles.imgContainer}>
        <Image
          style={styles.newsImage}
          source={{
            uri: src,
          }}
        />
      </View>
      <Text style={styles.title}>
        {title.slice(0, 1).toUpperCase() + title.slice(1)}
      </Text>
      <Text style={styles.newsPaper}>
        {newspaperName.slice(0, 1).toUpperCase() + newspaperName.slice(1)}.{' '}
        {time}
      </Text>
    </Pressable>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    marginBottom: 50,
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
    height: 200,
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
