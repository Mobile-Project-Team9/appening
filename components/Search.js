import React, { useContext, useEffect, useState } from 'react';
import { Searchbar } from 'react-native-paper';
import { styles } from '../styles/style';
import { FilterContext, QueryContext } from '../data/Contexts';
import fullData from '../data/fullData.json';

const Search = () => {
  const { json, setJson } = useContext(QueryContext)
  const {filtersOn} = useContext(FilterContext)

  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    handleSearch(searchQuery)
 
  }, [filtersOn])
  
  
  const handleSearch = (query) => {
    if (filtersOn.length === 0 && json !== fullData) {
      setJson(fullData)
    }

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
