import React from 'react';
import { Dimensions, Platform, StatusBar, View } from 'react-native';
import { Colors } from '../cofig/Colors';

const X_WIDTH = 375;
const X_HEIGHT = 812;

const XSMAX_WIDTH = 414;
const XSMAX_HEIGHT = 896;

const { height: W_HEIGHT, width: W_WIDTH } = Dimensions.get('window');

let isIPhoneX_v = false;
let isIPhoneXMax_v = false;
let isIPhoneWithMonobrow_v = false;

if (Platform.OS === 'ios' && !Platform.isPad && !Platform.isTVOS) {
    if (W_WIDTH === X_WIDTH && W_HEIGHT === X_HEIGHT) {
        isIPhoneWithMonobrow_v = true;
        isIPhoneX_v = true;
    }

    if (W_WIDTH === XSMAX_WIDTH && W_HEIGHT === XSMAX_HEIGHT) {
        isIPhoneWithMonobrow_v = true;
        isIPhoneXMax_v = true;
    }
}

export const isIPhoneX = () => isIPhoneX_v;
export const isIPhoneXMax = () => isIPhoneXMax_v;
export const isIPhoneWithMonobrow = () => isIPhoneWithMonobrow_v;

const getStatusBarHeight = () => {
    return Platform.select({
        ios: isIPhoneWithMonobrow_v ? 44 : 20,
        android: StatusBar.currentHeight,
        default: 0
    })
};
function Statusbar({ style }) {
    if (Platform.OS === 'android') {
        return <StatusBar barStyle='dark-content' backgroundColor={Colors.secondaryColor} />
    } else {
        return (
            <View style={[{ height: getStatusBarHeight(), backgroundColor: Colors.secondaryColor }, style]} />
        );
    }

}

export default Statusbar;