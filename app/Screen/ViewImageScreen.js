import React from 'react'
import { View , Image ,  Text , Platform , StyleSheet} from 'react-native'




import color from '../config/color'




function ViewImageScreen({children}) {
    return (
<>
<Text style={styles.sty2}>{children}</Text>

</>
    );
}
const styles = StyleSheet.create({
    sty2 : {
        fontSize:Platform.OS==="android" ? 60 : 20,
    }
})
export default ViewImageScreen;