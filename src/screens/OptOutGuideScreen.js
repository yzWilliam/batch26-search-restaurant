import React from "react";
import { StyleSheet, SafeAreaView, ActivityIndicator } from "react-native";
import WebView from 'react-native-webview';

const LoadingIndicatorView = () => (
  <ActivityIndicator color='#009b88' size='large'/>
);

const OptOutGuideScreen =  props => {
  console.log(props);  

  return <SafeAreaView style={styles.container}>
      <WebView
        source={{ uri: 'https://fiveguys.olo.express/privacy-policy?restrictedFlow=true' }}
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

export default OptOutGuideScreen;