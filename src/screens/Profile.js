import React from 'react';
import { View, Text } from 'react-native';
import { Styles } from '../cofig/Styles';

function Profile() {
    return (
        <View style={[Styles.windowBackground, { justifyContent: 'center', alignItems: 'center' }]}>
            <Text>Profile</Text>
        </View>
    );
}

export default Profile;