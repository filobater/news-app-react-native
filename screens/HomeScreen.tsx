import React from 'react';

import Categories from '../layout/Categories';

import { Button } from 'react-native';

// navigation tess
const HomeScreen = ({ navigation }) => {
  return (
    <>
      <Categories />
      {/* for test */}
      <Button
        title="go to article"
        onPress={() => navigation.navigate('ArticleScreen')}
      />
    </>
  );
};

export default HomeScreen;
