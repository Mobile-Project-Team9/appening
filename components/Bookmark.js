import { View, Text } from 'react-native'
import React, { useContext } from 'react';
import { IconButton } from "react-native-paper";
import { BookmarkContext } from '../data/Contexts';

/* Component for bookmarking specific events from map or list view  */

export default function Bookmark(item) {

  const {setBookmarkList} = useContext(BookmarkContext);
  const handlePress = (item) => {
    setBookmarkList( prev => [...prev, item])
    console.log(item)

  }
  return (
    <View>
      <IconButton
        icon={"heart-outline"}
        onPress={() => handlePress(item)}
      />
    </View>
  )
}