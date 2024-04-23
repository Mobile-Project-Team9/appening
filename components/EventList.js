import { View, Text, FlatList, Button, Pressable, Modal, Image, ScrollView } from 'react-native'
import { React, useContext, useState, useEffect } from 'react';
import { QueryContext } from '../data/Contexts';
import { styles, colors } from '../styles/style';
import { Card, Avatar } from "react-native-paper";
import Bookmark from '../components/Bookmark'

export default function EventList() {
  const {json, setJson} = useContext(QueryContext);

  // This is the item which flatlist goes through
  function Item({ json }){
    const eventName = (json.title);
    const eventIconPath = (json.Categories[0].title);
    let eventIcon = "";
    let drawerIcon = "arrow-down";
    const [elementVisible, setElementVisible] = useState(false);

    const [modalVisible, setModalVisible] = useState(false);
    const imagePath = json?.Media?.[0]?.path;
    const openingHours = json?.activeTimeStart;
    const address = json?.meta?.streetAddress;

    const language = "fin"; // Add context here
    const [infoText1, setInfoText1] = useState("Kategoria:");
    const [infoText2, setInfoText2] = useState("Aukiolo ajat:");
    const [infoText3, setInfoText3] = useState("Osoite:");
    const [infoText4, setInfoText4] = useState("Lisää tietoa");
    const [infoText5, setInfoText5] = useState("Tietoa:");

    useEffect(() => {
      if (language == "eng") {
        setInfoText1("Category:");
        setInfoText2("Opening hours:");
        setInfoText3("Address:");
        setInfoText4("More info");
        setInfoText5("Info:");
      } else if (language == "fin") {
        setInfoText1("Kategoria:");
        setInfoText2("Aukioloajat:");
        setInfoText3("Osoite:");
        setInfoText4("Lisää tietoa");
        setInfoText5("Tietoa:");
      }
    }, [language])

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

    const leftContent = props => <Avatar.Icon {...props} icon={eventIcon} color={colors.white} style={styles.cardIcon}/>
    const rightContent = props => <Pressable onPress={() => setElementVisible(!elementVisible)} style={styles.drawerIconPressable}>
      <Avatar.Icon {...props} icon={drawerIcon} size="40" style={styles.drawerIcon}/></Pressable>
    
    // This is for card icon to change upon opening details
    if (elementVisible == false){
      drawerIcon = "arrow-up";
    } else if (elementVisible == true){
      drawerIcon = "arrow-down";
    }

    return(
      <View>
          <Card style={styles.card}>
            <Card.Title title={eventName} left={leftContent} right={rightContent} titleStyle={styles.cardText} />

            {/* This modal is drop down from card */}
            {elementVisible ? (
            <Card.Content style={styles.cardUnder}>
              <Text style={styles.text}>{infoText1} {json.Categories[0].title}</Text>
              <Text style={styles.text}>{infoText5} {json.content.length > 99 && (json.content.slice(0, 99) + "...")}
                {json.content.length <= 99 && (json.content)}</Text>
              <Button title={infoText4} onPress={() => setModalVisible(!modalVisible)} color={colors.secondaryColor}></Button>
            </Card.Content>
            ) : null}
          </Card>

          {/* This modal is full detail event page */}
          {modalVisible && (
            <Modal>
              <View style={styles.fullDetailEventView}>
                  <Pressable onPress={() => setModalVisible(!modalVisible)} style={styles.fullDetailEventExitPressable}>
                    <Avatar.Icon icon="close" size="40" style={styles.fullDetailEventExitIcon}/>
                  </Pressable>
                <Text style={styles.fullDetailEventHeader}>{json.title}</Text>
                <View style={styles.fullDetailEventImageView}>
                  <Image style={styles.fullDetailEventImage} source={{ uri: imagePath }}/>
                </View>
                <ScrollView>
                  <Text style={styles.fullDetailEventText}>{infoText1} {json.Categories[0].title}</Text>
                  {openingHours && (
                    <Text style={styles.fullDetailEventText}>{infoText2} {json.activeTimeStart} - {json.activeTimeEnd} .</Text>
                  )}
                  {address && (
                    <Text style={styles.fullDetailEventText}>{infoText3} {json.meta.streetAddress}</Text>
                  )}
                  <Text style={styles.fullDetailEventText}>{infoText5} {json.content}</Text>
                </ScrollView>
                <Bookmark item={json}/>
              </View>
            </Modal>
          )}
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