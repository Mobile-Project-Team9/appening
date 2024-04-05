import React from 'react';
import { Modal, View, Text, Button, Image } from 'react-native';
import { styles } from '../styles/style';

const ShotDescription = ({ visible, onRequestClose, selectedShot }) => {
  return (
    <Modal
      visible={visible}
      onRequestClose={onRequestClose}
      contentContainerStyle={styles.modalContainer}
    >
      <View style={styles.modalContent}>
        {selectedShot && (
          <View>
            <Text style={styles.title}>{selectedShot.title}</Text>
            <Image 
                source={{ uri: selectedShot.Media[0].path }} // Assuming the first image in the Media array is the one you want to display
                style={styles.image}
            />
            <Text style={styles.info}>{selectedShot.content}</Text>
            <Button
              title="Close"
              onPress={onRequestClose}
            />
          </View>
        )}
      </View>
    </Modal>
  );
}

export default ShotDescription;