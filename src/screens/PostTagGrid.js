import React from 'react';
import { View, FlatList } from 'react-native';
import { Styles } from '../cofig/Styles';
import { tagPost } from "../store/dumypost";
import PostItem from '../components/PostItem';

function PostTagGrid() {
    const renderItem = ({ item }) => {
        return (
            <PostItem item={item} />
        )
    }

    return (
        <View style={[Styles.windowBackground, { justifyContent: 'center', alignItems: 'center' }]}>
            <FlatList
                numColumns={3}
                data={tagPost}
                renderItem={renderItem} />
        </View>
    )
}

export default PostTagGrid;