import React from 'react';
import { SafeAreaView, StyleSheet, Button, Alert, StatusBar, Dimensions, useWindowDimensions, TouchableOpacity, Platform, TouchableWithoutFeedback, TouchableNativeFeedback, View, Image, Text } from "react-native";
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';


// const TRANSITION = ['fade', 'slide', 'none'];

export default function App() {
  // console.log(useDimensions());
  console.log(useDeviceOrientation());
  // console.log(Dimensions.get('window'));
  // const windowWidth = Dimensions.get('window').width;
  // const heigthWidth = Dimensions.get('window').height;
  const window = useWindowDimensions();
  // console.log(useDimensions())
  // const [hidden, sethidden] = useState(false);

  // const [statusbartransition, setstatusbartransition] = useState(TRANSITION[0]);
  // const changeStatusbarVisibility = () => {
  //   sethidden(!hidden);
  //   alert(hidden)
  // };


  const { landscape } = useDeviceOrientation();
  //Method No 1 







  return (

    <SafeAreaView>
      <View>

        <Text>

          This is
        </Text>

      </View>


    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {

  }
});







