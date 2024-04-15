import React, { useState } from 'react';
import { Modal, View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { styles } from '../styles/style';
import { Button, Portal } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import EventDetails from './EventDetails';
import Bookmark from './Bookmark';

const ShotDescription = ({ visible, onRequestClose, selectedShot }) => {
    const [showEventDetails, setShowEventDetails] = useState(false);

    const handleCloseModal = () => {
        setShowEventDetails(false);
        onRequestClose();
    }

    if (!selectedShot) {
        return null;
    }

    const imagePath = selectedShot?.Media?.[0]?.path;

    return (
        <Portal>
            <Modal
                visible={visible}
                onRequestClose={handleCloseModal}
                transparent={true}
            >
                <ScrollView contentContainerStyle={styles.modalContainer}>
                    <View>
                        <TouchableOpacity
                            onPress={handleCloseModal}
                            style={styles.x}>
                            <Ionicons name="close" size={24} color="black" />
                        </TouchableOpacity>
                        <Text style={styles.title}>{selectedShot.title}</Text>
                        {imagePath && (
                            <Image
                                source={{ uri: imagePath }}
                                style={styles.image}
                            />
                        )}
                        <Text style={styles.infoText}>Category: {selectedShot?.Categories?.[0]?.title}</Text>
                        <Text>Active time: {selectedShot.ActiveTimeStart}</Text>
                        {!showEventDetails && (
                            <View style={styles.eventButton}>

                                <Bookmark item={selectedShot}/>

                                <Button
                                    
                                    onPress={() => setShowEventDetails(true)}
                                    mode='contained-tonal'
                                    buttonColor='#E10069'
                                    textColor='#fff'
                                >
                                    Event page
                                </Button>

                            </View>
                        )}
                        {showEventDetails && (
                            <EventDetails
                                event={selectedShot}
                                onRequestClose={handleCloseModal}
                            />
                        )}
                    </View>
                </ScrollView>
            </Modal>
        </Portal>
    );
}

export default ShotDescription;
