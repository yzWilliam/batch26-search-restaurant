import React from "react";
import { StyleSheet, SafeAreaView, ActivityIndicator } from "react-native";
import WebView from 'react-native-webview';

const LoadingIndicatorView = () => (
  <ActivityIndicator color='#009b88' size='large'/>
);

const AboutScreen =  props => {
  console.log(props);  

  return <SafeAreaView style={styles.container}>
      <WebView
        source={{ uri: 'https://about.fb.com/' }}
        renderLoading={LoadingIndicatorView}
        startInLoadingState={true}
      />
    </SafeAreaView>
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default AboutScreen;