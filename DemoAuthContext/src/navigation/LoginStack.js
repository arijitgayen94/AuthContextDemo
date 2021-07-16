import * as React from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import LoginScreen from '../screens/Login';

const Login = createStackNavigator();

function LoginStack() {
  return (
    <Login.Navigator
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}>
      <Login.Screen name="Login" component={LoginScreen} />
    </Login.Navigator>
  );
}

export default LoginStack;
