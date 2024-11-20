import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
export default function GameOver({roundsNumber, onStartNewGame}){

  return(
    <View>
    <Text style = {style.title}>Game Over</Text>
    <Text style = {style.dialogue}>It took the computer {roundsNumber} tries to guess the number!</Text>
    <TouchableOpacity style={style.newgamebutton} onPress={onStartNewGame}>New Game</TouchableOpacity>
    </View>
  
  )
}

const style = StyleSheet.create({
  title:{
    color: "white",
    fontSize: 40,
    borderWidth: 4,
    borderColor: "yellow",
    padding: 5,
    backgroundColor: "lightgreen",
    margin:40,
    marginTop:60,
    textAlign:'center'
  },

  dialogue:{
    color:'yellow',
    textAlign:'center',
    fontSize:25,
    padding:10
  },
  newgamebutton:{
   color: "white",
    fontSize: 30,
    borderWidth: 4,
    borderColor: "yellow",
    padding: 5,
    backgroundColor: "lightgreen",
    alignItems:'center',
    padding:10,
    marginTop:20,
    width:'50%',
    borderRadius:20,
    alignSelf:'center'
  }
})