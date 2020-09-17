import React from 'react';
import { View, Text } from 'react-native';
import { Styles } from '../cofig/Styles';

function PostsGrid() {
    return (
        <View style={[Styles.windowBackground, { justifyContent: 'center', alignItems: 'center' }]}>
            <Text>Post Grid</Text>
        </View>
    )
}

export default PostsGrid;