import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Styles } from '../cofig/Styles';
import Statusbar from '../components/Statusbar';
import { Colors } from '../cofig/Colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import PostRoute from '../routes/PostRoute';



function Profile() {
    return (
        <View style={[Styles.windowBackground]}>
            <Statusbar />
            <View style={[Styles.actionBarShadow, { height: 56, backgroundColor: Colors.white, flexDirection: 'row', alignItems: 'center', paddingEnd: 16, paddingStart: 16 }]}>

                <View style={{ flex: 8, flexDirection: 'row', alignItems: 'center' }}>
                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>username</Text>
                        <Icon name="keyboard-arrow-down" size={20} color={Colors.acent} />
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 8, alignItems: 'flex-end', justifyContent: 'center' }}>
                    <TouchableOpacity>
                        <Icon name="menu" size={30} color={Colors.acent} />
                    </TouchableOpacity>
                </View>
            </View>

            {/* profile */}
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', margin: 8 }}>
                    <TouchableOpacity style={{ borderWidth: 2, height: 108, width: 108, borderRadius: 108 / 2, alignItems: 'center', justifyContent: 'center', borderColor: Colors.border }}>
                        <Image resizeMode='cover' source={{ uri: "https://images.unsplash.com/photo-1529033130093-d993256d4271?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" }} style={{ height: 100, width: 100, borderRadius: 100 / 2 }} />
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 2, flexDirection: 'row', marginEnd: 16 }}>
                    <View style={styles.profileCountsContainer}>
                        <Text style={styles.profileCounts}>45</Text>
                        <Text style={styles.profileCountsText}>Posts</Text>
                    </View>
                    <View style={styles.profileCountsContainer}>
                        <Text style={styles.profileCounts}>834</Text>
                        <Text style={styles.profileCountsText} >Followers</Text>
                    </View>
                    <View style={styles.profileCountsContainer}>
                        <Text style={styles.profileCounts}>162</Text>
                        <Text style={styles.profileCountsText}>Following</Text>
                    </View>
                </View>
            </View>
            {/* profile */}
            {/* bio */}
            <View style={{ marginStart: 16 + 8, marginEnd: 16 }}>
                <Text style={{ color: Colors.acent, fontWeight: 'bold', fontSize: 16 }}>
                    Lily singh
                </Text>
                <Text style={{ color: Colors.acent, fontSize: 16 }}>
                    Digital marketer, love to travel
                </Text>
                <TouchableOpacity>
                    <Text style={{ color: Colors.primaryButton, fontSize: 16 }}>
                        https://reactnative.dev/docs/image/
                </Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={{ justifyContent: 'center', alignItems: 'center', width: "90%", height: 40, borderWidth: 1, alignSelf: 'center', marginTop: 8, borderRadius: 10, borderColor: Colors.border }}>
                        <Text style={{ color: Colors.acent, fontWeight: 'bold' }}>Edit profile</Text>
                    </View>
                </TouchableOpacity>
            </View>
            {/* bio */}

            {/* post */}
            <PostRoute />
            {/* post */}

        </View>
    );
}

export default Profile;

const styles = StyleSheet.create({
    profileCountsContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    profileCountsText: {
        fontSize: 16,
        color: Colors.acent,
    },
    profileCounts: {
        fontSize: 16,
        fontWeight: 'bold',
        color: Colors.acent,
    }
})