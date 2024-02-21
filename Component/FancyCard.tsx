import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
const img = require("../assets/image.jpeg");
export default function FancyCard() {
  return (
    <View>
      <Text style={styles.headding}>FancyCard</Text>
      <View style={styles.card}>
        <Image
          source={img}
          style={styles.image}
        />
        <Text style={styles.cardTitle}>Ram Mandir</Text>
        <Text style={styles.cardDescription}>Ram Janmabhoomi (lit. 'Birthplace of Rama') is the site that, according to Hindu religious beliefs, is the birthplace of Rama, the seventh avatar of the Hindu deity Vishnu. The Ramayana states that the location of Rama's birthplace is on the banks of the Sarayu river in a city called "Ayodhya". Modern-day Ayodhya is in the north Indian state of Uttar Pradesh. It is contested whether the Ayodhya mentioned in the Ramayana is the same as the modern city.</Text>
        <Text style={styles.cardFooter}>Visit now</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  headding: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFF',
    textAlign: 'center',

  },
  image: {
    height: 300,
    width: 400,
    margin: 5
  },
  card: {
   backgroundColor:'black',
   borderRadius:4
  },
  cardTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffff', 
    textTransform: 'uppercase',
    letterSpacing: 2,
    shadowColor: '#000',
    textAlign: 'center'
  },
  cardDescription: {
    color: '#F3E5AB',
    fontSize: 16,
    lineHeight: 20,
    padding:8
    
  },
  cardFooter: {
    color: '#ffff',
    backgroundColor: '#702963',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 6,
    textAlign: 'center',
    fontSize:17

  }
})