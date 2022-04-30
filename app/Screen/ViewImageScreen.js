import React from 'react';
import {ImageBackground , View , Image , Text , StyleSheet} from 'react-native'

function ViewImageScreen(props) {
    return (
<>

<View style={styles.container}>
<View style={styles.div}>  </View>
<Image style={styles.img} source={require('../assets/wallpaper.jpg')}/>
</View>
</>
    );
}
const styles = StyleSheet.create({
    div : {

    },
    img : {
        resizeMode: "contain",
        width: "100%",
        height:"100%",

    },
    container : {
    backgroundColor: "pink",
    flex :1,
    
    },

})
export default ViewImageScreen;