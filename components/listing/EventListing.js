import React from 'react';
import { StyleSheet, Text, View, Button, Image, ImageBackground, TextInput, Alert, TouchableHighlight} from 'react-native';

export default class EventListing extends React.Component{
    constructor(props){
        super(props);

    }
    render(){
        return(
            <View style={style.EventListItem}>
                <View>

                </View>
                <Text style={style.EventTitle}>
                    {this.props.evt.title}
                </Text>
                <Text>
                    {this.props.evt.creator}
                </Text>
                <Text>
                    {this.props.evt.description}
                </Text>

                <View style={style.EventChevron}>
                    <Image source={require('../../assets/icons/right.png')}/>
                </View>
            </View>
        )
    }
}

const style = StyleSheet.create({
    EventListItem:{
        padding:15,
        borderBottomWidth:1,
        borderBottomColor:"#EDEDED"
    },
    EventTitle:{
        fontSize:24
    },
    EventDescription:{

    },
    EventCreator:{

    },
    EventChevron:{
        position:"absolute",
        right:20,
        top:0,
        bottom:0,
        justifyContent: 'center',
        alignItems: 'center'
    }
});