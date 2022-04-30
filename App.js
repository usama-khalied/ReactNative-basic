import React from 'react';
import {
  ImageBackground, SafeAreaView, StyleSheet, Button,
  Alert, StatusBar, Dimensions, useWindowDimensions, TouchableOpacity, Platform,
  TouchableWithoutFeedback, TouchableNativeFeedback, View, Image, Text
} from "react-native";
import ViewImageScreen from './app/Screen/ViewImageScreen';
import Welcome from './app/Screen/Welcome';

// import { useDeviceOrientation } from '@react-native-community/hooks';




export default function App() {








  return (
<ViewImageScreen/>
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







