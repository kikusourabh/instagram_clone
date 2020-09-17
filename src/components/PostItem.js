import React from 'react';
import { View, Image, Dimensions, TouchableOpacity } from 'react-native';

const postWidth = Dimensions.get('window').width / 3
function PostItem({ item }) {
    return (
        <TouchableOpacity>
            <View style={{ height: postWidth, width: postWidth }}>
                <Image source={{ uri: item.postUrl }} style={{ height: postWidth, width: postWidth }} />
            </View>
        </TouchableOpacity>
    );
}

export default PostItem;