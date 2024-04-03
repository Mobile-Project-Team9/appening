import * as React from 'react';
import { Searchbar } from 'react-native-paper';
import { styles } from '../styles/style';

const Search = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  return (
    <Searchbar
      style={styles.searchbar}
      theme={{colors: {onSurfaceVariant: '#fff', onSurface: '#fff'}}}
      placeholder="Search"
      onChangeText={setSearchQuery}
      value={searchQuery}
    />
  );
};

export default Search;