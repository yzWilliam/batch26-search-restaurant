import React, {useState} from "react";
import { View , Text, StyleSheet, FlatList, TouchableOpacity, 
  SafeAreaView, Button } from "react-native";

const ItemScreen = (props) => {

  const {name, price, calories, initialQuantity=1, index=-1} = props.route.params;
  const [quantity, setQuantity] = useState(initialQuantity);
  const basket = JSON.parse(props.route.params.basket);

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <View style={styles.container}>
        <Text style={styles.text}>${price}  {calories} Calories</Text>
        <Text style={styles.title}>Quantity</Text>
        <View style={styles.row}>
          <TouchableOpacity onPress={() => (quantity>1)? setQuantity(quantity-1): null}>
            <Text style={styles.button}>
              -
            </Text>
          </TouchableOpacity>
          <Text style={styles.button}>
            {quantity}  
          </Text>
          <TouchableOpacity onPress={() => setQuantity(quantity+1)}>
            <Text style={styles.button}>
              +
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      {(index > -1)? <View style={styles.bottomButton}>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress = {() => {
          basket[index].quantity = quantity;
          props.navigation.navigate('Basket', {
            location: props.route.params.location,
            orderType: props.route.params.orderType,
            when: props.route.params.when,
            basket: JSON.stringify(basket),
            update: true,
          });
        }}
      >
        <Text style={styles.buttomButtonText}>Update Item</Text>
      </TouchableOpacity>
    </View> : <View style={styles.bottomButton}>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress = {() => {
          basket.push({name, price, calories, quantity});
          props.navigation.navigate('Menu', {
            location: props.route.params.location,
            orderType: props.route.params.orderType,
            when: props.route.params.when,
            basket: JSON.stringify(basket),
          });
        }}
      >
        <Text style={styles.buttomButtonText}>Add to Basket</Text>
      </TouchableOpacity>
    </View>}
    </SafeAreaView>
  )
};

export default ItemScreen;

const styles = StyleSheet.create({
    safeAreaContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
    },
    container: {
        marginHorizontal: 20,
        marginVertical: 20,
    },
    item: {
      marginHorizontal: 20,
      marginBottom: 40,
    },
    text: {
      fontSize: 18,
    },
    title: {
      fontWeight: 'bold',
      fontSize: 25,
      marginVertical: 10,
    },
    row: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    button: {
      fontSize: 40,
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