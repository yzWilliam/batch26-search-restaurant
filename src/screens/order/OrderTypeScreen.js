import React, {useState} from "react";
import { SafeAreaView, StyleSheet, Button, Text,
  View, TextInput, TouchableOpacity, Platform } from "react-native";
// import DropDownPicker from 'react-native-dropdown-picker';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import CheckboxFormX from 'react-native-checkbox-form';
import ActionSheet from 'react-native-action-sheet';

const monthNames = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];

const dayNames = [
  "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"
];

const formatDate = (rawDate) => {
  let [day, month, date, hours, minutes] = [
    rawDate.getDay(),
    rawDate.getMonth(),
    rawDate.getDate(),
    rawDate.getHours(),
    rawDate.getMinutes()
  ];
  let suffix = (hours >= 12)? 'pm' : 'am';
  hours = (hours > 12)? hours - 12 : hours;
  hours = (hours == '00')? 12 : hours;
  minutes = (minutes < 10)? ('0'+minutes) : minutes;
  return [dayNames[day], monthNames[month], date, hours, minutes, suffix];
}

const orderTypeItems = [
  'In-Store Pickup',
  'Mobile Drive-Up Window',
  'Curbside',
  'Delivery',
];

const whenItems = [
  'ASAP',
  'Later',
];

const OrderTypeScreen = props => {
  const [orderType, setOrderType] = useState('In-Store Pickup');
  const [when, setWhen] = useState('ASAP');
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const showDelivery = (orderType === 'Delivery')? true: false;

  const handleConfirm = (rawDate) => {
    let [day, month, date, hours, minutes, suffix] = formatDate(rawDate);
    setWhen(day+' '+month+' '+date+' @ '+hours+':'+minutes+' '+suffix);
    setDatePickerVisibility(false);
  };

  return (<SafeAreaView style={styles.safeAreaContainer}>
    <View style={styles.container}>
      <Text style={styles.text}>How do you want your order?</Text>
      <View style={styles.row}>
        <Text style={styles.text}>Order Type:</Text>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => ActionSheet.showActionSheetWithOptions(
            {
              options: (Platform.OS == 'ios')? orderTypeItems.concat(["Cancel"]) : orderTypeItems,
              // destructiveButtonIndex: 0,
              cancelButtonIndex: 4,
              title: "How would you like to get your order?",
            },
            buttonIndex => {
              if (buttonIndex > 0) {
                setOrderType(orderTypeItems[buttonIndex]);
              }
            }
          )}
        >
          <Text style={styles.text}>{orderType} {'>'}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <Text style={styles.text}>When:</Text>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => ActionSheet.showActionSheetWithOptions(
            {
              options: (Platform.OS == 'ios')? whenItems.concat(["Cancel"]) : whenItems,
              cancelButtonIndex: 2,
              title: "When would you like your order?",
            },
            buttonIndex => {
              if (buttonIndex === 0) {
                setWhen(whenItems[0]);
              }
              if (buttonIndex === 1) {
                setDatePickerVisibility(true);
              }
            }
          )}
        >
          <Text style={styles.text}>{when} {'>'}</Text>
        </TouchableOpacity>
      </View>

      { showDelivery? ( <View style={styles.deliveryContainer}>
        <Text style={styles.text}>Provide a delivery address</Text>
        <View style={styles.contactless}>
          <Text style={styles.contactlessTitle}>We Now Offer Contactless Deliveries</Text>
          <Text>Minimize contact with your delivery person by</Text>
          <Text>selecting "I want contactless delivery" when</Text>
          <Text>adding a new address.</Text>
        </View>
        <TextInput
        style={styles.input}
        placeholder="Street Address"
        />
         <TextInput
        style={styles.input}
        placeholder="Building Name/Suite/Apt"
        /> 
         <TextInput
        style={styles.input}
        placeholder="City"
        /> 
         <TextInput
        style={styles.input}
        placeholder="Zip Code"
        /> 
         <TextInput
        style={styles.input}
        placeholder="Delivery Instructions (22 Character Limit)"
        /> 
        <CheckboxFormX 
          dataSource={[{label: 'I want contactless delivery', value: false}]}
          itemShowKey='label'
          itemCheckedKey='checked'
          iconSize={16}
          formHorizontal={false}
          labelHorizontal={true}
        />
      </View> ) : null}
    </View>
    <DateTimePickerModal
      isVisible={isDatePickerVisible}
      mode="datetime"
      onConfirm={handleConfirm}
      onCancel={() => setDatePickerVisibility(false)}
    />
    <Button
      title="Search for Locations"
      onPress = {() => props.navigation.navigate("Choose Location", {
        orderType: orderType,
        when: when,
      })}
    />
    </SafeAreaView>
  )
};

export default OrderTypeScreen;

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  container: {
    flexDirection: 'column', 
    marginHorizontal: 20,
  },
  deliveryContainer: {
    flexDirection: 'column', 
    backgroundColor: '#fff',
    marginHorizontal: 20,
    alignItems: 'center',
    marginTop: 10,
  },
  contactless: {
    alignItems: 'center',
    marginVertical: 10,
  },
  contactlessTitle: {
    color: 'red',
    fontSize: 20,
  },
  input: {
    width: 300,
    height: 40,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 20,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 25,
    marginVertical: 10,
  },
});