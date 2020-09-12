import React from 'react';
import {View, Text} from 'react-native';
import {Styles} from '../cofig/Styles';

function Login() {
  return (
    <View
      style={[
        Styles.windowBackground,
        {justifyContent: 'center', alignItems: 'center'},
      ]}>
      <Text>Login</Text>
    </View>
  );
}

export default Login;
