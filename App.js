import { MD3LightTheme, PaperProvider } from 'react-native-paper';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { QueryContext } from './data/Contexts';
import Home from './screens/Home';
import List from './screens/List';
import User from './screens/User';

export default function App() {
  const contextValue = {
    // Fill?
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
    <Tab.Navigator  initialRouteName="Home"
    activeColor="#000000" // Change later
    inactiveColor="#f1f3f3" // Change later
    /* Change later */ barStyle={{ backgroundColor: '#70a0ff' }}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="List" component={List} />
      <Tab.Screen name="user" component={User} />
    </Tab.Navigator>
  );
}
 