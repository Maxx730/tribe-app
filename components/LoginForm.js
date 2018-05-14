import React from 'react';
import { StyleSheet, Text, View, Button, Image, ImageBackground, TextInput, Alert} from 'react-native';
import IconInput from './IconInput';

export default class LoginForm extends React.Component{
  constructor(props){
      super(props);

      this.state = {
        LoginUsername: "",
        LoginPassword: ""
      }
  }

  render(){
    return(
      <View ref = "loginForm" style={styles.loginlayout}>
        <TextInput onChangeText = {(text) => this.setState({LoginPassword:text})} ref = "PasswordField" underlineColorAndroid = "transparent" placeholder = "Password" style={styles.forminputs}/>
        <Button title="Login" onPress={() => this.props.check(this.state)}/>

        <Text style={styles.subheadingstyle,{padding:5,fontSize:14,textAlign:"center",color:"#FFF",marginTop:10}}>Dont have an account?</Text>
        <Button ref = "singupButtonToggle" title="Sign Up" onPress={this.props.toggle}/>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding:50
  },
  forminputs:{
    backgroundColor:"#FFF",
    marginBottom:7,
    padding:8,
    borderRadius:5,
    paddingLeft:15
  },
  loginlayout:{
    justifyContent:"center",
    alignSelf:'stretch'
  },
  signuplayout:{
    flex: 2,
    justifyContent:"center",
    alignSelf:'stretch'
  },
  tribetitle:{
    fontSize:40,
    color:"#FFF",
    alignSelf:"stretch",
    textAlign:"center"
  },
  hide:{
    display:"none"
  },
  subheadingstyle:{
    color:"#FFF",
    fontSize:20,
    paddingBottom:10
  }
});
