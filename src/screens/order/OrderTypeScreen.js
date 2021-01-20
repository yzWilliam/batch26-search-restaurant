import React, {useState} from "react";
import { SafeAreaView, StyleSheet, Text,
  View, TextInput, TouchableOpacity, Image, } from "react-native";
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
          <View style={styles.innerRow}>
            <Image
              source={{ uri: 'https://i.postimg.cc/tRfVwg1Z/tick.png' }}
              style={styles.icon}
            />
            <Text style={styles.text}> Order Type:</Text>
          </View>
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
          <View style={styles.innerRow}>
            <Image
              source={{ uri: 'https://i.postimg.cc/q7R3W6GK/clock.png' }}
              style={styles.icon}
            />
            <Text style={styles.text}> When:</Text>
          </View>    
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
      <Text style={styles.title}>How do you want your order?</Text>
      <OrderTypeActionSheet/>
      <WhenActionSheet/>

      { showDelivery? ( <View style={styles.deliveryContainer}>
        <Text style={styles.title}>Provide a delivery address</Text>
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
        placeholder="State"
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
          itemCheckedKey='value'
          iconSize={20}
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
    <View style={styles.bottomButton}>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress = {() => props.navigation.navigate("Choose Location", {
          orderType: orderType,
          when: when,
        })}
      >
        <Text style={styles.buttomButtonText}>Search for Locations</Text>
      </TouchableOpacity>
    </View>
    
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
    marginTop: 10,
  },
  input: {
    fontSize: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginVertical: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  innerRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 30,
    height: 30,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  text: {
    fontSize: 20,
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