import React from 'react';
import {
  ImageBackground, SafeAreaView, StyleSheet, Button,
  Alert, StatusBar, Dimensions, useWindowDimensions, TouchableOpacity, Platform,
  TouchableWithoutFeedback, TouchableNativeFeedback, View, Image, Text
} from "react-native";
import AppText from './Components/AppText'
// import { useDeviceOrientation } from '@react-native-community/hooks';
import Appdiv from './Components/Appdiv'



export default function App() {








  return (
<View style={styles.container}>   
<Appdiv>
  I  love Allah 
</Appdiv>
</View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    justifyContent:'center',
    alignItems:'center',

  },


});







