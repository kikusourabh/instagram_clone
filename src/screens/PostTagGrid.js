import React from 'react';
import { View, Text } from 'react-native';
import { Styles } from '../cofig/Styles';

function PostTagGrid() {
    return (
        <View style={[Styles.windowBackground, { justifyContent: 'center', alignItems: 'center' }]}>
            <Text>Post Tag Grid</Text>
        </View>
    )
}

export default PostTagGrid;