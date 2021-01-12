import React, {useState} from "react";
import { View , Text, StyleSheet, Button, SafeAreaView, FlatList, TextInput } from "react-native";
import ApiManager from '../api/ApiManager'
import ListItem from '../components/ListItem'
import filter from 'lodash.filter';

const HomeScreen =  props => {
  console.log(props);
  
  const [result , setResults]  = useState([]);
  const [query, setQuery] = useState('');
  const [fullData, setFullData] = useState([]);

  const getPost = async () => {
    const response = await ApiManager.get('/posts');
    setResults(response.data);
    setFullData(response.data);
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
          placeholder="Search"
          style={{ backgroundColor: '#fff', paddingHorizontal: 20 }}
        />
      </View>
    );
  }

  const handleSearch = query => {
    const formattedQuery = query.toLowerCase();
    const filteredData = filter(fullData, item => {
      return contains(item, formattedQuery);
    });
    setResults(filteredData);
    setQuery(query);
  };
  
  const contains = ({ title, body }, query) => {
    if (title.includes(query) || body.includes(query)) {
      return true;
    }
    return false;
  };

  return <SafeAreaView style={styles.container}>
      <Text>We have found {result.length} results</Text>
      <Button title="Retrieve POST" onPress={getPost}/>
      
      <View style={styles.container}>
          <FlatList
            data={result}
            renderItem={({ item }) => <ListItem
            userId={item.userId}
            id={item.id}
            title={item.title}
            body={item.body}
            navigation={props.navigation} />}
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

export default HomeScreen;
