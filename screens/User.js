import React, { useEffect, useState, useContext } from 'react';
import { View, Text, FlatList } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { styles } from '../styles/style';
import BookmarkList from '../components/BookmarkList';
import { BookmarkContext } from '../data/Contexts';
// ... other imports for displaying user information, etc. (if needed)

export default function User() {
const { bookmarkList } = useContext(BookmarkContext);
console.log("Number of items in bookmarkList:", bookmarkList.length);
console.log("bookmarkList:", bookmarkList);

  return (
    <View style={styles.container}>
      <Text>Here will list of saved events</Text>
      <BookmarkList bookmarkList = {bookmarkList} />
    </View>
  );

  // const route = useRoute();
  // const { eventName, fullData } = route.params; // Access event data passed from EventList

  // return (
  //   <View style={styles.container}>
  //     <Text>Event Name: {eventName}</Text>
  //     <Text>Event Name: {fullData}</Text>
      
  //   </View>
 // );
}
