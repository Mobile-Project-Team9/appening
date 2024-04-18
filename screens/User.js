import React, { useContext } from 'react';
import { View, Text, SectionList, Platform} from 'react-native';
import { styles} from '../styles/style';
import { BookmarkContext } from '../data/Contexts';
import Headeruser from '../components/Headeruser';

export default function User() {
  const { bookmarkList } = useContext(BookmarkContext);

  const sections = [
    { title: 'Bookmark', data: bookmarkList },
  ];

  return (
    <View style={styles.containeruser}>
      
      <SectionList
        sections={sections}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <Text style={styles.textuser}>{item.title}</Text>}
        
        renderSectionHeader={({ section: { title } }) =>(
          <View style={styles.headerTitle}>
            <Text style={styles.headeruser}>{title}</Text>
            <Headeruser />
          </View>
        )}
      />
    </View> 
  );
}

  
