import { View, Text, FlatList } from 'react-native'
import React, { useContext } from 'react';
import { BookmarkContext } from '../data/Contexts';

/* List view of bookmarked events */
/* Could include features such as 'jump to map location' */

export default function BookmarkList() {

  const { bookmarkList } = useContext(BookmarkContext);

  return (
    <View>
      <Text>Bookmark component renders</Text>
      <FlatList data={bookmarkList} renderItem={({ item }) => <Text>{item.title}</Text>}/>
    </View>
  )
}