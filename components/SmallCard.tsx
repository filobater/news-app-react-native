import React from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

type SmallCardProps = {
  src: string;
  title: string;
  time: string;
  author?: string | null;
};

const SmallCard: React.FC<SmallCardProps> = ({ src, title, time, author }) => {
  return (
    <Pressable
      style={({ pressed }) =>
        pressed ? { ...styles.container, ...styles.pressed } : styles.container
      }
    >
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.author}>
          {author ? author : 'Anonymous'}. {time}
        </Text>
      </View>
      <View style={styles.imgContainer}>
        <Image
          style={styles.newsImage}
          source={{
            uri: src,
          }}
        />
      </View>
    </Pressable>
  );
};

export default SmallCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 16,
    columnGap: 4,
    marginBottom: 10,
  },

  pressed: {
    opacity: 0.7,
  },

  titleContainer: {
    flex: 1,
  },

  title: {
    fontWeight: 'bold',
    fontSize: 15,

    color: 'black',
  },

  author: {
    marginTop: 4,
    color: '#b4b9c4',
  },

  imgContainer: {
    overflow: 'hidden',
  },
  newsImage: {
    borderRadius: 8,
    width: 120,
    height: 60,
  },
});
