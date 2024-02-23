import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './screens/HomeScreen';

import CategoryScreen from './screens/CategoryScreen';
import ArticleScreen from './screens/ArticleScreen';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ArticleType } from './types/Article';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BookmarkScreen from './screens/BookmarkScreen';
import { Entypo } from '@expo/vector-icons';
import Search from './components/Search';
import SearchScreen from './screens/SearchScreen';
import { BookmarksProvider } from './contexts/BookmarksContext';

type MyParamList = {
  Main: undefined;
  ArticleScreen: { article: ArticleType };
  Category: { title: string };
  SearchScreen: undefined;
};

export default function App() {
  const Stack = createNativeStackNavigator<MyParamList>();
  const Tab = createBottomTabNavigator();
  const queryClient = new QueryClient();

  function BottomTabs() {
    return (
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: 'black',
        }}
      >
        <Tab.Screen
          options={{
            headerRight: () => <Search />,
            tabBarLabel: 'Home',
            title: 'News',
            tabBarIcon: ({ color, size }) => (
              <Entypo name="home" size={size} color={color} />
            ),
          }}
          name="Home"
          component={HomeScreen}
        />
        <Tab.Screen
          options={{
            tabBarIcon: ({ color, size }) => (
              <Entypo name="bookmark" size={size} color={color} />
            ),
          }}
          name="Bookmarks"
          component={BookmarkScreen}
        />
      </Tab.Navigator>
    );
  }

  return (
    <NavigationContainer>
      <QueryClientProvider client={queryClient}>
        <BookmarksProvider>
          <Stack.Navigator>
            <Stack.Screen
              name="Main"
              component={BottomTabs}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen name="ArticleScreen" component={ArticleScreen} />
            <Stack.Screen
              options={{
                headerRight: () => <Search />,
              }}
              name="Category"
              component={CategoryScreen}
            />
            <Stack.Screen name="SearchScreen" component={SearchScreen} />
          </Stack.Navigator>
        </BookmarksProvider>
      </QueryClientProvider>
    </NavigationContainer>
  );
}
