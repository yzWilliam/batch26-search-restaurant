import React, {useState} from "react";
import { SafeAreaView, StyleSheet, Button, Text,
  View, TextInput, TouchableOpacity, } from "react-native";
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import CheckboxFormX from 'react-native-checkbox-form';
import ActionSheet from 'react-native-actionsheet';

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

  class OrderTypeActionSheet extends React.Component {
    showActionSheet = () => {
      this.ActionSheet.show()
    }
    render() {
      return (
        <View style={styles.row}>
          <Text style={styles.text}>Order Type:</Text>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={this.showActionSheet}
          >
            <Text style={styles.text}>{orderType} {'>'}</Text>
          </TouchableOpacity>
          <ActionSheet
            ref={o => this.ActionSheet = o}
            title={"How would you like to get your order?"}
            options={["Cancel"].concat(orderTypeItems)}
            cancelButtonIndex={0}
            onPress={(index) => {if (index > 0) {setOrderType(orderTypeItems[index - 1])}}}
          />
        </View>
      )
    }
  }

  class WhenActionSheet extends React.Component {
    showActionSheet = () => {
      this.ActionSheet.show()
    }
    render() {
      return (
        <View style={styles.row}>
          <Text style={styles.text}>When:</Text>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={this.showActionSheet}
          >
            <Text style={styles.text}>{when} {'>'}</Text>
          </TouchableOpacity>
          <ActionSheet
            ref={o => this.ActionSheet = o}
            title={"When would you like your order?"}
            options={["Cancel"].concat(whenItems)}
            cancelButtonIndex={0}
            onPress={(index) => {
              if (index === 1) {setWhen(whenItems[0])}
              if (index === 2) {setDatePickerVisibility(true)}
            }}
          />
        </View>
      )
    }
  }

  return (<SafeAreaView style={styles.safeAreaContainer}>
    <View style={styles.container}>
      <Text style={styles.text}>How do you want your order?</Text>
      <OrderTypeActionSheet/>
      <WhenActionSheet/>

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