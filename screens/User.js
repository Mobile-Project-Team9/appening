import React, { useContext, useState, useEffect } from 'react';
import { View, SectionList, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'; // Import AsyncStorage
import { BookmarkContext } from '../data/Contexts';
import Headeruser from '../components/Headeruser';  
import { styles, colors } from '../styles/style';
import { IconButton, Button } from 'react-native-paper';

export default function User() {
  const { bookmarkList, setBookmarkList } = useContext(BookmarkContext); 
  const [loginVisible, setLoginVisible] = useState(false);
  const [registerVisible, setRegisterVisible] = useState(false);

  const toggleLoginModal = () => setLoginVisible(!loginVisible);
  const toggleRegisterModal = () => setRegisterVisible(!registerVisible);

  const clearAsyncStorage = async () => {
    try {
      await AsyncStorage.clear();
      console.log('AsyncStorage cleared successfully.');
    } catch (error) {
      console.error('Error clearing AsyncStorage:', error);
    }
  };

  useEffect(() => {
    const loadBookmarkList = async () => {
      try {
        // Load bookmark list from async storage
        const storedBookmarkList = await AsyncStorage.getItem('bookmarkList');
        if (storedBookmarkList !== null) {
          setBookmarkList(JSON.parse(storedBookmarkList));
        }
      } catch (error) {
        console.error('Error loading bookmark list:', error);
      }
    };

    loadBookmarkList();

    // Cleanup function
    return () => {
      // Cleanup actions if needed
    };
  }, [setBookmarkList]); // Run effect only on component mount and when setBookmarkList changes

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
