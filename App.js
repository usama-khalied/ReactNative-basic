import React from 'react';
import {
  ImageBackground, SafeAreaView, StyleSheet, Button,
  Alert, StatusBar, Dimensions, useWindowDimensions, TouchableOpacity, Platform,
  TouchableWithoutFeedback, TouchableNativeFeedback, View, Image, Text
} from "react-native";
import AppText from './Components/AppText'
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
// import { useDeviceOrientation } from '@react-native-community/hooks';
import Appdiv from './Components/Appdiv'



export default function App() {
  // console.log(useDimensions());
  //console.log(useDeviceOrientation());

  // const window = useWindowDimensions();



  // const { landscape } = useDeviceOrientation();

  //Method No 1 







  return (
<View style={styles.container}>   
<AppText style={styles.head}>  I love Allah , and i stand with Palestine</AppText>
<Appdiv style={styles.deev}>   </Appdiv>
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
head : {
  fontFamily: 'Roboto',
  fontSize:20,
  fontWeight:"800",
  color:'tomato',
  fontStyle: "italic",
  textTransform : 'uppercase',
  textAlign: 'justify',
  lineHeight:40
},
deev : {
  height:100,
  width: 100,
  backgroundColor: 'red'
}

});







