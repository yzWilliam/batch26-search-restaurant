import React from "react";
import { View , Text, StyleSheet, SafeAreaView, Button, 
  Image, FlatList, TouchableOpacity } from "react-native";

const BasketScreen = (props) => {
    const {name, location, picture} = props.route.params.entry;
    const {orderType, when, basket} = props.route.params;

    console.log(JSON.parse(basket));
    const data = JSON.parse(basket);

    var subtotal = 0;
    for (let i = 0; i < data.length; i++) {
      subtotal += data[i].price * data[i].quantity;
    } 
    const taxRate = 0.08875;
    const estimatedTax = taxRate*subtotal;
    const estimatedTotal = (1+taxRate)*subtotal;

    return (<SafeAreaView style={styles.safeAreaContainer}>
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
            <Button
                title="Add More Items"
                onPress={() => props.navigation.navigate("Menu")}
            />
            <View style={styles.row}>
              <Text style={styles.text}>Order Type:</Text>
              <Text style={styles.text}>{orderType}</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.text}>When:</Text>
              <Text style={styles.text}>{when}</Text>
            </View>
            <Text style={styles.title}>Coupon</Text>
            <Button
                title="Redeem"
            />
            <Text style={styles.title}>Items</Text>
            <FlatList
              data={data}
              keyExtractor={(item, index) => 'key'+index}
              renderItem={({ item }) => (
                <TouchableOpacity
                  activeOpacity={0.7}
                >
                  <View style={styles.row}>
                    <Text style={styles.text}>{item.quantity}*{item.name}</Text>
                    <Text style={styles.text}>${(item.quantity*item.price).toFixed(2)}</Text>
                  </View>
                </TouchableOpacity>)}
            />
            <View style={styles.row}>
              <Text style={styles.text}>Subtotal:</Text>
              <Text style={styles.text}>${subtotal.toFixed(2)}</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.text}>Estimated Tax:</Text>
              <Text style={styles.text}>${estimatedTax.toFixed(2)}</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.textBold}>Estimated Total:</Text>
              <Text style={styles.textBold}>${estimatedTotal.toFixed(2)}</Text>
            </View>
        </View>
        <Button
            title="Checkout"
        />
    </SafeAreaView>
    );
};

export default BasketScreen;

const styles = StyleSheet.create({
    safeAreaContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
  },
  container: {
    //alignItems: 'center',
    //justifyContent: 'center',
    marginHorizontal: 20,
  },
  profile: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
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
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 25,
    marginVertical: 10,
  },
  text: {
    fontSize: 20,
  },
  textBold: {
    fontSize: 20,
    fontWeight: 'bold',
  }
});