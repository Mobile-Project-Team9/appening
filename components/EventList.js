import { View, Text, ScrollView, FlatList, Button } from 'react-native'
import { React, useContext, useEffect } from 'react';
import fullData from "../data/fullData.json";
import { QueryContext } from '../data/Contexts';
import { styles, colors } from '../styles/style';
import { Card, Avatar, Drawer } from "react-native-paper";

export default function EventList() {
  const {json, setJson} = useContext(QueryContext);

  useEffect(() => {
    setJson(fullData);
  }, []);

  // This is the item which flatlist goes through
  function Item({ json }){
    const eventName = (json.title);
    // None of the icons load, placeholder human icon is active right now
    const eventIcon = 0; //(json.Categories[0].icon);

    // I was thinking this would open and close drawer
    function drawer(){
      disabled = false;
    }

    const leftContent = props => <Avatar.Icon {...props} /* Put event category icon here, human is placeholder
      final version will have eventicon */ icon="human"
      color={colors.white}
      style={styles.cardIcon}/>
    
    const rightContent = props => <Drawer.CollapsedItem focusedIcon="chevron-up"
      unfocusedIcon="chevron-down"
      onPress={drawer()} // Not sure what to add here to make it open a bigger section
      theme={{ colors: { onSurfaceVariant: colors.white }}}/>

    // Opens full info of event
    function openFullEvent(){
      // Fill once full even item page is done
    }

    return(
      <View>
        <ScrollView>
            <Card style={styles.card}>
              <Card.Title title={eventName} left={leftContent} right={rightContent} titleStyle={styles.cardText}/> 
              <Card.Content style={styles.cardUnder}>
                <Text style={styles.text}>Category: {json.Categories[0].title}</Text>
                <Text style={styles.text}>Info: {json.content}</Text>
                <Button title="Event Page" onPress={openFullEvent()} /* Style doesn't work */ style={styles.cardButton}></Button>
              </Card.Content>
            </Card>
          </ScrollView>
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