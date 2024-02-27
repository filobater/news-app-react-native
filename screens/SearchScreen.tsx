import React, { useCallback, useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';
import { useDebounce } from '@uidotdev/usehooks';
import { useGetArticles } from '../hooks/useGetArticles';
import Pagination from '../components/Pagination';
import { ArticleType } from '../types/Article';
import SmallCard from '../components/SmallCard';
import Error from '../components/Error';

const SearchScreen = () => {
  const [pageNum, setPageNum] = useState(1);

  const [searchValue, setSearchValue] = useState('');
  const debouncedSearch = useDebounce(searchValue, 2000);

  const getArticles = useGetArticles(debouncedSearch, pageNum);

  const renderItem = useCallback(
    ({ item }: { item: ArticleType }) => <SmallCard article={item} />,
    []
  );

  let articles;

  if (getArticles.isSuccess) {
    articles = getArticles?.data?.data.articles;
  }

  console.log(getArticles.data);

  return (
    <>
      <TextInput
        onChangeText={setSearchValue}
        style={styles.searchInput}
        placeholder={'Search for news'}
        autoFocus
      />
      {searchValue.length > 0 && (
        <>
          {getArticles.isLoading ? (
            <ActivityIndicator size={'large'} style={{ marginTop: 50 }} />
          ) : getArticles.isError ? (
            <Error
              refetch={getArticles.refetch}
              errorMessage={getArticles.error.message}
            />
          ) : (
            <FlatList
              style={{ padding: 20 }}
              refreshing={false}
              onRefresh={() => getArticles.refetch()}
              data={articles}
              initialNumToRender={10}
              renderItem={renderItem}
              ListFooterComponent={
                <Pagination pageNum={pageNum} setPageNum={setPageNum} />
              }
            />
          )}
        </>
      )}
    </>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  searchInput: {
    height: 40,
    margin: 20,
    padding: 10,
    borderRadius: 5,
    fontSize: 16,
    backgroundColor: '#fff',
    borderColor: '#ccc',
    borderWidth: 1,
  },
});
