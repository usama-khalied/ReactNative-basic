import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Button, TouchableOpacity, TouchableWithoutFeedback, TouchableNativeFeedback, View, Image, Text } from "react-native";



const size = 400;

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
        <Button color="red" font-size="30" title='click me' onPress={() => { console.log("Hellow world") }} />
        <Button color="orange" title='click again' onPress={() => { alert("Nice") }} />
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
