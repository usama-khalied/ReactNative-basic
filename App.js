import React from 'react';
import { SafeAreaView, StyleSheet, View, Image, Text, Button } from "react-native";
import { ScreenOrientation } from 'expo';

export default function App() {
  _setPortrait = () => {
    ScreenOrientation.allow(ScreenOrientation.Orientation.PORTRAIT);
  };
  const handlePress = () => console.log("Text Press")

  return (

    <SafeAreaView style={styles.container}>
      <View style={styles.profile}>
        <Image source={{ uri: 'https://elysator.com/wp-content/uploads/blank-profile-picture-973460_1280-e1523978675847.png' }} style={styles.imageProfile} />
        <Text style={styles.name}>StackOverFlow</Text>
        <Button onPress={this._setPortrait} title="Set portrait" />
        <Spacer />
      </View>
      {/* <Text numberOfLines={1} onPress={handlePress}>: Usama khalied Areally really long text is about then verticl about the horizential </Text> */}

    </SafeAreaView >

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "rgb(106, 90, 205)",
    alignItems: 'center',
    justifyContent: 'center',

  },
  profile: {
    flexDirection: 'row',
    backgroundColor: '#EEE',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 0,
    width: 150,
  },

  name: {

    fontSize: 16,
  }
});
