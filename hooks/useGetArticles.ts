import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

const getArticles = (category: string, pageParam = 1) => {
  return axios.get(
    `${process.env.EXPO_PUBLIC_API_URL}everything?q=${category}&pageSize=10&page=${pageParam}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.EXPO_PUBLIC_API_KEY}`,
      },
    }
  );
};

export const useGetArticles = (category: string, pageParam = 1) => {
  return useQuery({
    queryKey: ['articles', category, pageParam],
    queryFn: () => getArticles(category, pageParam),
  });
};
