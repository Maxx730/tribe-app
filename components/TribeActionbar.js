import React from 'react';
import { StyleSheet, Text, View, Button, Image, ImageBackground, TextInput, Alert} from 'react-native';

export default class TribeActionbar extends React.Component{
  render(){
    return(
      <View>
        <Text style={style.actionbarlayout}>
          Tribe
        </Text>
      </View>
    );
  }
}

const style = StyleSheet.create({
  actionbarlayout:{
    backgroundColor:"red",
    color:"#FFF"
  }
});
