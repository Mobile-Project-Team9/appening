import React, { useContext, useState, useEffect } from 'react';
import { View, SectionList, Text, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { BookmarkContext } from '../data/Contexts';
import Headeruser from '../components/Headeruser';
import { IconButton } from 'react-native-paper';
import { colors, styles } from '../styles/style';
import Item from '../components/Item';

export default function User() {
  const { bookmarkList, setBookmarkList } = useContext(BookmarkContext);
  const [loginVisible, setLoginVisible] = useState(false);
  const [registerVisible, setRegisterVisible] = useState(false);

  const toggleLoginModal = () => setLoginVisible(!loginVisible);
  const toggleRegisterModal = () => setRegisterVisible(!registerVisible);

  // Function to remove a bookmark from the list
  const removeBookmark = async (id) => {
    const newBookmarkList = bookmarkList.filter(item => item.id !== id);
    try {
      await AsyncStorage.setItem('bookmarkList', JSON.stringify(newBookmarkList));
      setBookmarkList(newBookmarkList);
    } catch (error) {
      console.error('Error updating bookmark list:', error);
    }
  };

  // Effect to load bookmarks from storage on component mount
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
  }, []);

  return (
    <View style={styles.containeruser}>
      <SectionList
        sections={[{ title: 'Bookmarks', data: bookmarkList }]}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.bookmarkContainer}>
            <Item json={item} style={styles.bookmarkItem}/>
            <IconButton
              icon="delete"
              iconColor={colors.mainColor}
              style={styles.deleteIcon}
              onPress={() => removeBookmark(item.id)} />
          </View>)}

        //renderItem={({ item }) => (
        //   <View style={styles.listItem}>
        //     <Text style={styles.textuser}>{item.title}</Text>
        //     <IconButton
        //       icon="delete"
        //       onPress={() => removeBookmark(item.id)}




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
    </View>
  );
}
