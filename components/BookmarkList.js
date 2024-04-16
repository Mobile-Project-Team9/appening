import { View, Text, FlatList } from 'react-native'
import React, { useContext } from 'react';


/* List view of bookmarked events */
/* Could include features such as 'jump to map location' */

export default function BookmarkList(bookmarkList) {

 
  

  return (
    <View>
      <Text>Bookmark component renders</Text>
      <FlatList
        data={bookmarkList}
        renderItem={({ item }) => <Text>{item.title}</Text>}
        keyExtractor={(item, index) => (item.id ? item.id.toString() : index.toString())}
      />

    </View>
  )
}