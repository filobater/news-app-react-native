import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

const getArticles = () => {
  return axios.get(
    `${process.env.EXPO_PUBLIC_API_URL}everything?q=general&pageSize=6`,
    {
      headers: {
        Authorization: `Bearer ${process.env.EXPO_PUBLIC_API_KEY}`,
      },
    }
  );
};

export const useGetArticles = () => {
  return useQuery({ queryKey: ['articles'], queryFn: getArticles });
};
