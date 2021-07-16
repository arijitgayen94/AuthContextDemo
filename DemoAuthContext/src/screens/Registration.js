import * as  React from 'react';
import { useEffect } from 'react';
import { Button, View, Text } from 'react-native';

function Registration({ navigation,route }) {
  useEffect(()=> {
    navigation.setOptions({ title: route.params.header });
    console.log(navigation);
  })
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text onPress={()=> navigation.navigate('Homestack')}>Registration View</Text>
      </View>
    );
}

export default Registration;