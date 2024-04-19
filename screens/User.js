import React, { useContext, useState } from 'react';
import { View, Text, SectionList } from 'react-native';
import { styles } from '../styles/style';
import { BookmarkContext } from '../data/Contexts';
import Headeruser from '../components/Headeruser';

export default function User() {
  const { bookmarkList } = useContext(BookmarkContext);
  
  const [loginVisible, setLoginVisible] = useState(false);
  const toggleLoginModal = () => setLoginVisible(!loginVisible);

  const sections = [
    { title: 'Bookmark', data: bookmarkList },
  ];

  return (
    <View style={styles.containeruser}>
      <SectionList
        sections={sections}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <Text style={styles.textuser}>{item.title}</Text>}
        renderSectionHeader={({ section: { title } }) => (
          <View style={styles.headeruser}>
            <Text style={styles.headerTitle}>{title}</Text>
            <Headeruser 
              toggleLoginModal={toggleLoginModal} 
              loginVisible={loginVisible} 
            />
          </View>
        )}
      />
    </View>
  );
}
