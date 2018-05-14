import React from 'react';
import { StyleSheet, Text, View, Button, Image, ImageBackground, TextInput, Alert} from 'react-native';

import TabButton from './TabButton';

export default class TabBar extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            Position:"bottom",
            FocusedView: "Events"
        }
    }

    ChangeFocusedView = () => {
        console.log("testing");
    }
    
    render(){
        let eventConfig = {icon:true,path:require("../../assets/icons/calendar.png"),active:true};
        let tribeConfig = {icon:true,path:require("../../assets/icons/feather.png"),isCenter:true};
        let profileConfig = {icon:true,path:require("../../assets/icons/user.png")};

        return(
            <View style={style.TabBar}>
                <TabButton ref = "Events" config={eventConfig} title="first button"/>
                <TabButton ref = "Tribes" config={tribeConfig} title="second button"/>
                <TabButton ref = "Profile"  config={profileConfig} title="third button"/>
            </View>
        );
    }
}

const style = StyleSheet.create({
    TabBar:{
        backgroundColor:"#E3E3E3",
        flexDirection:"row"
    }
});