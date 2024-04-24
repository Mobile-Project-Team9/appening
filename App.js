import { MD3LightTheme, PaperProvider } from 'react-native-paper';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { QueryContext, BookmarkContext, FilterContext, LoginContext, LanguageContext } from './data/Contexts';
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
  const [language, setLanguage] = useState('fi')
  
  return (
    <NavigationContainer>
      <QueryContext.Provider value={{ json, setJson }}>
        <BookmarkContext.Provider value ={{bookmarkList, setBookmarkList}}>
          <FilterContext.Provider value={{filtersOn, setFiltersOn, filteredJson, setFilteredJson}}>
            <LanguageContext.Provider value={{language, setLanguage}}>
              <PaperProvider>
                  <MyTabs/>
              </PaperProvider>
            </LanguageContext.Provider>
          </FilterContext.Provider>
        </BookmarkContext.Provider>
      </QueryContext.Provider>
   </NavigationContainer>
  );
}

const Tab = createMaterialBottomTabNavigator();

function MyTabs() {
  const language = "fin"; // Add context here
  const [navName1, setNavName1] = useState("Koti");
  const [navName2, setNavName2] = useState("Lista");
  const [navName3, setNavName3] = useState("Käyttäjä");

  useEffect(() => {
    if (language == "eng") {
      setNavName1("Home");
      setNavName2("List");
      setNavName3("User");
    } else if (language == "fin") {
      setNavName1("Koti");
      setNavName2("Lista");
      setNavName3("Käyttäjä");
    }
  }, [language])

  return (
    <Tab.Navigator  initialRouteName={navName1}
      // Still missing colour for focused icons' background color
      activeColor= {colors.offBlue}
      inactiveColor= {colors.white}
      barStyle={{ backgroundColor: colors.mainColor }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color }) => {
          let iconName;
          if (route.name === navName1) {
            iconName = focused ? 'map' : 'map-outline';
          } else if (route.name === navName2) {
            iconName = focused ? 'view-list' : 'view-list-outline';
          } else if (route.name === navName3) {
            iconName = focused ? "account" : "account-outline";
          }
          return <MaterialCommunityIcons name={iconName} size={23} color={color}/>;
        }
      })}>
      <Tab.Screen name={navName1} component={Home} />
      <Tab.Screen name={navName2} component={List} />
      <Tab.Screen name={navName3} component={User}  />
    </Tab.Navigator>
  );
}
