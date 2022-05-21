import React from 'react';
import {
    ImageBackground,
    SafeAreaView,
    StyleSheet,
    Button,
    Alert,
    StatusBar,
    Dimensions,
    useWindowDimensions,
    TouchableOpacity,
    Platform,
    TouchableWithoutFeedback,
    TouchableNativeFeedback,
    View,
    Image,
    Text
} from "react-native";
import { useDeviceOrientation, useDimensions } from '@react-native-community/hooks'
import { AntDesign } from '@expo/vector-icons'; 

import ViewImageScreen from './app/Screen/ViewImageScreen';
import AppButton from './app/Screen/AppButton';
import Welcome from './app/Screen/Welcome';




export default function App() {

return (
<Welcome />
// <View style={styles.container}>
// <ViewImageScreen>I Love Allah<AntDesign name="heart" size={24} color="red" />
// </ViewImageScreen>
// <AppButton title='Click me' onPress={() => console.log("Chal gaya")} /> 
// </View>
)
    }

