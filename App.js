import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Button, Alert, StatusBar, TouchableOpacity, Platform, TouchableWithoutFeedback, TouchableNativeFeedback, View, Image, Text } from "react-native";


const STYLES = ['default', 'dark-content', 'light-content'];
const TRANSITION = ['fade', 'slide', 'none'];

export default function App() {
  const [hidden, sethidden] = useState(false);
  const [statusbarstyle, setsatusbarstyle] = useState(STYLES[0]);
  const [statusbartransition, setstatusbartransition] = useState(TRANSITION[0]);
  const changeStatusbarVisibility = () => sethidden(!hidden)

  //Method No 1 






  // Method No. 2  
  changeStatusbarTransition = () => {
    const transition = TRANSITION.indexOf(statusbartransition) + 1;
    if (transition === TRANSITION.length) {
      setstatusbartransition(TRANSITION[0]);

    }
    else {
      setstatusbartransition(TRANSITION[transition]);
    }

  }




  return (

    <SafeAreaView style={styles.container}>
      <StatusBar animated={true} backgroundColor="#61dafb"
      />
      <Text style={styles.textStyle}>
        StatusBar Visibility:{'\n'}
        {hidden ? 'Hidden' : 'Visible'}

      </Text>
      <Text style={styles.textStyle}> </Text>
      <View style={styles.buttonsContainer}>
        <Button onPress={changeStatusbarVisibility} title='toggleStatusbar' />
        <Button title='Change Status bar Transition' onPress={changeStatusbarTransition} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: 'center',
    alignItems: 'center'
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







