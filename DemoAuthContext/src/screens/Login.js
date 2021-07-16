import React, {useState, useContext, useEffect} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {AuthContext} from '../contexts/AuthContexts';

function LoginScreen({navigation}) {
  const [name, setName] = useState('New User');
  const {handleUserLogin} = useContext(AuthContext);

  useEffect(() => {
    setTimeout(() => {
      handleUserLogin(true, {userName: name});
    }, 2000);
  }, []);

  return (
    <View style={styles.mainView}>
      <TouchableOpacity style={styles.buttonView}>
        <Text>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    color: '#fff',
    fontSize: 14,
  },
  buttonView: {
    width: '90%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffc000',
  },
});

export default LoginScreen;
