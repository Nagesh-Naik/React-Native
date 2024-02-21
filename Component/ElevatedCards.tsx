import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ElevatedCards() {
  return (
    <View>
      <Text style={styles.headding}>ElevatedCards</Text>
      <ScrollView horizontal={true} style={styles.container}>
        <View style={[styles.card, styles.elivatedCard]}>
        <Text>Click Here</Text>
        </View>
        <View style={[styles.card, styles.elivatedCard]}>
        <Text>Click Here</Text>
        </View>
        <View style={[styles.card, styles.elivatedCard]}>
        <Text>Click Here</Text>
        </View>
        <View style={[styles.card, styles.elivatedCard]}>
        <Text>Click Here</Text>
        </View>
        <View style={[styles.card, styles.elivatedCard]}>
        <Text>Click Here</Text>
        </View>
        <View style={[styles.card, styles.elivatedCard]}>
        <Text>Click Here</Text>
        </View>
        <View style={[styles.card, styles.elivatedCard]}>
        <Text>Click Here</Text>
        </View>
        <View style={[styles.card, styles.elivatedCard]}>
        <Text>Click Here</Text>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    headding:{
        fontSize:20,
        fontWeight:'bold',
        color:'#fff',
        textAlign:'center',
    },
    container:{
        padding:8
     },
     card:{
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      height:100,
      width:100,
      borderRadius:6,
      margin:7
      
     },
     elivatedCard:{
        backgroundColor:'#5F9EA0'
     }
})