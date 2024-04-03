import { View, Text, Modal, Pressable, Alert } from 'react-native'
import React, { useState } from 'react'
import { styles } from '../styles/style'
import ActionButton from 'react-native-action-button'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'

export default function FilterMenu() {
    const [modalVisible, setModalVisible] = useState(false)


    return (
        <View>
            <Modal
                animationType='slide'
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible)
                }}>
                <View style={styles.filterMenu}>
                    <Text>This is where filters will be found</Text>
                    <Pressable onPress={() => setModalVisible(!modalVisible)}>
                        <Text>Hide menu</Text>
                    </Pressable>
                </View>
            </Modal>

            <ActionButton 
            buttonColor='rgba(104,120,181,1)'
            position='left'
            >
                <ActionButton.Item title='Filter Menu' onPress={() => setModalVisible(true)}>
                    <MaterialCommunityIcons name='filter' size={24}/>
                </ActionButton.Item>
            </ActionButton>
        </View>
    )
}