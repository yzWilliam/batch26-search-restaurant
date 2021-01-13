import React, {useState} from "react";
import { SafeAreaView, TextInput, StyleSheet, Button, Switch, Text, View } from "react-native";
import DropDownPicker from 'react-native-dropdown-picker'

const CreateAccountScreen = props => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [country, setCountry] = useState('us');
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return <SafeAreaView style={styles.container}>
    <TextInput
        style={styles.input}
        placeholder="Email"
    />
    <TextInput
        style={styles.input}
        placeholder="Password"
    />
    <TextInput
        style={styles.input}
        placeholder="Confirm Password"
    />
    <TextInput
        style={styles.input}
        placeholder="First Name"
    />
    <TextInput
        style={styles.input}
        placeholder="Last Name"
    />
        <Text>Country</Text>
        <DropDownPicker
            items={[
                {label: "Canada" , value: "canada"},
                {label: "United States", value: "us"},
            ]}
            defaultValue={country}
            onChangeItem={item => setCountry(item.value)}
            containerStyle={{height: 40, width: 200}}
            labelStyle={{textAlign: 'center'}}
        />
        <Text>Special deals and rewards</Text>
        <Switch
            onValueChange={toggleSwitch}
            value={isEnabled}
        />
    
    <Button
      title="Create Account"
      onPress = {()=> props.navigation.navigate("Login")}
    />
  </SafeAreaView>
}

export default CreateAccountScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: 250,
    height: 40,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
  },
});