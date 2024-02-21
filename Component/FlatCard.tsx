import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FlatCard() {
  return (
    <View>
      <Text style={styles.headding} >Cards</Text>
      <View style={styles.container}>
        <View style={[styles.card, styles.cardOne]}>
           <Text>Red</Text>
        </View>
        <View style={[styles.card, styles.cardTwo]}>
           <Text>Green</Text>
        </View>
        <View style={[styles.card, styles.cardThree]}>
           <Text>Blue</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headding:{
        fontSize:20,
        fontWeight:'bold',
        color:'#fff',
        textAlign:'center',
        marginTop:6
    },
    container:{
       flex:1,
       flexDirection:'row',
       padding:17
    },
    card:{
        height:110,
        width:110,
        borderRadius:5,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        margin:8
    },
    cardOne:{ 
        backgroundColor:'#EF5354'
    },
    cardTwo:{
        backgroundColor:'#50C878'
    },
    cardThree:{
        backgroundColor:'#40E0D0'
    }

})