import React from 'react';
import {
  ImageBackground, SafeAreaView, StyleSheet, Button,
  Alert, StatusBar, Dimensions, useWindowDimensions, TouchableOpacity, Platform,
  TouchableWithoutFeedback, TouchableNativeFeedback, View, Image, Text
} from "react-native";
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
// import { useDeviceOrientation } from '@react-native-community/hooks';




export default function App() {
  // console.log(useDimensions());
  //console.log(useDeviceOrientation());

  // const window = useWindowDimensions();



  // const { landscape } = useDeviceOrientation();

  //Method No 1 







  return (
<View style={styles.container}>   
<View style={styles.bor}>
<View style={styles.sing}>


</View>


</View>
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
bor : {
  width:100,
  height:100,
  backgroundColor:'red',
  // borderWidth : 10,
  // borderColor:'yellow',
  // borderRadius:20,
  // borderTopWidth:30,
  // borderTopLeftRadius:50,
  elevation:40,
  padding: 30,
  paddingHorizontal:20,
  paddingLeft:40,
  shadowColor:'black',
  shadowOffset: {width : 20 , height : 10},
  shadowOpacity:1,
},
sing : {
  width:50,
  height: 50,
  backgroundColor:'green',

}

});







