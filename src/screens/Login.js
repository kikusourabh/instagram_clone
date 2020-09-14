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
import Icon from 'react-native-vector-icons/MaterialIcons';
import EnIcon from 'react-native-vector-icons/Entypo';

function Login() {
  const [data, setData] = useState({
    username: 'null',
    password: 'null',
  });
  const [isDisable, setIsDisable] = useState(true);
  const [encrypt, setEncrypt] = useState(true);

  const onTextChange = (key, text) => {
    switch (key) {
      case 'username':
        if (/^[a-z0-9_-]{3,15}$/.test(text)) {
          setData({
            ...data,
            username: text,
          });
        } else {
          setData({
            ...data,
            username: null,
          });
        }
        break;
      case 'password':
        if (
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,15}$/.test(text)
        ) {
          setData({
            ...data,
            password: text,
          });
        } else {
          setData({
            ...data,
            password: null,
          });
        }
        break;
    }

    if (
      !data.username ||
      data.username == null ||
      data.username == 'null' ||
      !data.password ||
      data.password == null ||
      data.password == 'null'
    ) {
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
        style={([Styles.logo], {marginBottom: 24})}
        source={require('../assets/Instagram_logo.png')}
      />

      <View style={styles.inputContainer}>
        <View style={{flex: 7}}>
          <TextInput
            style={styles.input}
            placeholderTextColor={Colors.secondaryTextColor}
            placeholder="Username"
            onChangeText={(e) => onTextChange('username', e)}
          />
        </View>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          {!data.username || data.username == 'null' ? null : (
            <Icon name="check" size={20} color={Colors.check} />
          )}
        </View>
      </View>
      {!data.username ? (
        <View style={{width: '80%', marginBottom: 16}}>
          {/* ^[a-z0-9_-]{3,15}$ */}
          <Text style={{color: Colors.error}}>
            Username must be consist of a-z, 0-9, underscore, hyphen, minimum 3
            and maximum 15 charchter long
          </Text>
        </View>
      ) : null}

      <View style={styles.inputContainer}>
        <View style={{flex: 7}}>
          <TextInput
            style={styles.input}
            placeholderTextColor={Colors.secondaryTextColor}
            placeholder="Password"
            secureTextEntry={encrypt}
            onChangeText={(e) => onTextChange('password', e)}
          />
        </View>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <TouchableOpacity onPress={() => setEncrypt(!encrypt)}>
            <EnIcon
              name={encrypt ? 'eye-with-line' : 'eye'}
              size={20}
              color={Colors.acent}
            />
          </TouchableOpacity>
        </View>
      </View>

      {!data.password ? (
        <View style={{width: '80%', marginBottom: 16}}>
          {/* ^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,15}$ */}
          <Text style={{color: Colors.error}}>
            Password must be consist of atlist a-z, A-Z, 0-9, special character,
            minimum 8 and maximum 15 charchter long
          </Text>
        </View>
      ) : null}

      <TouchableOpacity
        style={isDisable ? styles.ButtonDisable : styles.ButtonEnable}
        disabled={isDisable}>
        <View>
          <Text style={styles.buttonText}>Log in</Text>
        </View>
      </TouchableOpacity>

      <View
        style={{
          marginTop: 128,
          justifyContent: 'center',
          flexDirection: 'row',
        }}>
        <Text style={{color: Colors.secondaryTextColor}}>
          Don't have an account?
        </Text>
        <TouchableOpacity>
          <Text style={{color: Colors.acent}}>Sign up</Text>
        </TouchableOpacity>
      </View>
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
    flexDirection: 'row',
  },
  input: {
    height: 56,
    width: '100%',
    paddingStart: 16,
    paddingEnd: 16,
  },
});
