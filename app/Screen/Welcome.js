import React from 'react';

import {ImageBackground , View , Image , Text , StyleSheet} from 'react-native'
import AppButton from './AppButton';
function Welcome() {
    return (
<ImageBackground style={styles.background} source={require('../assets/tomas-malik-MJ9px5L-opg-unsplash.jpg')}>
    <View style={styles.design1}>
    <Image style={styles.design} source={require('../assets/download.jpg')} />
    <Text style={{color:'white'}}> Logo </Text>
    </View>
     <View style={styles.loginbutton}> Login </View>
     <AppButton title="Login" />

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
design : {
width:100,
height:100,
},
design1 : {
position:'absolute',
top:90
},
// loginbutton : {
//     width : "100%",
//     height : 40,
//     backgroundColor:'blue',
//     borderRadius:50,
//     display:'flex',
//     justifyContent:'center',
//     alignItems:'center',
//     color : 'white'
// },    
registerbutton : {
    width : "100%",
    height : 40,
    backgroundColor:'pink',
    borderRadius:50,
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    color:'white'
}    
})
export default Welcome;