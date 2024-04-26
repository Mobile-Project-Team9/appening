import React, { useState, useEffect, useContext } from 'react';
import { Modal, View, Text, Image, ScrollView, Pressable, Button } from 'react-native';
import { styles, colors } from '../styles/style';
import { Avatar } from "react-native-paper";
import Bookmark from './Bookmark';
import { LanguageContext } from '../data/Contexts';

const ShotDescription = ({ visible, onRequestClose, selectedShot }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const imagePath = selectedShot?.Media?.[0]?.path;
    const openingHours = selectedShot?.activeTimeStart;
    const address = selectedShot?.meta?.streetAddress;
    const category = selectedShot?.Categories[0].title;

    const { language } = useContext(LanguageContext);
    const [infoCategory, setInfoCategory] = useState("Kategoria:");
    const [infoHours, setInfoHours] = useState("Aukioloajat:");
    const [infoAddress, setInfoAddress] = useState("Osoite:");
    const [infoButton, setInfoButton] = useState("Lisää tietoa");
    const [infoTitle, setInfoTitle] = useState("");
    const [infoTextHeader, setInfoTextHeader] = useState("Tietoa:");
    const [infoTextContent, setInfoTextContent] = useState("");

    useEffect(() => {
      if (language == "en") {
        setInfoCategory("Category:");
        setInfoHours("Opening hours:");
        setInfoAddress("Address:");
        setInfoButton("More info");
        setInfoTextHeader("Info:");
        if (selectedShot?.i18n?.en?.title) {
            setInfoTitle(selectedShot?.i18n?.en?.title);
        } else if (!selectedShot?.i18n?.en?.title) {
            setInfoTitle("Title can't be found in this language.");
        }
        if (selectedShot?.i18n?.en?.content) {
            setInfoTextContent(selectedShot?.i18n?.en?.content);
        } else if (!selectedShot?.i18n?.en?.content) {
            setInfoTextContent("Content can't be found in this language.");
        }
      } else if (language == "fi") {
        setInfoCategory("Kategoria:");
        setInfoHours("Aukioloajat:");
        setInfoAddress("Osoite:");
        setInfoButton("Lisää tietoa");
        setInfoTitle(selectedShot?.title);
        setInfoTextHeader("Tietoa:");
        setInfoTextContent(selectedShot?.content);
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
            <ScrollView contentContainerStyle={styles.modalContainer}>
                <View>
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
                        <Text style={styles.infoText}>{infoCategory} {selectedShot?.Categories?.[0]?.title}</Text>
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
                                <Text style={styles.fullDetailEventText}>{infoCategory} {selectedShot?.Categories[0].title}</Text>
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
            </ScrollView>
        </Modal>
    );
}

export default ShotDescription;
