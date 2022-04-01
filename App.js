import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Button, Alert, TouchableOpacity, TouchableWithoutFeedback, TouchableNativeFeedback, View, Image, Text } from "react-native";





export default function App() {
  // console.log(require('./assets/icon.png'));
  const [count, setcount] = useState(0);
  const onPress = () => {
    setcount(count + 1);

  }


  return (

    <SafeAreaView style={styles.container}>

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
        <Button title='Click me' onPress={() => Alert.prompt("WHAT", "NAME", text => alert(text))} />

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: 'center',
    justifyContent: 'center',
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
