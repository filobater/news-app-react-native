import moment from 'moment';
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
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.newsPaper}>
        {newspaperName}. {moment(time).format('YYYY-MM-DD')}
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
