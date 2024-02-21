import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

type PaginationProps = {
  pageNum: number;
  setPageNum: React.Dispatch<React.SetStateAction<number>>;
};

const Pagination: React.FC<PaginationProps> = ({ pageNum, setPageNum }) => {
  const nextPage = () => {
    if (pageNum < 10) {
      setPageNum((prev) => prev + 1);
    }
  };

  const prevPage = () => {
    if (pageNum > 1) {
      setPageNum((prev) => prev - 1);
    }
  };
  return (
    <View style={styles.paginationContainer}>
      <AntDesign
        onPress={prevPage}
        name="caretleft"
        size={32}
        color={pageNum === 1 ? '#eee' : 'black'}
      />
      <Text>{pageNum}</Text>
      <AntDesign
        onPress={nextPage}
        name="caretright"
        size={32}
        color={pageNum === 10 ? '#eee' : 'black'}
      />
    </View>
  );
};

export default Pagination;

const styles = StyleSheet.create({
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',

    marginBottom: 18,
  },
});
