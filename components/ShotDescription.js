import React, { useState, useEffect } from 'react';
import { Modal, View, Text, Image, ScrollView, Pressable, Button } from 'react-native';
import { styles, colors } from '../styles/style';
import { Avatar } from "react-native-paper";
import Bookmark from './Bookmark';

const ShotDescription = ({ visible, onRequestClose, selectedShot }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const imagePath = selectedShot?.Media?.[0]?.path;
    const openingHours = selectedShot?.activeTimeStart;
    const address = selectedShot?.meta?.streetAddress;
    const category = selectedShot?.Categories[0].title;

    const language = "fin"; // Add context here
    const [infoText1, setInfoText1] = useState("Kategoria:");
    const [infoText2, setInfoText2] = useState("Aukioloajat:");
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

    const handleCloseModal = () => {
        setModalVisible(false);
        onRequestClose();
    }

    if (!selectedShot) {
        return null;
    }

    return (
        <Modal visible={visible} onRequestClose={handleCloseModal} transparent={true}>
            <ScrollView contentContainerStyle={styles.modalContainer}>
                <View>
                    <Pressable onPress={handleCloseModal} style={styles.fullDetailEventExitPressable}>
                        <Avatar.Icon icon="close" size="40" style={styles.fullDetailEventExitIcon}/>
                    </Pressable>
                    <Text style={styles.title}>{selectedShot?.title}</Text>
                    {imagePath && (
                        <Image
                            source={{ uri: imagePath }}
                            style={styles.image}
                        />
                    )}
                    {category && (
                        <Text style={styles.infoText}>{infoText1} {selectedShot?.Categories?.[0]?.title}</Text>
                    )}
                    {openingHours && (
                        <Text style={styles.infoText}>{infoText2} {selectedShot?.ActiveTimeStart}</Text>
                    )}
                    <Button title={infoText4} onPress={() => setModalVisible(true)} color={colors.secondaryColor}></Button>
                    {modalVisible && (
                        <Modal>
                            <View style={styles.fullDetailEventView}>
                                <Pressable onPress={() => setModalVisible(!modalVisible)} style={styles.fullDetailEventExitPressable}>
                                    <Avatar.Icon icon="close" size="40" style={styles.fullDetailEventExitIcon}/>
                                </Pressable>
                                <Text style={styles.fullDetailEventHeader}>{selectedShot?.title}</Text>
                                <View style={styles.fullDetailEventImageView}>
                                {imagePath && (
                                    <Image style={styles.fullDetailEventImage} source={{ uri: imagePath }}/>
                                )}
                                </View>
                                <ScrollView>
                                <Text style={styles.fullDetailEventText}>{infoText1} {selectedShot?.Categories[0].title}</Text>
                                {openingHours && (
                                    <Text style={styles.fullDetailEventText}>{infoText2} {selectedShot?.activeTimeStart} - {selectedShot?.activeTimeEnd} .</Text>
                                )}
                                {address && (
                                    <Text style={styles.fullDetailEventText}>{infoText3} {selectedShot?.meta.streetAddress}</Text>
                                )}
                                <Text style={styles.fullDetailEventText}>{infoText5} {selectedShot?.content}</Text>
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
