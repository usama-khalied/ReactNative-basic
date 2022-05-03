import React from 'react';
import {
  ImageBackground, SafeAreaView, StyleSheet, Button,
  Alert, StatusBar, Dimensions, useWindowDimensions, TouchableOpacity, Platform,   
  TouchableWithoutFeedback, TouchableNativeFeedback, View, Image, Text 
} from "react-native";

import { useDeviceOrientation ,   useDimensions } from '@react-native-community/hooks'

import ViewImageScreen from './app/Screen/ViewImageScreen';
import Welcome from './app/Screen/Welcome';
import { MaterialCommunityIcons } from '@expo/vector-icons';





export default function App() {



  return (
<View style={styles.container}>
  <ViewImageScreen>I Love Allah</ViewImageScreen>
  <Text style={styles.sty}>Muhammad</Text>
<MaterialCommunityIcons name='heart' size={24} color="red"/>
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







