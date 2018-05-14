import React from 'react';
import { StyleSheet, Text, View, Button, Image, ImageBackground, TextInput, Alert, TouchableHighlight} from 'react-native';

export default class TabButton extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            config: this.props.config
        }
    }

    render(){
        let iconContent = "";
        let styleSheet = [style.TabButton];

        if(this.state.config.isCenter){
            styleSheet.push(style.CenterButton);
        }

        if(this.state.config.active){
            styleSheet.push(style.ButtonActive);
        }

        if(this.state.config.icon){
            iconContent = <Image source={this.state.config.path}/>;
        }else{
            iconContent = <Text>{this.props.title}</Text>;
        }
        return(
            <TouchableHighlight style={styleSheet} onPress={() => {console.log("working")}}>
                <View>
                    {iconContent}
                </View>
            </TouchableHighlight>
        );
    }
}

const style = StyleSheet.create({
    TabButton:{
        flex:1,
        alignItems:'center',
        padding:15
    },
    CenterButton:{
        borderRightWidth:1,
        borderLeftWidth:1,
        borderLeftColor:"#C2C2C2",
        borderRightColor:"#C2C2C2"
    },
    ButtonActive:{
        backgroundColor:"orange"
    }
});