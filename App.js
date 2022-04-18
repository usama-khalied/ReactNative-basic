import React from 'react';
import { ImageBackground, SafeAreaView, StyleSheet, Button, Alert, StatusBar, Dimensions, useWindowDimensions, TouchableOpacity, Platform, TouchableWithoutFeedback, TouchableNativeFeedback, View, Image, Text } from "react-native";
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';




export default function App() {
  // console.log(useDimensions());
  //console.log(useDeviceOrientation());

  const window = useWindowDimensions();



  const { landscape } = useDeviceOrientation();

  //Method No 1 







  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.scree}>
        <ImageBackground style={styles.image} source={require('./assets/tomas-malik-MJ9px5L-opg-unsplash.jpg')} resizeMode="cover">

        </ImageBackground>
      </View>



    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {

    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  scree: {
    flex: 1,
  },
  image: {
    flex: 1,
  },
  text: {

  }
});







