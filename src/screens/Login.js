import React, {useState} from 'react';
import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import {Styles} from '../cofig/Styles';
import {Colors} from '../cofig/Colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import EnIcon from 'react-native-vector-icons/Entypo';
import Error from '../components/Error';
import { useDispatch } from "react-redux";
import { userAuthSignIn } from "../store/actions/AuthAction";
import { loginUser } from '../api/AuthApi';

function Login({navigation}) {
  const dispatch = useDispatch();
  const [data, setData] = useState({
    username: 'null',
    password: 'null',
  });
  const [isDisable, setIsDisable] = useState(true);
  const [encrypt, setEncrypt] = useState(true);
  const [authError,setAuthError] = useState(false);

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
  const login = ()=>{
    if (
      !data.username ||
      data.username == 'null' ||
      !data.password ||
      data.password == 'null' 
    ) {
      setIsDisable(true);
    } else {
      loginUser(data,(err,token)=>{
        if (!err) {
          console.log("token: "+token);
          
          dispatch(userAuthSignIn(token))
        }else{
          if (err==="user already exist") {
            setAuthError(true)
          }else{
            setAuthError(false)
          }  
        }
      })
    }
  }
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

      <View style={Styles.inputContainer}>
        <View style={{flex: 7}}>
          <TextInput
            style={Styles.input}
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
        <Error
          message="Username must be consist of a-z, 0-9, underscore, hyphen, minimum 3
        and maximum 15 charchter long"
        />
      ) : null}

      <View style={Styles.inputContainer}>
        <View style={{flex: 7}}>
          <TextInput
            style={Styles.input}
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
        <Error
          message="Password must be consist of atlist a-z, A-Z, 0-9, special character,
        minimum 8 and maximum 15 charchter long"
        />
      ) : null}

      <TouchableOpacity
        style={isDisable ? Styles.ButtonDisable : Styles.ButtonEnable}
        disabled={isDisable} onPress={login}>
        <View>
          <Text style={Styles.buttonText}>Log in</Text>
        </View>
      </TouchableOpacity>

      {authError?(<Error style={{marginTop:16}}
          message="credentials are incorrect!"
        />):null}
      

      <View
        style={{
          marginTop: 128,
          justifyContent: 'center',
          flexDirection: 'row',
        }}>
        <Text style={{color: Colors.secondaryTextColor}}>
          Don't have an account?
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Registration')}>
          <Text style={{color: Colors.acent}}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Login;
