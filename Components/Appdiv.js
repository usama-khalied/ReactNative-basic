import React from 'react';
import { Text , StyleSheet  , View , Platform } from 'react-native';
function Appdiv({children}) {
    return (
<Text style={{fontSize:20,color:'red'}}> {children} </Text>
    );
}
const styles = StyleSheet.create({


})
export default Appdiv;