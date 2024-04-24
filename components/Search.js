import React, { useContext, useEffect, useState } from 'react';
import { Searchbar } from 'react-native-paper';
import { styles } from '../styles/style';
import { FilterContext, LanguageContext, QueryContext } from '../data/Contexts';
import fullData from '../data/fullData.json';

const Search = () => {
  const { json, setJson } = useContext(QueryContext)
  const {filtersOn} = useContext(FilterContext)
  const {filteredJson} = useContext(FilterContext)
  const {language} = useContext(LanguageContext)

  const [searchQuery, setSearchQuery] = useState('');

  
  useEffect(() => {
    
    handleSearch(searchQuery)
 
  }, [filtersOn])

  useEffect(() => {
    if (searchQuery === '') {
      filtersOn.length !== 0 ? setJson(filteredJson) : setJson(fullData)
    }
  
  }, [searchQuery])
  
  

  const handleSearch = (query) => {

    setSearchQuery(query);
    if (filtersOn.length !== 0) {

      const filteredLocations = query === '' ? filteredJson : filteredJson.filter(location =>
        location.title.toLowerCase().includes(query.toLowerCase())
      );
      setJson(filteredLocations);
    }
    else {
      const filteredLocations = query === '' ? json : json.filter(location =>
        location.title.toLowerCase().includes(query.toLowerCase())
      );
      setJson(filteredLocations);
    }

  };

  return (
    <Searchbar
      style={styles.searchbar}
      theme={{ colors: { onSurfaceVariant: '#fff', onSurface: '#fff' } }}
      placeholder={language === 'fi' ? 'Haku' : 'Search'}
      onChangeText={handleSearch}
      value={searchQuery}
    />
  );
};

export default Search;
