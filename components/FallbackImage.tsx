import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

type FallbackImageProps = {
  width: number | string;
  height: number;
  fontSize: number;
};

const FallbackImage: React.FC<FallbackImageProps> = ({
  width,
  height,
  fontSize,
}) => {
  return (
    <View style={{ ...styles.imgContainer, width, height }}>
      <Text style={{ fontSize }}>No image found</Text>
    </View>
  );
};

export default FallbackImage;

const styles = StyleSheet.create({
  imgContainer: {
    borderRadius: 8,
    backgroundColor: '#eaeaea',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
