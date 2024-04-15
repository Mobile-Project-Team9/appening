import React, { useState } from 'react';
import { Searchbar } from 'react-native-paper';
import { styles } from '../styles/style';

const Search = ({ locations, onFilterChange }) => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const handleSearch = (query) => {
    setSearchQuery(query);
    const filteredLocations = query === '' ? locations : locations.filter(location =>
      location.title.toLowerCase().includes(query.toLowerCase())
    );
    onFilterChange(filteredLocations);
  };

  return (
    <Searchbar
      style={styles.searchbar}
      theme={{ colors: { onSurfaceVariant: '#fff', onSurface: '#fff' } }}
      placeholder="Search"
      onChangeText={handleSearch}
      value={searchQuery}
    />
  );
};

export default Search;
