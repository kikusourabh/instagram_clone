import React from 'react';
import { View, Text } from 'react-native';
import { Styles } from '../cofig/Styles';

function Feeds() {
    return (
        <View style={[Styles.windowBackground, { justifyContent: 'center', alignItems: 'center' }]}>
            <Text>Feeds</Text>
        </View>
    );
}

export default Feeds;