import React, {useState} from "react";
import { SafeAreaView, StyleSheet, Button, Text, View } from "react-native";
import DropDownPicker from 'react-native-dropdown-picker'

const orderTypeItems = [
  {label: 'In-Store Pickup', value: 'pickup'},
  {label: 'Mobile Drive-Up Window', value: 'driveup'},
  {label: 'Curbside', value: 'curbside'},
  {label: 'Delivery', value: 'delivery'},
];

const whenItems = [
  {label: 'ASAP', value: 'asap'},
  {label: 'Later', value: 'later'},
];

const Picker = ({ variable, setVariable, items, str }) => (
  <View style={styles.pickerContainer}>
    <Text>{str}</Text>
    <DropDownPicker
      items={items}
      defaultValue={variable}
      onChangeItem={item => setVariable(item.value)}
      containerStyle={styles.dropDownPickerContainer}
      style={styles.dropDownPicker}
      itemStyle={styles.dropDownPickerItem}
      dropDownStyle={styles.dropDownPickerDropDown}
      labelStyle={{
        textAlign: 'right',
      }}
    />
  </View>
)

const OrderTypeScreen = props => {
  const [orderType, setOrderType] = useState('pickup');
  const [when, setWhen] = useState('asap');

  return (<SafeAreaView style={styles.safeAreaContainer}>
    <View style={styles.container}>
      <Text>How do you want your order?</Text>
      <Picker variable={orderType} setVariable={setOrderType}
        items={orderTypeItems} str='Order Type' />
      <Picker variable={when} setVariable={setWhen}
        items={whenItems} str='When' />
    </View>
    <Button
      title="Search for Locations"
      onPress = {()=> props.navigation.navigate("Choose Location")}
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
    backgroundColor: '#fff',
  },
  pickerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    marginBottom: 180,
  },
  dropDownPickerContainer: {
    height: 30,
    width: 220,
  },
  dropDownPicker: {
    backgroundColor: '#fafafa',
  },
  dropDownPickerItem: {
    flexDirection: 'row-reverse',
    justifyContent: 'flex-start',
  },
  dropDownPickerDropDown: {
    backgroundColor: '#fafafa', 
  }
});