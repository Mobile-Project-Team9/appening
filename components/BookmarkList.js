import { View, Text, FlatList } from 'react-native';
import React from 'react';

export default function BookmarkList({bookmarkList}) {
  return (
    <View>
      <Text>Bookmark component renders</Text>
      <FlatList
        data={bookmarkList}
        renderItem={({ item }) => <Text>{item.title}</Text>}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
}
