import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './screens/HomeScreen';

import CategoryScreen from './screens/CategoryScreen';
import ArticleScreen from './screens/ArticleScreen';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

type MyParamList = {
  Home: undefined;
  ArticleScreen: undefined;
  Category: { title: string };
};

export default function App() {
  const Stack = createNativeStackNavigator<MyParamList>();
  const queryClient = new QueryClient();

  return (
    <NavigationContainer>
      <QueryClientProvider client={queryClient}>
        <Stack.Navigator>
          <>
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{
                headerTitleStyle: {
                  fontSize: 22,
                },
                title: 'News',
                headerShadowVisible: false,
              }}
            />
            <Stack.Screen name="ArticleScreen" component={ArticleScreen} />
            <Stack.Screen name="Category" component={CategoryScreen} />
          </>
        </Stack.Navigator>
      </QueryClientProvider>
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
