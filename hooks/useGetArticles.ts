import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

const getArticles = (category: string) => {
  return axios.get(
    `${process.env.EXPO_PUBLIC_API_URL}everything?q=${category}&pageSize=10`,
    {
      headers: {
        Authorization: `Bearer ${process.env.EXPO_PUBLIC_API_KEY}`,
      },
    }
  );
};

export const useGetArticles = (category: string) => {
  return useQuery({
    queryKey: ['articles', category],
    queryFn: () => getArticles(category),
  });
};
