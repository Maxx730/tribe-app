import React from 'react';
import { StyleSheet, Text, View, Button, Image, ImageBackground, TextInput, Alert} from 'react-native';
import { StackNavigator } from 'react-navigation';

//IMPORT FORM COMPONENTS.
import LoginForm from './components/LoginForm';
import SignUpForm from './components/SignUpForm';

//IMPORT OUR DIFFERNT SCREENS FROM THE SCREENS FOLDER.
import MainScreen from './screens/MainScreen';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      FocusedForm: "login",
      Title: "Tribe",
    }
  }

  static navigationOptions = {
    headerStyle:{
      display:"none"
    }
  };

  //Make sure the user has filled out the login and password field and then send a
  //request to the server and check if the information it correct.
  CheckLogin = (UserObj) => {
    console.log(UserObj);
    //Here we are going to make a POST request to our backend server to Check
    //if the provided username and password are in the database and are correct.
    fetch('http://www.squidswap.com:4000/user/login',{
      method:'POST',
      headers:{
        'Accept' : 'application/json',
        'Content-Type' : 'application/json'
      },
      body:JSON.stringify({
        username: UserObj.LoginUsername,
        password: UserObj.LoginPassword
      })
    }).then(response => response.json()).then(
      response => {
        console.log(response);
      }
    )
  }

  //Grabs the fiends of the Sign up form, makes sure they are up to snuff and then
  //sends a request to create a user to the server.
  CheckSignUp = () => {

  }

  //Function used to toggle between the two different login screen forms.
  ToggleForms = () => {
    //Check which of the layouts is currently focused and change accordingly.
    if(this.state.FocusedForm === "login"){
        this.setState({FocusedForm:"signup"});
    }else{
        this.setState({FocusedForm:"login"});
    }

    fetch('http://www.squidswap.com:4000/user/RossTena',{
      method:'GET',
      dataType:'json',
      headers:{
        'Accept':'application/json',
        'Content-Type':'application/json'
      }
    }).then(response => response.json()).then(
      response => {

      }
    );
  }

  render() {
    const { navigate } = this.props.navigation;
    const DisplayForm = this.state.FocusedForm === "login" ? (<LoginForm check={this.CheckLogin} toggle={this.ToggleForms}/>) : (<SignUpForm toggle={this.ToggleForms}/>);

    return (
        <ImageBackground style={styles.container} source={require('./assets/images/blurred-fire.jpg')}>
          <View style={{alignSelf:"stretch"}}>

          </View>
          {DisplayForm}
          <View style={{padding:10}}>
            <Button title="Skip" onPress={() => navigate('Main')}/>
          </View>
        </ImageBackground>
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

const TribeNavigation = StackNavigator({
  Login: {screen: App},
  Main: {screen: MainScreen}
});

export default TribeNavigation;
