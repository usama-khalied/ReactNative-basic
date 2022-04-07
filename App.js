import React from 'react';
import { SafeAreaView, StyleSheet, Button, Alert, StatusBar, Dimensions, TouchableOpacity, Platform, TouchableWithoutFeedback, TouchableNativeFeedback, View, Image, Text } from "react-native";
import { useDimensions } from '@react-native-community/hooks';


// const TRANSITION = ['fade', 'slide', 'none'];

export default function App() {
  // console.log(Dimensions.get('window'));
  console.log(useDimensions())
  // const [hidden, sethidden] = useState(false);

  // const [statusbartransition, setstatusbartransition] = useState(TRANSITION[0]);
  // const changeStatusbarVisibility = () => {
  //   sethidden(!hidden);
  //   alert(hidden)
  // };


  //Method No 1 






  // Method No. 2  
  // changeStatusbarTransition = () => {
  //   const transition = TRANSITION.indexOf(statusbartransition) + 1;
  //   if (transition === TRANSITION.length) {
  //     setstatusbartransition(TRANSITION[0]);

  //   }
  //   else {
  //     setstatusbartransition(TRANSITION[transition]);
  //   }

  // }
  return (
    <SafeAreaView style={styles.container}>
      <View style={{
        backgroundColor: 'red',
        width: '100%',
        height: '30%',
      }}>

      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",

    // paddingTop: Platform.OS === 'android' ? 20 : 0,
    // paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,

  },
  buttonsContainer: {
    padding: 10,
  },
  textStyle: {
    textAlign: 'center',
    marginBottom: 8,

  }
});







