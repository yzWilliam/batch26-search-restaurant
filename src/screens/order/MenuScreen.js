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

  const {name, location, email, cell, picture} = props.route.params.location;
  const {basket=JSON.stringify([])} = props.route.params;

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <View style={styles.container}>
        <View style={styles.profile}>
          <Image source={{ uri : picture.thumbnail}} style={styles.image} />
          <View style={styles.profileMeta}> 
            <Text style={styles.profileText}> Name: {name.first} {name.last} </Text>
            <Text style={styles.profileText}> City: {location.city} </Text>
            <Text style={styles.profileText}> State: {location.state} </Text>
            <Text style={styles.profileText}> Country: {location.country} </Text>
          </View>
        </View>
        <Text style={styles.description}> Email: {email} </Text>
        <Text style={styles.description}> Phone: {cell} </Text>
        <FlatList
          data={categories}
          renderItem={({ item }) => (
            <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => props.navigation.navigate('Category', {
              category: item.name,
              location: props.route.params.location,
              orderType: props.route.params.orderType,
              when: props.route.params.when,
              basket: basket,
            })}
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
    <View style={styles.bottomButton}>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress = {()=> props.navigation.navigate("Basket", {
          location: props.route.params.location,
          orderType: props.route.params.orderType,
          when: props.route.params.when,
          basket: basket,
        })}
      >
        <Text style={styles.buttomButtonText}>Review Basket</Text>
      </TouchableOpacity>
    </View>
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
    marginVertical: 10,
    flexDirection: 'row',
  },
  profileMeta: {
    marginLeft: 10,
    justifyContent: 'center',
  },
  profileText: {
    fontSize: 20,
  },
  description: {
    fontSize: 15,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
  listItem: {
    paddingTop: 20,
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
    paddingHorizontal: 20,
  },
  buttomButtonText:{
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white',
  },
  bottomButton: {
    alignSelf: 'center',
    marginBottom: 10,
    backgroundColor: 'red',
    alignItems: 'center',
    width: '80%',
    paddingVertical: '3%',
  },
});

export default MenuScreen;