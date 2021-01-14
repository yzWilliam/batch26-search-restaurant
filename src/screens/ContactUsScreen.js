import React from "react";
import { View , Text, StyleSheet, Button, SafeAreaView } from "react-native";
import ContactUsRow from '../components/ContactUsRow';

const ContactUsScreen =  props => {
  
  return  <SafeAreaView style={styles.container}>
    <ContactUsRow title={'Email'}
      input={'Info@gmail.com'}
      imageUrl={'https://i.postimg.cc/Y21P4KFK/email.png'}/>
    <ContactUsRow title={'Phone'}
      input={'(123)456-7890'}
      imageUrl={'https://i.postimg.cc/Xq0D2xTz/phone.png'}/>
    <ContactUsRow title={'Message'}
      input={'Type your message here'}
      imageUrl={'https://i.postimg.cc/2yF9ghY8/message.png'}/>
    <Button
      title={'SEND'}
      style={styles.button}
    />
  </SafeAreaView>
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    //justifyContent: 'center',
  },
  button: {
    width: '80%',
    padding: 6,
    backgroundColor: '#4130E6',
    borderRadius: 7,
  },
});

export default ContactUsScreen;