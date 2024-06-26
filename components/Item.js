import { View, Text, FlatList, Button, Pressable, Modal, Image, ScrollView } from 'react-native'
import { React, useContext, useState, useEffect } from 'react';
import { LanguageContext, QueryContext } from '../data/Contexts';
import { styles, colors } from '../styles/style';
import { Card, Avatar } from "react-native-paper";
import Bookmark from '../components/Bookmark';
import { useNavigation } from '@react-navigation/native';




export default function Item({json}) {

  const navigation = useNavigation();
  const eventIconPath = (json.Categories[0].title);
  let eventIcon = "";
  let drawerIcon = "arrow-down";
  const [elementVisible, setElementVisible] = useState(false);

  const [modalVisible, setModalVisible] = useState(false);
  const imagePath = json?.Media?.[0]?.path;
  const openingHours = json?.activeTimeStart;
  const address = json?.meta?.streetAddress;

  const { language } = useContext(LanguageContext);
  const [infoCategory, setInfoCategory] = useState("Kategoria:");
  const [infoHours, setInfoHours] = useState("Aukioloajat:");
  const [infoAddress, setInfoAddress] = useState("Osoite:");
  const [infoButton, setInfoButton] = useState("Lisää tietoa");
  const [infoTitle, setInfoTitle] = useState("");
  const [infoTextHeader, setInfoTextHeader] = useState("Tietoa:");
  const [infoTextContent, setInfoTextContent] = useState("");
  const [mapButton, setMapButton] = useState("Näytä kartalla");
  const [directing, setDirecting] = useState("Koti");

  useEffect(() => {
    if (language == "en") {
      setInfoCategory("Category:");
      setInfoHours("Opening hours:");
      setInfoAddress("Address:");
      setInfoButton("More info");
      setInfoTextHeader("Info:");
      setMapButton("Show On Map");
      setDirecting("Home");
      if (json?.i18n?.en?.title) {
        setInfoTitle(json?.i18n?.en?.title);
      } else if (!json?.i18n?.en?.title) {
        setInfoTitle("Title can't be found in this language.");
      }
      if (json?.i18n?.en?.content) {
        let infoTemp = (json?.i18n?.en?.content);
        infoTemp = infoTemp.replaceAll("#", "");
        infoTemp = infoTemp.replaceAll("**", "");
        setInfoTextContent(infoTemp);
      } else if (!json?.i18n?.en?.content) {
        let infoTemp = (json?.content);
        infoTemp = infoTemp?.replaceAll("#", "");
        infoTemp = infoTemp?.replaceAll("**", "");
        setInfoTextContent("Content cannot be found in your selected language. \n \n" + infoTemp);
      }
    } else if (language == "fi") {
      setInfoCategory("Kategoria:");
      setInfoHours("Aukioloajat:");
      setInfoAddress("Osoite:");
      setInfoButton("Lisää tietoa");
      setInfoTitle(json?.title);
      setInfoTextHeader("Tietoa:");
      setMapButton("Näytä kartalla");
      setDirecting("Koti");
      let infoTemp = (json?.content);
      infoTemp = infoTemp.replaceAll("#", "");
      infoTemp = infoTemp.replaceAll("**", "");
      setInfoTextContent(infoTemp);
    }
  }, [json])

  // Icons for every event according to category
  if (eventIconPath == "Puut ja kasvit") {
    eventIcon = "pine-tree";
  } else if (eventIconPath == "Taideteos") {
    eventIcon = "globe-model";
  } else if (eventIconPath == "Arkkitehtuuri") {
    eventIcon = "android-studio";
  } else if (eventIconPath == "Puisto") {
    eventIcon = "tree";
  } else if (eventIconPath == "Patsas") {
    eventIcon = "account";
  } else if (eventIconPath == "Nähtävyys") {
    eventIcon = "apple-keyboard-command";
  } else if (eventIconPath == "Ravintola") {
    eventIcon = "food";
  } else if (eventIconPath == "Info") {
    eventIcon = "information-variant";
  } else if (eventIconPath == "Historiallinen kohde") {
    eventIcon = "bank";
  } else if (eventIconPath == "Tapahtuma") {
    eventIcon = "account-cash";
  } else if (eventIconPath == "Tulentekopaikka") {
    eventIcon = "campfire";
  } else if (eventIconPath == "Kirkko") {
    eventIcon = "cross";
  } else if (eventIconPath == "Kulttuuritalo") {
    eventIcon = "atom";
  } else if (eventIconPath == "Näköalatorni") {
    eventIcon = "binoculars";
  } else if (eventIconPath == "Kulttuuri") {
    eventIcon = "atom";
  } else if (eventIconPath == "Galleria") {
    eventIcon = "view-gallery";
  } else if (eventIconPath == "Virtuaalipolku") {
    eventIcon = "virtual-reality";
  } else if (eventIconPath == "Reitti") {
    eventIcon = "apple-safari";
  } else if (eventIconPath == "Roskakatos") {
    eventIcon = "trash-can";
  } else if (eventIconPath == "Retkeilyreitti") {
    eventIcon = "apple-safari";
  } else if (eventIconPath == "Kuivakäymälä") {
    eventIcon = "toilet";
  } else if (eventIconPath == "Parkkipaikka") {
    eventIcon = "parking";
  } else if (eventIconPath == "Liiteri") {
    eventIcon = "greenhouse";
  } else if (eventIconPath == "Kirjasto") {
    eventIcon = "book-open-blank-variant";
  } else if (eventIconPath == "Laavu") {
    eventIcon = "bed-empty";
  } else if (eventIconPath == "Uimaranta") {
    eventIcon = "swim";
  }

  const leftContent = props => <Avatar.Icon {...props} icon={eventIcon} color={colors.white} style={styles.cardIcon} />
  const rightContent = props => <Pressable onPress={() => setElementVisible(!elementVisible)} style={styles.drawerIconPressable}>
    <Avatar.Icon {...props} icon={drawerIcon} size="40" style={styles.drawerIcon} /></Pressable>

  // This is for card icon to change upon opening details
  if (elementVisible == false) {
    drawerIcon = "arrow-up";
  } else if (elementVisible == true) {
    drawerIcon = "arrow-down";
  }

  return (
    <View>
      <Card style={styles.card}>
        <Card.Title title={infoTitle} left={leftContent} right={rightContent} titleStyle={styles.cardText} />

        {/* This modal is drop down from card */}
        {elementVisible ? (
          <Card.Content style={styles.cardUnder}>
            <Text style={styles.text}>{infoCategory} {json.Categories[0].title}</Text>
            <Text style={styles.text}>{infoTextHeader} {infoTextContent.length > 99 && (infoTextContent.slice(0, 99) + "...")}
              {infoTextContent.length <= 99 && (infoTextContent)}</Text>
            <View style={styles.cardButtonContainer}>
              <Button title={infoButton}  onPress={() => setModalVisible(!modalVisible)} color={colors.secondaryColor}></Button>
              <Button title={mapButton} color={colors.secondaryColor} onPress={() => navigation.navigate(directing, { item: json })}></Button>
            </View>

          </Card.Content>
        ) : null}
      </Card>

      {/* This modal is full detail event page */}
      {modalVisible && (
        <Modal>
          <View style={styles.fullDetailEventView}>
            <Pressable onPress={() => setModalVisible(!modalVisible)} style={styles.fullDetailEventExitPressable}>
              <Avatar.Icon icon="close" size="40" style={styles.fullDetailEventExitIcon} />
            </Pressable>
            <Text style={styles.fullDetailEventHeader}>{infoTitle}</Text>
            <View style={styles.fullDetailEventImageView}>
              <Image style={styles.fullDetailEventImage} source={{ uri: imagePath }} />
            </View>
            <ScrollView>
              <Text style={styles.fullDetailEventText}>{infoCategory} {json.Categories[0].title}</Text>
              {openingHours && (
                <Text style={styles.fullDetailEventText}>{infoHours} {json.activeTimeStart} - {json.activeTimeEnd} .</Text>
              )}
              {address && (
                <Text style={styles.fullDetailEventText}>{infoAddress} {json.meta.streetAddress}</Text>
              )}
              <Text style={styles.fullDetailEventText}>{infoTextHeader} {infoTextContent}</Text>
            </ScrollView>
            <Bookmark item={json} />
          </View>
        </Modal>
      )}
    </View>
  )
}