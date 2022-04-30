import React from 'react';
import {ImageBackground , View , Image , Text , StyleSheet} from 'react-native'

function ViewImageScreen(props) {
    return (
<>
<Image style={styles.img} source={require('../assets/wallpaper.jpg')}/>

</>
    );
}
const styles = StyleSheet.create({
    img : {
        width: "100%",
        height:"100%",
        flex:1,

    }
})
export default ViewImageScreen;