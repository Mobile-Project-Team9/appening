import React, { useState } from 'react';
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
                        <Text style={styles.infoText}>Category: {selectedShot?.Categories?.[0]?.title}</Text>
                    )}
                    {openingHours && (
                        <Text style={styles.infoText}>Active time: {selectedShot?.ActiveTimeStart}</Text>
                    )}
                    <Button title="More info" onPress={() => setModalVisible(true)} color={colors.secondaryColor}></Button>
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
                                <Text style={styles.fullDetailEventText}>Category: {selectedShot?.Categories[0].title}</Text>
                                {openingHours && (
                                    <Text style={styles.fullDetailEventText}>Opening hours: {selectedShot?.activeTimeStart} - {selectedShot?.activeTimeEnd} .</Text>
                                )}
                                {address && (
                                    <Text style={styles.fullDetailEventText}>Street address: {selectedShot?.meta.streetAddress}</Text>
                                )}
                                <Text style={styles.fullDetailEventText}>Info: {selectedShot?.content}</Text>
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
