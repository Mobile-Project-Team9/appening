import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import { styles } from '../styles/style';
import BookmarkList from '../components/BookmarkList';
import { BookmarkContext } from '../data/Contexts';

export default function User() {
  const { bookmarkList } = useContext(BookmarkContext);

  console.log("Number of items in bookmarkList:", bookmarkList.length);
  console.log("bookmarkList:", bookmarkList);
  
  if (bookmarkList.length > 0) {
    console.log("First item in bookmarkList:", bookmarkList[0]);
  } else {
    console.log("Bookmark list is empty.");
  }

  return (
    <View style={styles.container}>
      <Text>Here will list of saved events</Text>
      <BookmarkList bookmarkList={bookmarkList}/>
    </View>
  );
}
