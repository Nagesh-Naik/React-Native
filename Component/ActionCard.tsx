import { Linking, StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
const img1 = require("../assets/rotti.jpeg")

export default function ActionCard() {
  function openWebsite(websiteLink: string) {
    Linking.openURL(websiteLink)
  }
  return (
    <ScrollView>
    <View>
      <Text style={styles.headingText}>Blogging Section</Text>
      <View style={[styles.card, styles.elevatedCard]}>
        <View style={styles.headingContainer}>
          <Text style={styles.headerText}>

           Nagarjun Naik
          </Text>
        </View>
        <Image
          source={img1}
          style={styles.imageStyle}
        />
        <View style={styles.bodyContainer}>
          <Text style={styles.bodyContainerText} numberOfLines={3}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat eius illum molestiae laboriosam accusantium eveniet perspiciatis dolore nam, cupiditate obcaecati?
          </Text>
        </View>
        <View style={styles.footerContainer}>
          <TouchableOpacity style={styles.button}
            onPress={() => openWebsite('https://www.youtube.com/')}>
            <Text style={ styles.buttonText}>Read More</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}
            onPress={() => openWebsite('https://www.youtube.com/')}>
            <Text style={ styles.buttonText}> Follow Me</Text>
          </TouchableOpacity>
        </View>
        
      </View>
      
    </View>
    
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  headingText: {
    backgroundColor:'#000',
    fontSize:24,
    color:'#fff',
    fontWeight:'bold',
    textAlign:'center',
    padding:5,
    marginTop:3
  },
  card: {
    backgroundColor:'#E2DFD2',
    height:310,
    width:380,
    marginHorizontal:15,
    marginVertical:12,
    borderRadius:5
    
  },
  elevatedCard: {},
  headingContainer: {},
  headerText: {
    color: '#000',
    margin:10,
    padding:3,
    fontSize:17,
    fontWeight:'900',
    borderBottomWidth:1,
  },
  imageStyle: {
    height: 100,
    width: 100,
    borderRadius: 50,
    marginLeft:10,
   
  },
  bodyContainer: {
    height:100,
    padding:10
  },
  bodyContainerText: {
    color: '#000',
    fontSize:17,
    fontWeight:'600'
  },
  footerContainer: {
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-around'
    
  },
  button: {
    padding:3,
    backgroundColor: '#702963',
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
})