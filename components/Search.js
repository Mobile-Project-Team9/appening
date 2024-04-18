import React, { useContext, useState } from 'react';
import { Searchbar } from 'react-native-paper';
import { styles } from '../styles/style';
import { QueryContext } from '../data/Contexts';

const Search = () => {
  const { json, setJson } = useContext(QueryContext)
  const [searchQuery, setSearchQuery] = useState('');
  
  const handleSearch = (query) => {
    setSearchQuery(query);
    const filteredLocations = query === '' ? json : json.filter(location =>
      location.title.toLowerCase().includes(query.toLowerCase())
    );
    setJson(filteredLocations);
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
