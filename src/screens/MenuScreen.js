import { useLinkProps } from "@react-navigation/native";
import React from "react";
import { View , Text, StyleSheet, Image, TouchableOpacity, 
  SafeAreaView, FlatList, Button } from "react-native";

const categories = [
  {name: 'Burgers', uri: 'https://i.postimg.cc/pLV3MYY6/burger.png'},
  {name: 'Hot Dogs', uri: 'https://i.postimg.cc/4NQj0Ftc/hotdog.png'},
  {name: 'Sandwiches', uri: 'https://i.postimg.cc/NfcWpwyY/sandwich.png'},
  {name: 'Fries', uri: 'https://i.postimg.cc/GmMVL8Xh/fries.png'},
  {name: 'Drinks', uri: 'https://i.postimg.cc/CMD3GKxm/drink.png'},
  {name: 'Shakes', uri: 'https://i.postimg.cc/0jphPVBL/shake.png'},
];

const MenuScreen =  props => {

  const {name, location, email, cell, picture} = props.route.params.entry;

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <View style={styles.container}>
        <View style={styles.profile}>
          <Image source={{ uri : picture.thumbnail}} style={styles.image} />
          <View style={styles.profileText}> 
            <Text> Name: {name.first} {name.last} </Text>
            <Text> City: {location.city} </Text>
            <Text> State: {location.state} </Text>
            <Text> Country: {location.country} </Text>
          </View>
        </View>
        <Text> Email: {email} </Text>
        <Text> Phone: {cell} </Text>
        <FlatList
          data={categories}
          renderItem={({ item }) => (
            <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => props.navigation.navigate('Category', {category: item.name})}
            >
            <View style={styles.listItem}>
              <Image
                source={{ uri: item.uri}}
                style={styles.itemImage}
              />
              <Text style={styles.itemTitle}>{item.name}</Text>
            </View>
            </TouchableOpacity>)}
          keyExtractor={item => item.name}
        />
      </View>
      <Button
        title="Review Basket"
      />
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
  },
  container: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginHorizontal: 20,
  },
  profile: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  profileText:{
    justifyContent: 'center',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
  listItem: {
    // marginTop: 10,
    paddingVertical: 5,
    // paddingHorizontal: 20,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
    resizeMode: 'contain',
  },
  itemTitle: {
    fontSize: 25,
    width: 200,
    padding: 10
  },
});

export default MenuScreen;