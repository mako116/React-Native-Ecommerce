import React, { useCallback, useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, View } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import BottomTabNavigation from './BottomTabNavigation';
import Cart from './screens/Cart';
import LoginScreen from './component/Registers/Login'; // Import your login screen component
import Signup from './component/Registers/Signup';

const Stack = createNativeStackNavigator();

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
      // Simulate checking if the user is already logged in
      const userIsLoggedIn = await checkIfUserIsLoggedIn(); // Your authentication logic here
      setIsLoggedIn(userIsLoggedIn);
      setIsLoading(false);
    }
    prepare();
  }, []);

  const checkIfUserIsLoggedIn = async () => {
    // Implement your logic to check if the user is logged in
    // For example, check if there's a token in AsyncStorage or a session in the backend
    // Return true if logged in, false otherwise
    // This is just a placeholder
    return false;
  };

  const onLayoutRootView = useCallback(async () => {
    await SplashScreen.hideAsync();
  }, []);

  if (isLoading) {
    return null; // Render nothing until the loading state is resolved
  }

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <NavigationContainer>
        <Stack.Navigator>
          {isLoggedIn ? (
            <>
              <Stack.Screen 
                name="Bottom Navigation" 
                component={BottomTabNavigation} 
                options={{ headerShown: false }} 
              />
              <Stack.Screen 
                name="Cart" 
                component={Cart} 
                options={{ headerShown: false }} 
              />
              
            </>
          ) : (
            <>
            <Stack.Screen 
              name="Login" 
              component={LoginScreen} 
              options={{ headerShown: false }} 
            />
             <Stack.Screen 
                name="Signup" 
                component={Signup} 
                options={{ headerShown: false }} 
              />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
