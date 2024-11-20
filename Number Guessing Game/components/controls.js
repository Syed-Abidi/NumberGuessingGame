import React, { useState } from "react";
import {  Pressable, StyleSheet, Text, View } from "react-native";

const PlusMinus = ({ children, onPress }) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => pressed && style.pressedEffect} // Apply the pressed effect only on Pressable
    >
      <View style={style.controlwrapper}>
        <Text style={style.text}>{children}</Text>
      </View>
    </Pressable>
  );
};

const style = StyleSheet.create({
  controlwrapper: {
    color: "white",
    fontSize: 40,
    borderWidth: 4,
    borderColor: "yellow",
    padding: 5,
    backgroundColor: "lightgreen",
    alignItems:'center',
    padding:20,
    marginTop:60,
    width:'100%',
    borderRadius:20,
    
  },
  pressedEffect: {
    opacity: 0.7, // Change opacity when pressed
  },
})

export default PlusMinus;