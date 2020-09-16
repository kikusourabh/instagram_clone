import React from 'react';
import { View, Text } from 'react-native';
import { Styles } from '../cofig/Styles';

function ActivityList() {
    return (
        <View style={[Styles.windowBackground, { justifyContent: 'center', alignItems: 'center' }]}>
            <Text>ActivityList</Text>
        </View>
    );
}

export default ActivityList;