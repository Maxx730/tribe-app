import React from 'react';
import { StyleSheet, Text, View, Button, Image, ImageBackground, TextInput, Alert} from 'react-native';

//IMPORT OTHER COMPONENTS
import StreamView from '../components/StreamView';
import TribeActionbar from '../components/TribeActionbar';

export default class MainScreen extends React.Component{
  render(){
    return(
      <View style={style.mainview}>
        <TribeActionbar/>
        <StreamView/>
      </View>
    );
  }
}

const style = StyleSheet.create({
  mainview:{
    backgroundColor:"#000",
    flex:1
  }
})
