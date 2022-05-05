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
       
        color: "tomato",
        ...Platform.select({
            ios: {
                fontSize :20,
                fontFamily :  "Avenir",
               },
            android : {
                fontSize :30,
                fontFamily : "Roboto"
            }
        })
    }
})
export default ViewImageScreen;