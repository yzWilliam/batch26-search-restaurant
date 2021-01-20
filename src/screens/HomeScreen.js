import React from "react";
import { SafeAreaView, Text, StyleSheet, Image, TouchableOpacity, View } from "react-native";

const HomeScreen = props => {

  return <SafeAreaView style={styles.container}>
    <Image
      source={{ uri: 'https://i.postimg.cc/DfXSqZR6/home.png' }}
      style={styles.imageLarge}
    />
    <View style={styles.center}>
      <Text style={styles.title}>Welcome, guest!</Text>
    </View>
    <TouchableOpacity
      activeOpacity={0.7}
      onPress = {()=> props.navigation.navigate("Order Type")}
    >
      <View style={styles.row}>
        <View style={styles.innerRow}>
          <Image
            source={{ uri: 'https://i.postimg.cc/nrsswKFS/order.png' }}
            style={styles.icon}
          />
          <Text style={styles.title}> Start new order</Text>
        </View>
        <Text style={styles.title}>{'>'}</Text>
      </View>
    </TouchableOpacity>
  </SafeAreaView>
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  imageLarge: {
    width: '100%',
    height: '60%',
    marginBottom: 10,
  },
  icon: {
    width: 50,
    height: 50,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
    marginHorizontal: 10,
  },
  innerRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  center: {
    alignSelf: 'center',
  }
});