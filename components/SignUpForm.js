import React from 'react';
import { StyleSheet, Text, View, Button, Image, ImageBackground, TextInput, Alert} from 'react-native';

export default class SignUpForm extends React.Component{
    constructor(props){
      super(props);

      this.state = {
        DesiredUsername:"",
        Password:"",
        PasswordRepeat:"",
        Email:""
      }
    }

    render = () => {
      return(
        <View ref = "signupForm" style={styles.signuplayout}>
          <TextInput underlineColorAndroid = "transparent" onChangeText={(text) => this.setState({DesiredUsername:text})} placeholder = "Username" style={styles.forminputs}/>
          <TextInput underlineColorAndroid = "transparent" onChangeText={(text) => this.setState({Password:text})} placeholder = "Password" style={styles.forminputs}/>
          <TextInput underlineColorAndroid = "transparent" onChangeText={(text) => this.setState({PasswordRepeat:text})} placeholder = "Password (Repeat)" style={styles.forminputs}/>
          <TextInput underlineColorAndroid = "transparent" onChangeText={(text) => this.setState({Email:text})} placeholder = "E-Mail" style={styles.forminputs}/>
          <Button title="Sign Up" onPress={() => {}}/>

          <Text style={styles.subheadingstyle,{padding:5,fontSize:14,textAlign:"center",color:"#FFF",marginTop:10}}>Already have an account?</Text>
          <Button ref = "loginButtonToggle" title="Login" onPress={this.props.toggle}/>
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
