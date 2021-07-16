import React, {useEffect, useContext} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {AuthContext} from '../contexts/AuthContexts';

const SplashScreens = () => {
  const {handleUserLogin} = useContext(AuthContext);
  useEffect(() => {
    setTimeout(() => {
      handleUserLogin(false, {});
    }, 3000);
  }, [handleUserLogin]);

  return (
    <View style={styles.mainView}>
      <Text>This is SplashScreen</Text>
    </View>
  );
};

export default SplashScreens;

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
