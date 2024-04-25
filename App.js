import { PaperProvider } from 'react-native-paper';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { QueryContext, BookmarkContext, FilterContext, LoginContext } from './data/Contexts';
import Home from './screens/Home';
import List from './screens/List';
import User from './screens/User';
import fullData from './data/fullData.json';
import { colors } from './styles/style';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useState, useEffect } from "react";

export default function App() {
  const [json, setJson] = useState(fullData);
  const [bookmarkList, setBookmarkList] = useState([]);
  const [filtersOn, setFiltersOn] = useState([]);
  const [filteredJson, setFilteredJson] = useState([])
  const [Login, setLogin] = useState ([]);
  
  return (
    <NavigationContainer>
      <QueryContext.Provider value={{ json, setJson }}>
        <BookmarkContext.Provider value ={{bookmarkList, setBookmarkList}}>
          <FilterContext.Provider value={{filtersOn, setFiltersOn, filteredJson, setFilteredJson}}>
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
  const language = "fin"; // Add context here
  const [navNameMap, setNavNameMap] = useState("Koti");
  const [navNameList, setNavNameList] = useState("Lista");
  const [navNameUser, setNavNameUser] = useState("Käyttäjä");

  useEffect(() => {
    if (language == "eng") {
      setNavNameMap("Home");
      setNavNameList("List");
      setNavNameUser("User");
    } else if (language == "fin") {
      setNavNameMap("Koti");
      setNavNameList("Lista");
      setNavNameUser("Käyttäjä");
    }
  }, [language])

  return (
    <Tab.Navigator  initialRouteName={navNameMap}
      // Still missing colour for focused icons' background color
      activeColor= {colors.offBlue}
      inactiveColor= {colors.white}
      barStyle={{ backgroundColor: colors.mainColor }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color }) => {
          let iconName;
          if (route.name === navNameMap) {
            iconName = focused ? 'map' : 'map-outline';
          } else if (route.name === navNameList) {
            iconName = focused ? 'view-list' : 'view-list-outline';
          } else if (route.name === navNameUser) {
            iconName = focused ? "account" : "account-outline";
          }
          return <MaterialCommunityIcons name={iconName} size={23} color={color}/>;
        }
      })}>
      <Tab.Screen name={navNameMap} component={Home} />
      <Tab.Screen name={navNameList} component={List} />
      <Tab.Screen name={navNameUser} component={User}  />
    </Tab.Navigator>
  );
}
