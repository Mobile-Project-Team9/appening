import React from 'react';
import { Modal, View, Text, Button, Image, ScrollView } from 'react-native';
import { styles } from '../styles/style';

const ShotDescription = ({ visible, onRequestClose, selectedShot }) => {
    const imagePath = selectedShot?.Media?.[0]?.path;
    return (
        <Modal
            visible={visible}
            onRequestClose={onRequestClose}
            contentContainerStyle={styles.modalContainer}
        >
            <ScrollView style={styles.modalContent}>
                {selectedShot && (
                    <View>
                        <Text style={styles.title}>{selectedShot.title}</Text>
                        {selectedShot && imagePath && ( // Check if selectedShot and imagePath exist
                            
                                <Image
                                    source={{ uri: imagePath }}
                                    style={styles.image}
                                />
                                
                        )}

                        <Button
                            title="Close"
                            onPress={onRequestClose}
                        />
                    </View>
                )}
            </ScrollView>
        </Modal>
    );
}

export default ShotDescription;