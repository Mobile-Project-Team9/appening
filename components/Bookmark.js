import React, { useContext, useEffect } from 'react';
import { View, Text } from 'react-native';
import { IconButton, Button } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { BookmarkContext } from '../data/Contexts';

/* Component for bookmarking specific events from map or list view */

export default function Bookmark({ item }) {
  const { bookmarkList, setBookmarkList } = useContext(BookmarkContext);

  const handlePress = async (item) => {
    try {
      // Check if the item is already in the bookmarkList
      const isAlreadyBookmarked = bookmarkList.some((bookmark) => bookmark.id === item.id);
      if (!isAlreadyBookmarked) {
        // Update the bookmark list in context
        setBookmarkList((prev) => [...prev, item]);
        // Save the updated bookmark list to async storage
        await AsyncStorage.setItem('bookmarkList', JSON.stringify([...bookmarkList, item]));
      }
    } catch (error) {
      console.error('Error saving bookmark:', error);
    }
  };

  useEffect(() => {
    const loadBookmarkList = async () => {
      try {
        // Load bookmark list from async storage when component mounts
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
    <View>
      <IconButton
        icon={"heart-outline"}
        onPress={() => handlePress(item)}
      />
    </View>
  );
}
