import { View } from 'react-native';
import { React } from 'react';
import Search from "../components/Search";
import FilterMenu from '../components/FilterMenu';
import EventList from "../components/EventList";
import Footer from '../components/Footer';
import { styles } from "../styles/style";

export default function List() {
  return (
    <View style={styles.container}>
      <Search/>
      <FilterMenu/>
      <EventList/>
    </View>
  )
}