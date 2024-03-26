import { MD3LightTheme, PaperProvider } from 'react-native-paper';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { QueryContext } from './data/Contexts';
import Home from './screens/Home';
import List from './screens/List';
import User from './screens/User';
import { useState } from "react";

export default function App() {
  // This is the array that will contain other arrays inside of it. So a json that includes events
  const [json, setJson] = useState([]);

  return (
    <NavigationContainer>
      {/* Values given to provider */}
      <QueryContext.Provider value={{ json, setJson }}>
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
 