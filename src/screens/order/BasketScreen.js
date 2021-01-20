import React, {useState} from "react";
import { View , Text, StyleSheet, SafeAreaView, Button, 
  Image, FlatList, TouchableOpacity } from "react-native";
import Dialog from "react-native-dialog";

const BasketScreen = (props) => {

    const {name, location, picture} = props.route.params.location;
    const {orderType, when, basket, update=false} = props.route.params;

    const [data, setData] = useState(JSON.parse(basket));
    if (update) {
      setData(JSON.parse(basket));
      props.route.params.update = false;
    }

    var subtotal = 0;
    for (let i = 0; i < data.length; i++) {
      subtotal += data[i].price * data[i].quantity;
    } 
    const taxRate = 0.08875;
    const estimatedTax = taxRate*subtotal;
    const estimatedTotal = (1+taxRate)*subtotal;

    const [editItems, setEditItems] = useState(false);
    const [showCoupon, setShowCoupon] = useState(false);

    return (<SafeAreaView style={styles.safeAreaContainer}>
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
            <View style={styles.bottomButton}>
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => props.navigation.navigate("Menu", {
                  basket: JSON.stringify(data),
                  location: props.route.params.location,
                  orderType: orderType,
                  when: when,
                })}
              >
                <Text style={styles.buttomButtonText}>Add More Items</Text>
              </TouchableOpacity>
            </View>
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
                onPress={() => setShowCoupon(true)}
            />
            <View>
              <Dialog.Container visible={showCoupon}>
                <Dialog.Title>Enter your coupon code</Dialog.Title>
                <Dialog.Input
                  placeholder="Coupon code"
                />
                <Dialog.Button label="Cancel"
                  onPress={() => setShowCoupon(false)}
                />
                <Dialog.Button label="Ok"
                  onPress={() => setShowCoupon(false)} 
                />
              </Dialog.Container>
            </View>
            <View style={styles.row}>
              <Text style={styles.title}>Items</Text>
              {(editItems)? <Button
                title='Done'
                onPress={() => setEditItems(false)}
              /> : <Button 
                title='Edit'
                onPress={() => setEditItems(true)}
              />}
            </View>
            <FlatList
              style={styles.list}
              data={data}
              keyExtractor={( item, index ) => 'key'+index}
              renderItem={({ item, index }) => (
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => props.navigation.navigate("Item", {
                    name: item.name,
                    price: item.price, 
                    calories: item.calories,
                    initialQuantity: item.quantity,
                    index: index,
                    location: props.route.params.location,
                    orderType: orderType, 
                    when: when,
                    basket: JSON.stringify(data),
                  })}
                >
                  <View style={styles.row}>
                    <Text style={styles.text}>{item.quantity}x {item.name}</Text>
                    <View style={styles.row}>
                      <Text style={styles.text}>${(item.quantity*item.price).toFixed(2)}  </Text>
                      {(editItems)? <TouchableOpacity
                        activeOpacity={0.7}
                        onPress={() => setData(data.filter((v, i) => i != index))}
                      >
                        <Text style={{color: '#1384FF'}}>delete</Text>
                      </TouchableOpacity> : <Text style={{color: '#1384FF'}}>{'>'}</Text>}
                    </View>
                  </View>
                </TouchableOpacity>
                )}
            />
            <View style={styles.total}>
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
        </View>
        <View style={styles.bottomButton}>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => props.navigation.navigate("Checkout", {
              total: estimatedTotal, 
            })}
          >
            <Text style={styles.buttomButtonText}>Checkout</Text>
          </TouchableOpacity>
        </View>
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
  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
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
  },
  list: {
    // height: '40%',
  },
  total: {
    marginHorizontal: 20,
    marginVertical: 20,
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