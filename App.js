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
    <SafeAreaView style={styles.container}>
      <View style={{
        backgroundColor: 'dodgerblue',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',
        flexDirection: 'row',
        // flexWrap: 'wrap'
        flexShrink: 1,

      }}>

        <View style={{
          backgroundColor: 'red',
          width: 200,
          //flexBasis: 100,
          //flexGrow: 1,
          flex: -1,
          height: 100,
        }}>
        </View>
        <View style={{
          backgroundColor: 'blue',
          width: 100,
          height: 100,
        }}>
        </View>
        <View style={{
          backgroundColor: 'orange',
          width: 100,
          height: 100,
        }}>
        </View>
      </View>






    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {

    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  }
});







