/* eslint-disable react-hooks/rules-of-hooks */
import React, {useContext} from 'react';
import {AuthContext} from '../contexts/AuthContexts';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import SplashScreens from '../screens/SplashScreens';
import LoginStack from './LoginStack';
import MyStack from './StackNavigation';

const RootStack = createStackNavigator();

const navigation = () => {
  const authContext = useContext(AuthContext);
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        {authContext.isAppLoading ? (
          <RootStack.Screen
            name="Loading"
            component={SplashScreens}
            options={{headerShown: false}}
          />
        ) : (
          <>
            {!authContext.isUserLogin ? (
              <RootStack.Screen
                name="Auth"
                component={LoginStack}
                options={{headerShown: false}}
              />
            ) : (
              <RootStack.Screen
                name="App"
                component={MyStack}
                options={{headerShown: false}}
              />
            )}
          </>
        )}
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default navigation;
