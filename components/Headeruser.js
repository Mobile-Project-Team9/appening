import React, { useContext, useState } from 'react';
import { View } from 'react-native';
import { Divider, IconButton, Menu } from 'react-native-paper';
import Login from '../screens/Login';
import Register from '../screens/Register'; 

import { styles } from '../styles/style';
import SwitchSelector from 'react-native-switch-selector';
import { LanguageContext } from '../data/Contexts';

const HeaderUser = ({ toggleLoginModal, loginVisible, toggleRegisterModal, registerVisible }) => {
    const [menuVisible, setMenuVisible] = useState(false);

    const { language, setLanguage } = useContext(LanguageContext) 
    
    const openMenu = () => setMenuVisible(true);
    const closeMenu = () => setMenuVisible(false);

    return (
        <View style={styles.containerheaderuser}>
            <Menu
                visible={menuVisible}
                onDismiss={closeMenu}
                anchor={<IconButton 
                  icon="menu" 
                  onPress={openMenu}
                  iconColor='white' />}
            >
                <Menu.Item onPress={() => {
                  if (!loginVisible) {
                    toggleLoginModal();
                    if (registerVisible) {
                      toggleRegisterModal(); // Ensure only one modal is open at a time
                    }
                  }
                  closeMenu();
                }} title={language === 'fi' ? 'Kirjaudu' : 'Login'} />
                <Menu.Item onPress={() => {
                    if (!registerVisible) {
                      toggleRegisterModal();
                      if (loginVisible) {
                        toggleLoginModal(); 
                      }
                    }
                    closeMenu(); 
                }} title={language === 'fi' ? 'Luo tili' : 'Register'} />
                <Divider />

                
                  <SwitchSelector 
                    options={[{label: "FI", value: "fi"}, {label: "EN", value: "en"}]}
                    initial={language === "fi" ? 0 : 1}
                    onPress={value => setLanguage(value)}
                  />
                
            </Menu>

            
            <Login visible={loginVisible} onClose={toggleLoginModal} />

            <Register visible={registerVisible} onClose={toggleRegisterModal} />
        </View>
    );
}

export default HeaderUser;
