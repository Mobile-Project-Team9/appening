import React, { useContext, useState } from 'react';
import { View, SectionList, Text } from 'react-native'; // Ensure Text is imported since it's used in renderItem
import { BookmarkContext } from '../data/Contexts';
import Headeruser from '../components/Headeruser';  
import { styles } from '../styles/style';

export default function User() {
  const { bookmarkList } = useContext(BookmarkContext); 
  const [loginVisible, setLoginVisible] = useState(false);
  const [registerVisible, setRegisterVisible] = useState(false);

  const toggleLoginModal = () => setLoginVisible(!loginVisible);
  const toggleRegisterModal = () => setRegisterVisible(!registerVisible);

  
  const sections = [
    { title: 'Bookmarks', data: bookmarkList },
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
              toggleRegisterModal={toggleRegisterModal}
              registerVisible={registerVisible}
            />
          </View>
        )}
      />
    </View>
  );
}
