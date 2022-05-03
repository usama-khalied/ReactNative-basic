import React from 'react';
import {
  ImageBackground, SafeAreaView, StyleSheet, Button,
  Alert, StatusBar, Dimensions, useWindowDimensions, TouchableOpacity, Platform,   
  TouchableWithoutFeedback, TouchableNativeFeedback, View, Image, Text 
} from "react-native";

import { useDeviceOrientation , useDimensions } from '@react-native-community/hooks'

import ViewImageScreen from './app/Screen/ViewImageScreen';
import Welcome from './app/Screen/Welcome';






export default function App() {

  const {landscape}  = useDeviceOrientation()
console.log(landscape)
  return (
<View style={styles.container}>
  <ViewImageScreen>I Love Allah</ViewImageScreen>
  <Text style={styles.sty}>Muhammad</Text>
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
sty : {
fontSize: landscape ? 40 : 20,
}

});







