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
    <Text> {str}: {variable.label} </Text>
    <DropDownPicker
      items={items}
      onChangeItem={item => setVariable(item)}
      containerStyle={styles.dropDownPickerContainer}
      style={styles.dropDownPicker}
      itemStyle={styles.dropDownPickerItem}
      dropDownStyle={styles.dropDownPickerDropDown}
    />
  </View>
)

const OrderTypeScreen = props => {
  const [orderType, setOrderType] = useState({label: 'In-Store Pickup', value: 'pickup'});
  const [when, setWhen] = useState({label: 'ASAP', value: 'asap'});

  return (<SafeAreaView style={styles.container}>
    <Text>How Do you want your order?</Text>
    <Picker variable={orderType} setVariable={setOrderType} items={orderTypeItems} str='Order Type' />
    <Picker variable={when} setVariable={setWhen} items={whenItems} str='When' />
    <Button
      title="Search for Locations"
      onPress = {()=> props.navigation.navigate("Choose Location")}
    />
    </SafeAreaView>
  )
};

export default OrderTypeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pickerContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dropDownPickerContainer: {
    height: 40,
    alignSelf: 'center',
    marginLeft: '20%',
    marginRight: '20%',
  },
  dropDownPicker: {
    backgroundColor: '#fafafa',
  },
  dropDownPickerItem: {
    justifyContent: 'center',
  },
  dropDownPickerDropDown: {
    backgroundColor: '#fafafa',
    alignSelf: 'center',
  }
});