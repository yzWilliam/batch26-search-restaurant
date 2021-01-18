import React from "react";
import { View , Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";

const items = {
    "Burgers": [
        {name: 'Hamburger', price: 8.39, calories: 840},
        {name: 'Little Hamburger', price: 6.39, calories: 540},
        {name: 'Cheeseburger', price: 9.49, calories: 980},
        {name: 'Little Cheeseburger', price: 7.19, calories: 610},
        {name: 'Bacon Burger', price: 9.39, calories: 920},
        {name: 'Little Bacon Burger', price: 7.09, calories: 620},
        {name: 'Bacon Cheeseburger', price: 9.59, calories: 1060},
        {name: 'Little Bacon Cheeseburger', price: 8.29, calories: 690},
    ],
    "Hot Dogs": [
        {name: 'Hot Dog', price: 6.19, calories: 520},
        {name: 'Bacon Dog', price: 6.89, calories: 600},
        {name: 'Cheese Dog', price: 6.79, calories: 590},
        {name: 'Bacon Cheese Dog', price: 7.79, calories: 670},
    ],
    "Sandwiches": [
        {name: 'Grilled Cheese Sandwich', price: 5.19, calories: 420},
        {name: 'Veggie Sandwich', price: 4.49, calories: 280},
        {name: 'BLT Sandwich', price: 6.29, calories: 600},
        {name: 'Veggie Sandwich with Cheese', price: 5.19, calories: 420},
    ],
    "Fries": [
        {name: 'Little Fries', price: 3.69, calories: 530}, 
        {name: 'Little Cajun Fries', price: 3.69, calories: 530}, 
        {name: 'Regular Fries', price: 4.79, calories: 950}, 
        {name: 'Cajun Fries', price: 4.79, calories: 950}, 
        {name: 'Large Fries', price: 6.19, calories: 1310}, 
        {name: 'Large Cajun Fries', price: 6.19, calories: 1310}, 
    ],
    "Drinks": [
        {name: 'Regular Drink', price: 2.89, calories: 360}, 
        {name: 'Large Drink', price: 2.99, calories: 520}, 
        {name: 'Bottled Wate', price: 1.99, calories: 0}, 
        {name: 'Honest Tea Bottle', price: 2.79, calories: 70}, 
        {name: 'Simply Lemonade Bottle', price: 2.79, calories: 160}, 
        {name: 'Coke Bottle', price: 2.59, calories: 240}, 
        {name: 'Diet Coke Bottle', price: 2.59, calories: 0}, 
        {name: 'Sprite Bottle', price: 2.59, calories: 240}, 
    ],
    "Shakes": [
        {name: 'Milkshake', price: 5.05, calories: 670}, 
    ],
};

const CategoryScreen = (props) => {

    const {category} = props.route.params;
    return <View style={styles.container}>
        <FlatList
            data={items[category]}
            renderItem={({ item }) => (
                <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={() => props.navigation.navigate('Item', {
                        name: item.name, 
                        price: item.price,
                        calories: item.calories,
                        location: props.route.params.location,
                        orderType: props.route.params.orderType,
                        when: props.route.params.when,
                        basket: props.route.params.basket,
                    })}
                >
                <View style={styles.item}>
                    <Text style={styles.text}>{item.name}</Text>
                    <Text style={styles.text}>${item.price}  {item.calories} Calories</Text>
                </View>
                </TouchableOpacity>)}
            keyExtractor={item => item.name}
        />
    </View>
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'flex-start',
      //justifyContent: 'center',
    },
    item: {
      marginHorizontal: 20,
      marginBottom: 40,
    },
    text: {
      fontSize: 18,
    }
  });
  
  export default CategoryScreen;