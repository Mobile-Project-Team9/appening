import React, { useState } from 'react'; // Import useState hook
import { Modal, View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { styles } from '../styles/style';
import { Button, Portal } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import EventDetails from './EventDetails';

const ShotDescription = ({ visible, onRequestClose, selectedShot }) => {
    const imagePath = selectedShot?.Media?.[0]?.path;
    const [showEventDetails, setShowEventDetails] = useState(false); // Initialize showEventDetails state

    return (
        <Portal>
            <Modal
                visible={visible}
                onDismiss={onRequestClose}
                onRequestClose={onRequestClose}
                transparent={true}
            >
                <ScrollView contentContainerStyle={styles.modalContainer}>
                    {selectedShot && (
                        <View>
                            <TouchableOpacity
                                onPress={onRequestClose}
                                style={styles.x}>
                                <Ionicons name="close" size={24} color="black" />
                            </TouchableOpacity>
                            <Text style={styles.title}>{selectedShot.title}</Text>
                            {selectedShot && imagePath && (
                                <Image
                                    source={{ uri: imagePath }}
                                    style={styles.image}
                                />
                            )}
                            <Text style={styles.infoText}>Category: {selectedShot?.Categories?.[0]?.title}</Text>
                            <View style={styles.eventButton}>
                                <Button
                                    title="Event page"
                                    onPress={() => setShowEventDetails(true)} // Update showEventDetails state
                                    mode='contained-tonal'
                                    buttonColor='#E10069'
                                    textColor='#fff'
                                >
                                    Event page
                                </Button>
                            </View>
                        </View>
                    )}
                </ScrollView>
                {showEventDetails && (
                    <EventDetails event={selectedShot} /> // Render EventDetails component if showEventDetails is true
                )}
            </Modal>
        </Portal>
    );
}

export default ShotDescription;
