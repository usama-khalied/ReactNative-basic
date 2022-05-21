import React from 'react';
import {StyleSheet , View , Text , TouchableOpacity} from 'react-native'

import color from '../config/color'; 

function AppButton({title}) {
    return (
        <TouchableOpacity style={styles.button}>
        <View>
        <Text style={styles.text}>{title}</Text>
        </View>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    button:{
        backgroundColor:color.primary,
        borderRadius:25,
        justifyContent:'center',
        alignItems:'center',
        padding:15,
        width:'100%'
    },
    text:{
        color:color.white,
        fontSize:18,
        fontWeight:'bold'
    }
  })
export default AppButton;










