import React, {useContext} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {AuthContext} from '../contexts/AuthContexts';

function HomeScreen({navigation}) {
  const {user} = useContext(AuthContext);
  return (
    <View style={styles.mainView}>
      <Text>Hello {user.userName}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default HomeScreen;
