import React, { useContext, useState } from 'react';
import { View } from 'react-native';
import { IconButton, Menu } from 'react-native-paper';
import { LoginContext } from '../data/Contexts';

import { styles } from '../styles/style';

const HeaderUser = () => { 

  const [visible, setVisible] = useState(false);

  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  const { setLogin} = useContext(LoginContext);

  const handleLogin = () => {
    setLogin
    console.log(LoginContext); 
  };

  return (
    <View style={styles.containerheaderuser}>
      <Menu
        visible={visible}
        onDismiss={closeMenu}
        anchor={<IconButton icon="menu" onPress={openMenu} />}
      >
        <Menu.Item onPress={handleLogin} title="Login" />
        
      </Menu>
    </View>
  );
};

export default HeaderUser;
