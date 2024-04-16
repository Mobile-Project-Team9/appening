import { View, Text, FlatList, Button, Pressable } from 'react-native'
import { React, useContext, useEffect, useState } from 'react';
import { QueryContext } from '../data/Contexts';
import { styles, colors } from '../styles/style';
import { Card, Avatar, Drawer, IconButton } from "react-native-paper";
import { useNavigation } from '@react-navigation/native';
import Bookmark from '../components/Bookmark'

export default function EventList() {
  const {json, setJson} = useContext(QueryContext);

  // This is the item which flatlist goes through
  function Item({ json }){
    const eventName = (json.title);
    const eventIconPath = (json.Categories[0].title);
    let eventIcon = "";
    let drawerIcon = "arrow-down";

    // Icons for every event according to category
    if (eventIconPath == "Puut ja kasvit"){
      eventIcon = "pine-tree";
    } else if (eventIconPath == "Taideteos"){
      eventIcon = "globe-model";
    } else if (eventIconPath == "Arkkitehtuuri"){
      eventIcon = "android-studio";
    } else if (eventIconPath == "Puisto"){
      eventIcon = "tree";
    } else if (eventIconPath == "Patsas"){
      eventIcon = "account";
    } else if (eventIconPath == "Nähtävyys"){
      eventIcon = "apple-keyboard-command";
    } else if (eventIconPath == "Ravintola"){
      eventIcon = "food";
    } else if (eventIconPath == "Info"){
      eventIcon = "information-variant";
    } else if (eventIconPath == "Historiallinen kohde"){
      eventIcon = "bank";
    } else if (eventIconPath == "Tapahtuma"){
      eventIcon = "account-cash";
    } else if (eventIconPath == "Tulentekopaikka"){
      eventIcon = "campfire";
    } else if (eventIconPath == "Kirkko"){
      eventIcon = "cross";
    } else if (eventIconPath == "Kulttuuritalo"){
      eventIcon = "atom";
    } else if (eventIconPath == "Näköalatorni"){
      eventIcon = "binoculars";
    } else if (eventIconPath == "Kulttuuri"){
      eventIcon = "atom";
    } else if (eventIconPath == "Galleria"){
      eventIcon = "view-gallery";
    } else if (eventIconPath == "Virtuaalipolku"){
      eventIcon = "virtual-reality";
    } else if (eventIconPath == "Reitti"){
      eventIcon = "apple-safari";
    } else if (eventIconPath == "Roskakatos"){
      eventIcon = "trash-can";
    } else if (eventIconPath == "Retkeilyreitti"){
      eventIcon = "apple-safari";
    } else if (eventIconPath == "Kuivakäymälä"){
      eventIcon = "toilet";
    } else if (eventIconPath == "Parkkipaikka"){
      eventIcon = "parking";
    } else if (eventIconPath == "Liiteri"){
      eventIcon = "greenhouse";
    } else if (eventIconPath == "Kirjasto"){
      eventIcon = "book-open-blank-variant";
    } else if (eventIconPath == "Laavu"){
      eventIcon = "bed-empty";
    } else if (eventIconPath == "Uimaranta"){
      eventIcon = "swim";
    }

    // This is for events to open and close
    const [elementVisible, setElementVisible] = useState(false);

    const leftContent = props => <Avatar.Icon {...props} icon={eventIcon} color={colors.white} style={styles.cardIcon}/>
    
    const rightContent = props => <Pressable onPress={() => setElementVisible(!elementVisible)} style={styles.drawerIconPressable}>
      <Avatar.Icon {...props} icon={drawerIcon} size="40" style={styles.drawerIcon}/></Pressable>
    
    // This is for card icon to change upon opening details
    if (elementVisible == false){
      drawerIcon = "arrow-up";
    } else if (elementVisible == true){
      drawerIcon = "arrow-down";
    }
    
  

    // Opens full info of event
    function openFullEvent(){
      // Fill once full even item page is done
    }

    return(
      <View>
          <Card style={styles.card}>
            <Card.Title title={eventName} left={leftContent} right={rightContent} titleStyle={styles.cardText} />
            {elementVisible ? (
            <Card.Content style={styles.cardUnder}>
              <Bookmark/>
              <Text style={styles.text}>Category: {json.Categories[0].title}</Text>
              <Text style={styles.text}>Info: {json.content}</Text>
              <Button title="Event Page" onPress={openFullEvent()} color= {colors.secondaryColor}></Button>
            </Card.Content>
            ) : null}
          </Card>
      </View>
    )
  }
  
  return (
    <View>
      {/* Flatlist goes through the json and make a card with a list for each event */}
      <FlatList data={json} renderItem={({ item }) => <Item json={item}/>}/>
    </View>
  )
}