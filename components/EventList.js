import { View, Text, FlatList, Button, Pressable, Modal, Image, ScrollView } from 'react-native'
import { React, useContext, useState, useEffect } from 'react';
import { LanguageContext, QueryContext } from '../data/Contexts';
import { styles, colors } from '../styles/style';
import { Card, Avatar } from "react-native-paper";
import Bookmark from '../components/Bookmark';
import { useNavigation } from '@react-navigation/native';

export default function EventList() {
  const { json, setJson } = useContext(QueryContext);
  const navigation = useNavigation();

  // This is the item which flatlist goes through
  function Item({ json }) {
    const eventIconPath = (json.Categories[0].title);
    let eventIcon = "";
    let drawerIcon = "arrow-down";
    const [elementVisible, setElementVisible] = useState(false);

    const [modalVisible, setModalVisible] = useState(false);
    const imagePath = json?.Media?.[0]?.path;
    const openingHours = json?.activeTimeStart;
    const address = json?.meta?.streetAddress;

    const { language } = useContext(LanguageContext);
    const [infoCategoryHeader, setInfoCategoryHeader] = useState("Kategoria:");
    const [infoCategoryLabel, setInfocategoryLabel] = useState("");
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
        setInfoCategoryHeader("Category:");
        
        // Englannin kieliset kategorian nimet
        if (eventIconPath == "Puut ja kasvit") {
          setInfocategoryLabel("Trees and nature");
        } else if (eventIconPath == "Taideteos") {
          setInfocategoryLabel("Art piece");
        } else if (eventIconPath == "Arkkitehtuuri") {
          setInfocategoryLabel("Architecture");
        } else if (eventIconPath == "Puisto") {
          setInfocategoryLabel("Park");
        } else if (eventIconPath == "Patsas") {
          setInfocategoryLabel("Statue");
        } else if (eventIconPath == "Nähtävyys") {
          setInfocategoryLabel("Attraction");
        } else if (eventIconPath == "Ravintola") {
          setInfocategoryLabel("Restaurant");
        } else if (eventIconPath == "Info") {
          setInfocategoryLabel("Info");
        } else if (eventIconPath == "Historiallinen kohde") {
          setInfocategoryLabel("Historical place");
        } else if (eventIconPath == "Tapahtuma") {
          setInfocategoryLabel("Event");
        } else if (eventIconPath == "Tulentekopaikka") {
          setInfocategoryLabel("Fireplace");
        } else if (eventIconPath == "Kirkko") {
          setInfocategoryLabel("Church");
        } else if (eventIconPath == "Kulttuuritalo") {
          setInfocategoryLabel("Cultural center");
        } else if (eventIconPath == "Näköalatorni") {
          setInfocategoryLabel("Observation tower");
        } else if (eventIconPath == "Kulttuuri") {
          setInfocategoryLabel("Culture");
        } else if (eventIconPath == "Galleria") {
          setInfocategoryLabel("Gallery");
        } else if (eventIconPath == "Virtuaalipolku") {
          setInfocategoryLabel("Virtual path");
        } else if (eventIconPath == "Reitti") {
          setInfocategoryLabel("Route");
        } else if (eventIconPath == "Roskakatos") {
          setInfocategoryLabel("Garbage shed");
        } else if (eventIconPath == "Retkeilyreitti") {
          setInfocategoryLabel("Hiking trail");
        } else if (eventIconPath == "Kuivakäymälä") {
          setInfocategoryLabel("Outhouse");
        } else if (eventIconPath == "Parkkipaikka") {
          setInfocategoryLabel("Parking lot");
        } else if (eventIconPath == "Liiteri") {
          setInfocategoryLabel("Shed");
        } else if (eventIconPath == "Kirjasto") {
          setInfocategoryLabel("Lean-to");
        } else if (eventIconPath == "Uimaranta") {
          setInfocategoryLabel("Beach");
        }

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
        setInfoCategoryHeader("Kategoria:");
        setInfocategoryLabel(json.Categories[0].title);
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
              <Text style={styles.text}>{infoCategoryHeader} {infoCategoryLabel}</Text>
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
                <Text style={styles.fullDetailEventText}>{infoCategoryHeader} {infoCategoryLabel}</Text>
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

  return (
    <View>
      {/* Flatlist goes through the json and make a card with a list for each event */}
      <FlatList data={json.sort((a, b) => a.title.localeCompare(b.title))} renderItem={({ item }) => <Item json={item} />} />
    </View>
  )
}