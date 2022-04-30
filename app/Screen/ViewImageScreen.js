import React from 'react';
import {ImageBackground , View , Image , Text , StyleSheet} from 'react-native'

function ViewImageScreen(props) {
    return (
<>
<View style={styles.div}>  </View>
<View style={styles.container}>
<Image style={styles.img} source={require('../assets/wallpaper.jpg')}/>
</View>
</>
    );
}
const styles = StyleSheet.create({
    img : {
        resizeMode: "contain",
        width: "100%",
        height:"100%",

    },
    container : {
    backgroundColor: "pink",
    flex :1,
    
    },
div : {
width: 50,
height: 50,
backgroundColor: "#fc5c65",
}
})
export default ViewImageScreen;