import { MD3LightTheme, PaperProvider } from 'react-native-paper';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { QueryContext, BookmarkContext, FilterContext, LoginContext } from './data/Contexts';
import Home from './screens/Home';
import List from './screens/List';
import User from './screens/User';
import fullData from './data/fullData.json';
import { colors } from './styles/style';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useState } from "react";


export default function App() {
  const [json, setJson] = useState(fullData);
  const [bookmarkList, setBookmarkList] = useState([]);
  const [filtersOn, setFiltersOn] = useState([]);
  const [Login, setLogin] = useState ([]);
  
  return (
    <NavigationContainer>
      <QueryContext.Provider value={{ json, setJson }}>
        <BookmarkContext.Provider value ={{bookmarkList, setBookmarkList}}>
          <FilterContext.Provider value={{filtersOn, setFiltersOn}}>
            <PaperProvider>
                <MyTabs/>
            </PaperProvider>
          </FilterContext.Provider>
        </BookmarkContext.Provider>
      </QueryContext.Provider>

   </NavigationContainer>
  );
}

const Tab = createMaterialBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator  initialRouteName="Home"
      // Still missing colour for focused icons' background color
      activeColor= {colors.offBlue}
      inactiveColor= {colors.white}
      barStyle={{ backgroundColor: colors.mainColor }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused ? 'map' : 'map-outline';
          } else if (route.name === 'List') {
            iconName = focused ? 'view-list' : 'view-list-outline';
          } else if (route.name === "User") {
            iconName = focused ? "account" : "account-outline";
          }
          return <MaterialCommunityIcons name={iconName} size={23} color={color}/>;
        }
      })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="List" component={List} />
      <Tab.Screen name="User" component={User}  />
    </Tab.Navigator>
  );
}
