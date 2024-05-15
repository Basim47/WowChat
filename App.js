import { StatusBar } from 'react-native'
import React, { useEffect, useState } from 'react'
import HomeScreen from './src/screens/HomeScreen'
import { Colors } from './src/theme/Colors'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ChatScreen from './src/screens/ChatScreen';
import ContactScreen from './src/screens/ContactScreen';
import auth from '@react-native-firebase/auth'
import OnBoardScreen from './src/screens/OnBoardScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import LoginScreen from './src/screens/LoginScreen';

const Stack = createStackNavigator();

const App = () => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  return (
    <NavigationContainer>
      <StatusBar backgroundColor={Colors.background} />
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}>
        {user ? (<>
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="ChatScreen" component={ChatScreen} />
          <Stack.Screen name="ContactScreen" component={ContactScreen} />
        </>) : (<>
          <Stack.Screen name='Boarding' component={OnBoardScreen} />
          <Stack.Screen name='SignUp' component={SignUpScreen} />
          <Stack.Screen name='Login' component={LoginScreen} />
        </>)}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App