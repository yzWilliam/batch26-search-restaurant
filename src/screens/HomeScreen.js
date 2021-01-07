import React, {useState} from "react";
import { View , Text, StyleSheet, Button, SafeAreaView, FlatList } from "react-native";
import ApiManager from '../api/ApiManager'
import ListItem from '../ListItem'

const HomeScreen =  props => {
  console.log(props);
  
  const [result , setResults]  = useState([]);

  const getPost = async () => {
    const response = await ApiManager.get('/posts');
    setResults(response.data);
};

  return <SafeAreaView style={styles.container}>
      <Text>We have found {result.length} results</Text>
      <Button title="Retrieve POST" onPress={() => {getPost();}}/>
      
      <View style={styles.container}>
          <FlatList
            data={result}
            renderItem={({ item }) => <ListItem
            userId={item.userId}
            id={item.id}
            title={item.title}
            body={item.body} />}
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
});

export default HomeScreen;