import React from 'react';
import { View, Image } from 'react-native';
import { Styles } from '../cofig/Styles';
import SLIcon from 'react-native-vector-icons/SimpleLineIcons';
import FIcon from 'react-native-vector-icons/Feather';
import { Colors } from '../cofig/Colors';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Statusbar from '../components/Statusbar';

function Feeds() {
    return (
        <View style={[Styles.windowBackground, { flex: 1 }]}>
            <Statusbar />
            <View style={[Styles.actionBarShadow, { height: 56, paddingStart: 16, paddingEnd: 16, backgroundColor: Colors.white, alignItems: 'center', flexDirection: 'row' }]}>
                <View style={{ flex: 1, alignItems: 'flex-start' }}>
                    <TouchableOpacity>
                        <SLIcon name="camera" size={30} color={Colors.acent} />
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 7, alignItems: 'center' }}>
                    <Image
                        resizeMode="contain"
                        style={([Styles.logo, { height: 35, width: "30%" }])}
                        width={"90%"}
                        source={require('../assets/Instagram_logo.png')}
                    />
                </View>
                <View style={{ flex: 1, alignItems: 'flex-end' }}>
                    <TouchableOpacity>
                        <FIcon name="send" size={30} color={Colors.acent} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

export default Feeds;