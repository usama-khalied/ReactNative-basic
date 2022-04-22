import React from 'react';
import {
  ImageBackground, SafeAreaView, StyleSheet, Button,
  Alert, StatusBar, Dimensions, useWindowDimensions, TouchableOpacity, Platform,
  TouchableWithoutFeedback, TouchableNativeFeedback, View, Image, Text
} from "react-native";
// import { useDeviceOrientation } from '@react-native-community/hooks';




export default function App() {
  // console.log(useDimensions());
  //console.log(useDeviceOrientation());

  // const window = useWindowDimensions();



  // const { landscape } = useDeviceOrientation();

  //Method No 1 







  return (
    <SafeAreaView style={styles.container}>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor:'blue',
    justifyContent:'center',
    alignContent:'center',
  },



});







