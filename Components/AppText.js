import React from 'react';
import { Text , StyleSheet , Platform } from 'react-native';
function AppText({children}) {
    return (
        <Text style={styles.beech}> {children} </Text>
    );
}
const styles = StyleSheet.create({
  beech : {
      fontSize:18,
      fontFamily : Platform.OS === 'android' ? " Roboto" : "Avenir"   }  
})
export default AppText;