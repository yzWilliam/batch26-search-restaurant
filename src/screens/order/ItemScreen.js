import React, {useState} from "react";
import { View , Text, StyleSheet, FlatList, TouchableOpacity, 
  SafeAreaView, Button } from "react-native";

const ItemScreen = (props) => {
  const {name, price, calories} = props.route.params;
  const [quantity, setQuantity] = useState(0);

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <View style={styles.container}>
        <Text style={styles.text}>${price}  {calories} Calories</Text>
        <Text style={styles.title}>Quantity</Text>
        <View style={styles.row}>
          <TouchableOpacity onPress={() => setQuantity(quantity-1)}>
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
      <Button
        title="Add to Basket"
        onPress = {() => props.navigation.navigate('Menu', {
          name: name,
          price: price,
          calories: calories,
          quantity: quantity,
          toBeAdded: true,
        })}
      />
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
    }
});