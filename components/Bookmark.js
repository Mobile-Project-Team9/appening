import React, { useContext, useEffect, useState } from 'react';
import { View } from 'react-native';
import { IconButton } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { BookmarkContext } from '../data/Contexts';

/* Component for bookmarking specific events from map or list view */

export default function Bookmark({ item }) {
  const { bookmarkList, setBookmarkList } = useContext(BookmarkContext);
  // State to manage the bookmark icon color
  const [isBookmarked, setIsBookmarked] = useState(bookmarkList.some(b => b.id === item.id));

  useEffect(() => {
    setIsBookmarked(bookmarkList.some(b => b.id === item.id));
  }, [bookmarkList]);

  const handlePress = async () => {
    try {
      const updatedBookmarkList = isBookmarked
        ? bookmarkList.filter(b => b.id !== item.id)
        : [...bookmarkList, item];

      // Update bookmark list in context
      setBookmarkList(updatedBookmarkList);

      // Save the updated bookmark list to async storage
      await AsyncStorage.setItem('bookmarkList', JSON.stringify(updatedBookmarkList));

     
      setIsBookmarked(!isBookmarked);
    } catch (error) {
      console.error('Error updating bookmark:', error);
    }
  };

  useEffect(() => {
    const loadBookmarkList = async () => {
      try {
        const storedBookmarkList = await AsyncStorage.getItem('bookmarkList');
        if (storedBookmarkList) {
          setBookmarkList(JSON.parse(storedBookmarkList));
        }
      } catch (error) {
        console.error('Error loading bookmark list:', error);
      }
    };

    loadBookmarkList();
  }, [setBookmarkList]);

  return (
    <View>
      <IconButton
        icon={isBookmarked ? "heart" : "heart-outline"}
        onPress={handlePress}
        color={isBookmarked ? 'red' : 'grey'}
      />
    </View>
  );
}
