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
            <Image />
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