import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  StatusBar,
  StyleSheet,
  ScrollView
} from "react-native"
import FlatCard from "./Component/FlatCard";
import ElevatedCards from "./Component/ElevatedCards";
import FancyCard from "./Component/FancyCard";
import ActionCard from "./Component/ActionCard";

function App(){
  return(

  <SafeAreaView style={styles.main}>
     <StatusBar  />
     <ScrollView>
      <FlatCard/>
      <ElevatedCards/>
      <FancyCard/> 
      <ActionCard/>
      </ScrollView>
  </SafeAreaView>
  )
}

const styles=StyleSheet.create({
  main:{
    backgroundColor:'black',
    
  }
})

export default App