import React, { useState } from 'react';
import { View } from 'react-native';
import { IconButton, Menu } from 'react-native-paper';
import Login from '../screens/Login';
import Register from '../screens/Register'; 

import { styles } from '../styles/style';

const HeaderUser = ({ toggleLoginModal, loginVisible, toggleRegisterModal, registerVisible }) => {
    const [menuVisible, setMenuVisible] = useState(false);
    
    const openMenu = () => setMenuVisible(true);
    const closeMenu = () => setMenuVisible(false);

    return (
        <View style={styles.containerheaderuser}>
            <Menu
                visible={menuVisible}
                onDismiss={closeMenu}
                anchor={<IconButton icon="menu" onPress={openMenu} />}
            >
                <Menu.Item onPress={() => {
                  if (!loginVisible) {
                    toggleLoginModal();
                    if (registerVisible) {
                      toggleRegisterModal(); // Ensure only one modal is open at a time
                    }
                  }
                  closeMenu();
                }} title="Login" />
                <Menu.Item onPress={() => {
                    if (!registerVisible) {
                      toggleRegisterModal();
                      if (loginVisible) {
                        toggleLoginModal(); 
                      }
                    }
                    closeMenu(); 
                }} title="Register" />
            </Menu>

            
            <Login visible={loginVisible} onClose={toggleLoginModal} />

            <Register visible={registerVisible} onClose={toggleRegisterModal} />
        </View>
    );
}

export default HeaderUser;
