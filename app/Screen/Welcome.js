import React from 'react';

import {ImageBackground , View , Image , StyleSheet} from 'react-native'
function Welcome(props) {
    return (
<ImageBackground style={styles.background} source={require('../assets/tomas-malik-MJ9px5L-opg-unsplash.jpg')}>
    <Image source={}
    <View style={styles.loginbutton}> Login </View>
    <View style={styles.registerbutton}> Login </View>
       </ImageBackground>

    );
}
const styles = StyleSheet.create({
background : {
    flex : 1,
    justifyContent:'flex-end',
    alignItems:'center',
},
loginbutton : {
    width : "100%",
    height : 70,
    backgroundColor:'blue',
    borderRadius:50,
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    color : 'white'
},    
registerbutton : {
    width : "100%",
    height : 70,
    backgroundColor:'pink',
    borderRadius:50,
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    color:'white'
}    
})
export default Welcome;