import React from 'react';
import { View, Text } from 'react-native';
import { Colors } from '../cofig/Colors';

function Error({ style, message }) {
  return (
    <View style={[style, { width: '80%', marginBottom: 16 }]}>
      <Text style={{ color: Colors.error }}>{message}</Text>
    </View>
  );
}

export default Error;
