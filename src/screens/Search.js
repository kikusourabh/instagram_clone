import React from 'react';
import { View, Text } from 'react-native';
import { Styles } from '../cofig/Styles';

function Search() {
    return (
        <View style={[Styles.windowBackground, { justifyContent: 'center', alignItems: 'center' }]}>
            <Text>Search</Text>
        </View>
    );
}

export default Search;