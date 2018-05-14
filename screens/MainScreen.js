import React from 'react';
import { FlatList, StyleSheet, Text, View, Button, Image, ImageBackground, TextInput, Alert} from 'react-native';

import TabBar from '../components/tabs/TabBar';
import TribeTopCard from '../components/cards/TribeTopCard';
import EventListing from '../components/listing/EventListing';

export default class MainScreen extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      tribes:[
        {title:"Tribe 1",descripion:"Lorem dipsum solor amet.",creator:"User 1"},
        {title:"Tribe 2",descripion:"Lorem dipsum solor amet.",creator:"User 2"},
        {title:"Tribe 3",descripion:"Lorem dipsum solor amet.",creator:"User 3"},
        {title:"Tribe 1",descripion:"Lorem dipsum solor amet.",creator:"User 1"},
        {title:"Tribe 2",descripion:"Lorem dipsum solor amet.",creator:"User 2"},
        {title:"Tribe 3",descripion:"Lorem dipsum solor amet.",creator:"User 3"},
        {title:"Tribe 1",descripion:"Lorem dipsum solor amet.",creator:"User 1"},
        {title:"Tribe 2",descripion:"Lorem dipsum solor amet.",creator:"User 2"},
        {title:"Tribe 3",descripion:"Lorem dipsum solor amet.",creator:"User 3"}
      ],
      events:[
        {title:"Event Title",creator:"User 1",description:"Lorem dipsum solor amet."},
        {title:"Event Title",creator:"User 1",description:"Lorem dipsum solor amet."},
        {title:"Event Title",creator:"User 1",description:"Lorem dipsum solor amet."},
        {title:"Event Title",creator:"User 1",description:"Lorem dipsum solor amet."},
        {title:"Event Title",creator:"User 1",description:"Lorem dipsum solor amet."},
        {title:"Event Title",creator:"User 1",description:"Lorem dipsum solor amet."},
        {title:"Event Title",creator:"User 1",description:"Lorem dipsum solor amet."},
        {title:"Event Title",creator:"User 1",description:"Lorem dipsum solor amet."},
        {title:"Event Title",creator:"User 1",description:"Lorem dipsum solor amet."},
      ]
    }
  }
  
  render(){
    return(
      <View style={style.MainLayout}>
        <FlatList
            horizontal={true}
            keyExtractor={(item, index) => index.toString()}
            style={style.HorizontalList}
            data={this.state.tribes}
            renderItem={({tribe}) => <TribeTopCard/>}
          />
        <View style={style.HalfLightLayout}>
          <FlatList
              keyExtractor={(item, index) => index.toString()}
              data={this.state.events}
              renderItem={({item}) => <EventListing evt={item}/>}
              style={{flex:1}}
            />
        </View>

        <TabBar style={{height:60}}/>
      </View>
    );
  }
}

const style = StyleSheet.create({
  MainLayout:{
    flex:1,
    flexDirection:"column"
  },
  HorizontalTribeList:{
    backgroundColor:"#171717",
    flex:1
  },
  HalfLightLayout:{
    marginTop:1,
    backgroundColor:"white",
    flex:2.25
  },
  HorizontalList:{
    flex:1
  }
});