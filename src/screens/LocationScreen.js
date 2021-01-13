import React, {useState, useEffect} from "react";
import { View , Text, StyleSheet, SafeAreaView, 
  FlatList, TextInput, ActivityIndicator } from "react-native";
// import ApiManager from '../api/ApiManager'
import ListItem from '../components/ListItem'
import filter from 'lodash.filter';

const LocationScreen =  props => {
  console.log(props);
  
  const API_ENDPOINT = "https://randomuser.me/api/?seed=1&page=1&results=20";
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState('');
  const [fullData, setFullData] = useState([]);

  useEffect(() => {
    setIsLoading(true);

    fetch(API_ENDPOINT)
      .then(response => response.json())
      .then(results => {
        setData(results.results);
        setFullData(results.results);
        setIsLoading(false);
      })
      .catch(err => {
        setIsLoading(false);
        setError(err);
      });
  }, []);

  function renderHeader() {
    return (
      <View style={styles.searchBar}>
        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          clearButtonMode="always"
          value={query}
          onChangeText={queryText => handleSearch(queryText)}
          placeholder="Search"
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
    setData(filteredData);
    setQuery(query);
  };
  
  const contains = ({ name, email }, query) => {
    const { first, last } = name;
  
    if (first.includes(query) || last.includes(query) || email.includes(query)) {
      return true;
    }
  
    return false;
  };

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#5500dc" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 18}}>
          Error fetching data... Check your network connection!
        </Text>
      </View>
    );
  }

  return <SafeAreaView style={styles.container}>
      
      <View style={styles.container}>
          <FlatList
            data={data}
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
