import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { Styles } from '../cofig/Styles';
import { posts } from "../store/dumypost";
import PostItem from '../components/PostItem';


function PostsGrid() {
    const renderItem = ({ item }) => {
        return (
            <PostItem item={item} />
        )
    }

    return (
        <View style={[Styles.windowBackground, { justifyContent: 'center', alignItems: 'center' }]}>
            <FlatList
                numColumns={3}
                data={posts}
                renderItem={renderItem} />
        </View>
    )
}

export default PostsGrid;