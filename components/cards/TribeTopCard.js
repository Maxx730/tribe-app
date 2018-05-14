import React from 'react';
import { StyleSheet, Text, View, Button, Image, ImageBackground, TextInput, Alert} from 'react-native';

export default class TribeTopCard extends React.Component{
    render(){
        return(
            <View style={style.TopCardLayout}>
                <View style={style.TribeImage}>
                    
                </View>
                <View style={style.TitleBackground}>
                    <Text style={style.TribeTitle}>Tribe Title</Text>
                    <Text style={style.TribeCreator}>Creator Id</Text>
                </View>
            </View>
        );
    }
}

const style = StyleSheet.create({
    TopCardLayout:{
        backgroundColor:"#FAFAFA",
        width:250,
        marginRight:1,
        borderColor:"#FFFFFF",
        padding:10
    },
    TribeImage:{
        width:100,
        backgroundColor:"#EDEDED",
        position:"absolute",
        left:0,
        top:0,
        bottom:0
    },
    TribeTitle:{
        fontSize:25
    },
    TribeCreator:{

    },
    TitleBackground:{
        padding:8
    }
});