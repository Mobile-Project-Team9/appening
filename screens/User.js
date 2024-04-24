import React, { useContext, useState, useEffect } from 'react';
import { View, SectionList, Text, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { BookmarkContext } from '../data/Contexts';
import Headeruser from '../components/Headeruser';
import { styles } from '../styles/style';
import { Button } from 'react-native-paper';

export default function User() {
  const { bookmarkList, setBookmarkList } = useContext(BookmarkContext); 
  const [loginVisible, setLoginVisible] = useState(false);
  const [registerVisible, setRegisterVisible] = useState(false);

  const toggleLoginModal = () => setLoginVisible(!loginVisible);
  const toggleRegisterModal = () => setRegisterVisible(!registerVisible);

  const clearAsyncStorage = async () => {
    Alert.alert(
      "Clear AsyncStorage",
      "Are you sure you want to clear all data?",
      [
        { text: "Cancel", style: "cancel" },
        { text: "OK", onPress: async () => {
          try {
            await AsyncStorage.clear();
            console.log('AsyncStorage cleared successfully.');
            setBookmarkList([]); // Also clear the bookmark list in the context
          } catch (error) {
            console.error('Error clearing AsyncStorage:', error);
          }
        }},
      ],
    );
  };

  useEffect(() => {
    const loadBookmarkList = async () => {
      try {
        const storedBookmarkList = await AsyncStorage.getItem('bookmarkList');
        if (storedBookmarkList !== null) {
          setBookmarkList(JSON.parse(storedBookmarkList));
        }
      } catch (error) {
        console.error('Error loading bookmark list:', error);
      }
    };

    loadBookmarkList();
  }, []); // Removing setBookmarkList from dependencies if it's not expected to change

  return (
    <View style={styles.containeruser}>
      <SectionList
        sections={[{ title: 'Bookmarks', data: bookmarkList }]}
        keyExtractor={(item) => item.id.toString()} 
        renderItem={({ item }) => <Text style={styles.textuser}>{item.title}</Text>} 
        renderSectionHeader={({ section: { title } }) => (
          <View style={styles.headeruser}>
            <Text style={styles.headerTitle}>{title}</Text>
            <Headeruser 
              toggleLoginModal={toggleLoginModal} 
              loginVisible={loginVisible} 
              toggleRegisterModal={toggleRegisterModal}
              registerVisible={registerVisible}
            />
          </View>
        )}
      />
      <Button onPress={clearAsyncStorage} mode="contained">Clear all</Button>
    </View>
  );
}
