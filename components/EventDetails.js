import React from 'react';
import { View, Text, Modal, ScrollView, Pressable, Image, Button } from 'react-native';
import { Avatar } from 'react-native-paper';
import { styles } from '../styles/style';
import Bookmark from './Bookmark';

const EventDetails = ({ event, modalVisible, setModalVisible }) => {
    const imagePath = event?.Media?.[0]?.path;
    const openingHours = event?.activeTimeStart;
    const address = event?.meta?.streetAddress;

    return (
        <Modal visible={modalVisible} onRequestClose={() => setModalVisible(false)}>
            <View style={styles.fullDetailEventView}>
                <Pressable onPress={() => setModalVisible(false)} style={styles.fullDetailEventExitPressable}>
                    <Avatar.Icon icon="close" size={40} style={styles.fullDetailEventExitIcon}/>
                </Pressable>
                <Text style={styles.fullDetailEventHeader}>{event.title}</Text>
                <View style={styles.fullDetailEventImageView}>
                    <Image style={styles.fullDetailEventImage} source={{ uri: imagePath }}/>
                </View>
                <ScrollView>
                    <Text style={styles.fullDetailEventText}>Category: {event.Categories[0].title}</Text>
                    {openingHours && (
                        <Text style={styles.fullDetailEventText}>Opening hours: {event.activeTimeStart} - {event.activeTimeEnd}</Text>
                    )}
                    {address && (
                        <Text style={styles.fullDetailEventText}>Street address: {event.meta.streetAddress}</Text>
                    )}
                    <Text style={styles.fullDetailEventText}>Info: {event.content}</Text>
                </ScrollView>
                <Bookmark item={event}/>
            </View>
        </Modal>
    );
}

export default EventDetails;
