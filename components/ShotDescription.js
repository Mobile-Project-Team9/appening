import React, { useState, useEffect, useContext } from 'react';
import { Modal, View, Text, Image, ScrollView, Pressable, Button } from 'react-native';
import { styles, colors } from '../styles/style';
import { Avatar } from "react-native-paper";
import Bookmark from './Bookmark';
import { LanguageContext } from '../data/Contexts';

const ShotDescription = ({ visible, onRequestClose, selectedShot }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const eventIconPath = (selectedShot?.Categories[0]?.title);
    const imagePath = selectedShot?.Media?.[0]?.path;
    const openingHours = selectedShot?.activeTimeStart;
    const address = selectedShot?.meta?.streetAddress;
    const category = selectedShot?.Categories[0].title;

    const { language } = useContext(LanguageContext);
    const [infoCategoryHeader, setInfoCategoryHeader] = useState("Kategoria:");
    const [infoCategoryLabel, setInfocategoryLabel] = useState("");
    const [infoHours, setInfoHours] = useState("Aukioloajat:");
    const [infoAddress, setInfoAddress] = useState("Osoite:");
    const [infoButton, setInfoButton] = useState("Lisää tietoa");
    const [infoTitle, setInfoTitle] = useState("");
    const [infoTextHeader, setInfoTextHeader] = useState("Tietoa:");
    const [infoTextContent, setInfoTextContent] = useState("");

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
        if (selectedShot?.i18n?.en?.title) {
            setInfoTitle(selectedShot?.i18n?.en?.title);
        } else if (!selectedShot?.i18n?.en?.title) {
            setInfoTitle(selectedShot?.title);
        }
        
        if (selectedShot?.i18n?.en?.content) {
            let infoTemp = (selectedShot?.i18n?.en?.content);
            infoTemp = infoTemp.replaceAll("#", "");
            infoTemp = infoTemp.replaceAll("**", "");
            setInfoTextContent(infoTemp);
        } else if (!selectedShot?.i18n?.en?.content) {
            let infoTemp = (selectedShot?.content);
            infoTemp = infoTemp?.replaceAll("#", "");
            infoTemp = infoTemp?.replaceAll("**", "");
            setInfoTextContent("Content cannot be found in your selected language. \n \n" + infoTemp);
        }
      } else if (language == "fi") {
        setInfoCategoryHeader("Kategoria:");
        setInfocategoryLabel(selectedShot?.Categories[0].title);
        setInfoHours("Aukioloajat:");
        setInfoAddress("Osoite:");
        setInfoButton("Lisää tietoa");
        setInfoTitle(selectedShot?.title);
        setInfoTextHeader("Tietoa:");
        let infoTemp = (selectedShot?.content);
        infoTemp = infoTemp?.replaceAll("#", "");
        infoTemp = infoTemp?.replaceAll("**", "");
        setInfoTextContent(infoTemp);
      }
    }, [selectedShot])

    const handleCloseModal = () => {
        setModalVisible(false);
        onRequestClose();
    }

    if (!selectedShot) {
        return null;
    }

    return (
        <Modal visible={visible} onRequestClose={handleCloseModal} transparent={true}>
            <Pressable onPress={handleCloseModal}>
                <View style={styles.shortDescriptionPressableExit}></View>
            </Pressable>
            <View style={styles.modalContainer}>
                <Pressable onPress={handleCloseModal} style={styles.fullDetailEventExitPressable}>
                    <Avatar.Icon icon="close" size="40" style={styles.fullDetailEventExitIcon}/>
                </Pressable>
                <Text style={styles.title}>{infoTitle}</Text>
                {imagePath && (
                    <Image
                        source={{ uri: imagePath }}
                        style={styles.image}
                    />
                )}
                {category && (
                    <Text style={styles.infoText}>{infoCategoryHeader} {infoCategoryLabel}</Text>
                )}
                {openingHours && (
                    <Text style={styles.infoText}>{infoHours} {selectedShot?.ActiveTimeStart}</Text>
                )}
                <Button title={infoButton} onPress={() => setModalVisible(true)} color={colors.secondaryColor}></Button>
                {modalVisible && (
                    <Modal>
                        <View style={styles.fullDetailEventView}>
                            <Pressable onPress={() => setModalVisible(!modalVisible)} style={styles.fullDetailEventExitPressable}>
                                <Avatar.Icon icon="close" size="40" style={styles.fullDetailEventExitIcon}/>
                            </Pressable>
                            <Text style={styles.fullDetailEventHeader}>{infoTitle}</Text>
                            <View style={styles.fullDetailEventImageView}>
                            {imagePath && (
                                <Image style={styles.fullDetailEventImage} source={{ uri: imagePath }}/>
                            )}
                            </View>
                            <ScrollView>
                            <Text style={styles.fullDetailEventText}>{infoCategoryHeader} {infoCategoryLabel}</Text>
                            {openingHours && (
                                <Text style={styles.fullDetailEventText}>{infoHours} {selectedShot?.activeTimeStart} - {selectedShot?.activeTimeEnd} .</Text>
                            )}
                            {address && (
                                <Text style={styles.fullDetailEventText}>{infoAddress} {selectedShot?.meta.streetAddress}</Text>
                            )}
                            <Text style={styles.fullDetailEventText}>{infoTextHeader} {infoTextContent}</Text>
                            </ScrollView>
                            <Bookmark item={selectedShot}/>
                        </View>
                    </Modal>
                )}
            </View>
        </Modal>
    );
}

export default ShotDescription;
