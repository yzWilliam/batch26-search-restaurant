import React from 'react';
import { Button, TextInput, View, StyleSheet } from 'react-native';

const LoginScreen = props => {
    console.log(props);

    return (
        <View style={styles.container}>
        <TextInput
          placeholder={'Email'}
          style={styles.input}
        />
        <TextInput
          placeholder={'Password'}
          style={styles.input}
        />
        <Button
          title={'Login'}
          style={styles.input}
          onPress = {()=> props.navigation.navigate("Home")}
        />
        <Button
          title={'Create account'}
          style={styles.input}
          onPress = {()=> props.navigation.navigate("Create Account")}
        />
        <Button
          title={'Forgot password?'}
          style={styles.input}
          onPress = {()=> props.navigation.navigate("Forgot Password")}
        />
      </View>
    );
}

export default LoginScreen;

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