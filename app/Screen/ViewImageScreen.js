import React from 'react';
import {ImageBackground , View , Image , Text , StyleSheet} from 'react-native'


import color from '../config/color'




function ViewImageScreen(props) {
    return (
<>

<View style={styles.container}>
<View style={styles.div}>  </View>
<View style={styles.div1}>  </View>

<Image style={styles.img} source={require('../assets/wallpaper.jpg')}/>
</View>
</>
    );
}
const styles = StyleSheet.create({
    div : {
height: 50,
width: 50,
position : 'absolute',
top : 40,
left: 30,
backgroundColor :color.primary,
    },
    div1: {
        height: 50,
        width: 50,
        position : 'absolute',
        top : 40,
        right: 30,
        backgroundColor : color.secondary,
            },
    img : {
        resizeMode: "contain",
        width: "100%",
        height:"100%",

    },
    container : {
    backgroundColor: color.white,
    flex :1,
    
    },

})
export default ViewImageScreen;