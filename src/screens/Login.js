import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {Styles} from '../cofig/Styles';
import {Colors} from '../cofig/Colors';

function Login() {
  const [data, setData] = useState({});
  const [isDisable, setIsDisable] = useState(true);

  const onTextChange = (key, text) => {
    switch (key) {
      case 'username':
        setData({
          ...data,
          username: text,
        });
        break;
      case 'password':
        setData({
          ...data,
          password: text,
        });
        break;
    }

    if (!data.username || !data.password) {
      setIsDisable(true);
    } else {
      setIsDisable(false);
    }
  };
  return (
    <View
      style={[
        Styles.windowBackground,
        {justifyContent: 'center', alignItems: 'center'},
      ]}>
      <Image
        resizeMode="center"
        style={Styles.logo}
        source={require('../assets/Instagram_logo.png')}
      />

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholderTextColor={Colors.secondaryTextColor}
          placeholder="username"
          onChangeText={(e) => onTextChange('username', e)}
        />
      </View>
      <View>
        <Text></Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholderTextColor={Colors.secondaryTextColor}
          placeholder="Password"
          onChangeText={(e) => onTextChange('password', e)}
        />
      </View>
      <TouchableOpacity
        style={isDisable ? styles.ButtonDisable : styles.ButtonEnable}
        disabled={isDisable}>
        <View>
          <Text style={styles.buttonText}>Log in</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default Login;

const styles = StyleSheet.create({
  ButtonEnable: {
    height: 45,
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.acent,
    borderRadius: 5,
  },
  ButtonDisable: {
    height: 45,
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.acentdisable,
    borderRadius: 5,
  },
  buttonText: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
  inputContainer: {
    height: 56,
    width: '80%',
    backgroundColor: Colors.secondaryColor,
    borderColor: Colors.secondaryTextColor,
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 16,
  },
  input: {
    height: 56,
    width: '100%',
    paddingStart: 16,
    paddingEnd: 16,
  },
});
