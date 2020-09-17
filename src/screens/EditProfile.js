import React from 'react';
import { View, Text } from 'react-native';
import { Styles } from '../cofig/Styles';

function EditProfile() {
    return (
        <View style={[Styles.windowBackground, { justifyContent: 'center', alignItems: 'center' }]}>
            <Text>
                EditProfile
            </Text>
        </View>
    )
}

export default EditProfile;