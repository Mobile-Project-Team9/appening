
import { MD3LightTheme, PaperProvider } from 'react-native-paper';
import styles from './styles/style';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';


import { QueryContext } from './data/Contexts';
import Home from './screens/Home';
import List from './screens/List';
import User from './screens/User';
import Settings from './screens/Settings';




export default function App() {

  const contextValue = {
    
  };

  return (
    <NavigationContainer>
      <QueryContext.Provider value={contextValue}>
        <PaperProvider theme={MD3LightTheme}>
            <MyTabs/>
        </PaperProvider>
      </QueryContext.Provider>
   </NavigationContainer>
  );
}

const Tab = createMaterialBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator style={styles.Navi}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="List" component={List} />
      <Tab.Screen name="user" component={User} />
      <Tab.Screen name="Setting" component={Settings} />
    </Tab.Navigator>
  );
}
