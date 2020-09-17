import React from 'react';
import { View, Text } from 'react-native';
import { Styles } from '../cofig/Styles';

function PostDetails() {
    return (
        <View style={[Styles.windowBackground, { justifyContent: 'center', alignItems: 'center' }]}>
            <Text>
                PostDetails
            </Text>
        </View>
    )
}

export default PostDetails;