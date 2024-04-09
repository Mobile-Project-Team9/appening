import React from 'react';
import { Modal, View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { styles } from '../styles/style';
import { Button } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';

const ShotDescription = ({ visible, onRequestClose, selectedShot }) => {
    const imagePath = selectedShot?.Media?.[0]?.path;
    return (
        <Modal
            visible={visible}
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
                        {selectedShot && imagePath && ( // Check if selectedShot and imagePath exist

                            <Image
                                source={{ uri: imagePath }}
                                style={styles.image}
                            />
                        


                        )}
                        <Text style={styles.infoText}>Category: {selectedShot?.Categories?.[0]?.title}</Text>

                        <View style= {styles.eventButton}>

                        <Button
                            title="Event page"
                            onPress={onRequestClose}
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
        </Modal>
    );
}

export default ShotDescription;