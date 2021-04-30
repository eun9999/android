import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'column',
  },
  Header: {
    width: '100%',
    height: '5%',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  Title: {
    width: '100%',
    height: '5%',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'orange',
  },
  Body: {
    flex: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Footer: {
    width: '100%',
    height: '10%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 30,
    color: 'orange',
    fontWeight: 'bold',
  },
  TextInput: {
    width: '90%',
    borderWidth: 2,
    backgroundColor: 'white',
    borderColor: 'orange',
    borderRadius: 8,
    marginLeft: 10,
    marginRight: 10,
    paddingLeft: 10,
    paddingRight: 10,
    height: 40,
  },
  btn: {
    marginLeft: 10,
    marginRight: 10,
    height: 40,
    width: 60,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'orange',
    borderRadius: 8,
  },
  insertBtn: {
    marginLeft: 10,
    marginRight: 10,
    height: 40,
    width: 150,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'orange',
    borderRadius: 8,
  },
});

export default style;
