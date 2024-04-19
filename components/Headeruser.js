import React, { useState } from 'react';
import { View, Modal } from 'react-native';
import { IconButton, Menu } from 'react-native-paper';
import Login from '../screens/Login';

import { styles } from '../styles/style';

const HeaderUser = ({ toggleLoginModal, loginVisible }) => {
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
                  toggleLoginModal(); // Toggle the visibility of the login modal
                  closeMenu(); // Close the menu after clicking
                }} title="Login" />
                <Menu.Item onPress={() => {
                    /* Navigate to Register */
                    closeMenu(); // Close the menu after clicking
                }} title="Register" />
            </Menu>

            {/* Login Modal */}
            <Login visible={loginVisible} onClose={toggleLoginModal} />
        </View>
    );
}

export default HeaderUser;
