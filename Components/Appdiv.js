import React from 'react';
import { Text , StyleSheet , Platform , View } from 'react-native';
function Appdiv({children}) {
    return (
        <View style={styles.beech1}> {children} </View>
    );
}
const styles = StyleSheet.create({
  deev1 : {
      width: 200,
      height: 200,
      backgroundColor : 'blue',
      //fontSize:18,
     // fontFamily : Platform.OS === 'android' ? " Roboto" : "Avenir"   
  }  
})
export default Appdiv;