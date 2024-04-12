import React, { useState, useEffect } from 'react';
import { View, Text, Modal, Pressable, FlatList } from 'react-native';
import { Button } from 'react-native-paper';
import { styles } from '../styles/style';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

const FilterMenu = ({ categories, onCategoryChange }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
 

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    onCategoryChange(category);
  };



  return (
    <View>
      <Modal
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
        transparent={true}
      >
        <View style={styles.filterMenuContainer}>
          <View style={styles.filterMenu}>
            <View style={styles.filterMenuContent}>
              <Text>This is where filters will be found</Text>
              <FlatList
                data={categories}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                  <Button
                    key={item.id}
                    onPress={() => handleCategoryChange(item)}
                    
                    mode="contained"
                    
                  >
                    {item.title}
                  </Button>
                )}
              />
            </View>
            <Pressable
              style={styles.hideMenuButton}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.hideMenuButtonText}>Close menu</Text>
            </Pressable>
          </View>
          <Pressable
            style={styles.overlayPressable}
            onPress={() => setModalVisible(!modalVisible)}
          />
        </View>
      </Modal>

      <Pressable
        style={styles.filterButton}
        onPress={() => setModalVisible(true)}
      >
        <MaterialCommunityIcons
          name="filter-menu-outline"
          size={24}
          color="#fff"
        />
      </Pressable>
    </View>
  );
};

export default FilterMenu;
