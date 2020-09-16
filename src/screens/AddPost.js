import React from 'react';
import { View, Text } from 'react-native';
import { Styles } from '../cofig/Styles';

function AddPost() {
    return (
        <View style={[Styles.windowBackground, { justifyContent: 'center', alignItems: 'center' }]}>
            <Text>AddPost</Text>
        </View>
    );
}

export default AddPost;