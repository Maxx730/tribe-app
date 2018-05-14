import React from 'react';
import { StyleSheet, Text, View, Button, Image, ImageBackground, TextInput, Alert} from 'react-native';

export default class IconInput extends React.Component{
  render(){
    return(
      <View style={style.layoutstyle}>

        <Image style={style.iconstyle} source={require('../assets/images/icons/lock.png')}/>
        <TextInput style={style.textinput} onChangeText = {(text) => console.log("working")} underlineColorAndroid = "transparent" placeholder ={this.props.placeLabel}/>
      </View>
    );
  }
}

const style = StyleSheet.create({
  textinput:{
    flex:1,
    paddingLeft:15
  },
  iconstyle:{
    padding:10,
    width:20,
    height:20
  },
  layoutstyle:{
    padding:10,
    borderRadius:5,
    position:"relative",
    flexDirection:"row",
    backgroundColor:"#FFF"
  }
});
