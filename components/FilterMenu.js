import { View, Text, Modal, Pressable, Alert } from 'react-native'
import React, { useState } from 'react'
import { styles } from '../styles/style'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'

export default function FilterMenu() {
    const [modalVisible, setModalVisible] = useState(false)



    return (
        <View>
            <Modal
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible)
                }}
                transparent={true}
            >
                <View style={styles.filterMenu}>
                    <View style={styles.filterMenuContent}>
                        <Text>This is where filters will be found</Text>
                    </View>
                    <Pressable style={styles.hideMenuButton} onPress={() => setModalVisible(!modalVisible)}>
                            <Text style={styles.hideMenuButtonText}>Close menu</Text>
                    </Pressable>
                </View>
            </Modal>
            
            <Pressable style={styles.filterButton} onPress={() => setModalVisible(true)}>
                <MaterialCommunityIcons 
                    name='filter-menu-outline'
                    size={24}
                    color='#fff'
                />
            </Pressable>
        </View>
    )
}