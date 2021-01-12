import React, {useState} from "react";
import { View , Text, StyleSheet, Button, SafeAreaView, FlatList, TextInput } from "react-native";
import ApiManager from '../api/ApiManager'
import ListItem from '../components/ListItem'
import filter from 'lodash.filter';

const LocationScreen =  props => {
  console.log(props);
  
  const [result , setResults]  = useState([]);
  const [query, setQuery] = useState('');
  const [fullData, setFullData] = useState([]);

  const getPost = async () => {
    const response = await ApiManager.get('/api/?seed=1&page=1&results=20');
    setResults(response.data.results);
    setFullData(response.data.results);
    console.log(result);
  };

  function renderHeader() {
    return (
      <View style={styles.searchBar}>
        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          clearButtonMode="always"
          value={query}
          onChangeText={queryText => handleSearch(queryText)}
          placeholder="City & State or Zip"
          style={{ backgroundColor: '#fff', paddingHorizontal: 20 }}
        />
      </View>
    );
  }

  const handleSearch = query => {
    const formattedQuery = query.toLowerCase();
    const filteredData = filter(fullData, user => {
      return contains(user, formattedQuery);
    });
    setResults(filteredData);
    setQuery(query);
  };
  
  const contains = ({ name, email }, query) => {
    const { first, last } = name;
  
    if (first.includes(query) || last.includes(query) || email.includes(query)) {
      return true;
    }
  
    return false;
  };

  return <SafeAreaView style={styles.container}>
      <Text>We have found {result.length} locations</Text>
      <Button title="Get Locations" onPress={getPost}/>
      
      <View style={styles.container}>
          <FlatList
            data={result}
            renderItem={({ item }) => <ListItem
            entry={item}
            navigation={props.navigation} />}
            keyExtractor={item => item.first}
            ListHeaderComponent={renderHeader}
          />
      </View>
    </SafeAreaView>
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchBar: {
    backgroundColor: '#fff',
    padding: 10,
    marginVertical: 10,
    borderRadius: 20,
  },
});

export default LocationScreen;
