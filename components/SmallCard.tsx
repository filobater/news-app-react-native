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
import moment from 'moment';
import { useNavigation } from '@react-navigation/native';
import FallbackImage from './FallbackImage';
import { MyNavigationProp } from '../types/Navigation';

type SmallCardProps = {
  article: ArticleType;
};

const SmallCard: React.FC<SmallCardProps> = ({ article }) => {
  const navigation = useNavigation<MyNavigationProp>();

  const handlePress = () => {
    navigation.navigate('ArticleScreen', { article });
  };

  const today = moment();

  const otherDate = moment(article.publishedAt);

  const diffInDays = moment.duration(today.diff(otherDate)).asDays();

  const windowWidth = Dimensions.get('window').width;

  return (
    <Pressable
      onPress={handlePress}
      style={({ pressed }) =>
        pressed
          ? { ...styles.container, ...styles.pressed }
          : { ...styles.container }
      }
    >
      <View style={styles.titleContainer}>
        <Text ellipsizeMode="tail" numberOfLines={2} style={styles.title}>
          {article.title}
        </Text>
        <Text style={styles.author}>
          {article.author ? article.author : 'Anonymous'}.{' '}
          {Math.round(diffInDays)}{' '}
          {Math.round(diffInDays) === 1 ? 'day' : 'days'} ago
        </Text>
      </View>
      {!article.urlToImage ? (
        <FallbackImage
          width={windowWidth < 400 ? 120 : 150}
          height={windowWidth < 400 ? 75 : 150}
          fontSize={12}
        />
      ) : (
        <View style={styles.imgContainer}>
          <Image
            style={{
              ...styles.newsImage,
              width: windowWidth < 400 ? 120 : 150,
              height: windowWidth < 400 ? 75 : 150,
            }}
            source={{
              uri: article.urlToImage,
            }}
          />
        </View>
      )}
    </Pressable>
  );
};

export default SmallCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 8,
    columnGap: 4,
    marginBottom: 10,
    alignItems: 'center',
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
    marginLeft: 8,
  },
  newsImage: {
    borderRadius: 8,
  },
});
