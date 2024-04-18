import React, { useState } from 'react';
import { View } from 'react-native';
import { IconButton, Menu } from 'react-native-paper';

import { styles } from '../styles/style';

const HeaderUser = () => {
      const [visible, setVisible] = useState(false);

        const openMenu = () => setVisible(true);
        const closeMenu = () => setVisible(false);

 

    return (
        <View style={styles.containerheaderuser}>
            <Menu
                visible={visible}
                onDismiss={closeMenu}
                anchor={<IconButton icon="menu" onPress={openMenu} />}
            >
                <Menu.Item onPress={() => ('Login')} title="Login" />
                <Menu.Item onPress={() => ('Register')} title="Register" />
                
            </Menu>
        </View>
    );
}

export default HeaderUser;
