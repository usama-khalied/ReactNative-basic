import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Button, Alert, StatusBar, TouchableOpacity, Platform, TouchableWithoutFeedback, TouchableNativeFeedback, View, Image, Text } from "react-native";





export default function App() {
  // console.log(require('./assets/icon.png'));
  const [count, setcount] = useState(0);
  const onPress = () => {
    setcount(count + 1);

  }

  const containerStyle = { backgroundColor: "green" };
  const styleing1 = { margin: 12 }

  return (

    <SafeAreaView style={[styles.container2, containerStyle]}>

      {/* <Image style={styles.img} source={require('./assets/splash.png')} /> */}
      <Text> Hellow Count :  {count} </Text>
      <TouchableOpacity onPress={onPress}>
        <Image
          source={{
            uri: "https://picsum.photos/200/300?grayscale",
            width: 300,
            height: 400,
          }} />
      </TouchableOpacity>
      <View style={styles.profile}>


        <Button color="purple" title='alert' onPress={() => {
          setcount(count + 1), Alert.alert("My title", "bhai kiya kr rahey ho ", [
            { text: "Done" },
            { text: "Cancel" },
          ])
        }} />


        <Button title='Check' color="red" onPress={() => {
          Alert.alert("Confirmation", "Are you permission ", [

            { text: "Done" },
            { text: "Cancel" },
          ])
        }} />
        <Button title='new' onPress={() => Alert.alert("Confirmation", "confirm", [
          { text: "Done" },
          { text: "Cancel" }

        ])} />
        <Button title='Click me' onPress={() => Alert.prompt("WHAT", "NAME", text => alert(text))} />

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // paddingTop: Platform.OS === 'android' ? 20 : 0,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,

  },
  container2: {
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  profile: {
    flex: 0,
    flexDirection: 'row',
    width: 100,
  },
  img: {
    height: 150,
    width: 150,
  },
  btn: {
    backgroundColor: 'red',
    color: '#000',
  }
});
