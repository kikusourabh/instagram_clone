import React from 'react';
import { View, Text } from 'react-native';
import { Styles } from '../cofig/Styles';

function Friends() {
    return (
        <View style={[Styles.windowBackground, { justifyContent: 'center', alignItems: 'center' }]}>
            <Text>
                Friends
            </Text>
        </View>
    )
}

export default Friends;