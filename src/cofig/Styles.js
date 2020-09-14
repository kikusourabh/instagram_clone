import {StyleSheet} from 'react-native';
import {Colors} from './Colors';

export const Styles = StyleSheet.create({
  windowBackground: {
    flex: 1,
    backgroundColor: Colors.white,
  },

  logo: {
    width: '20%',
  },

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
