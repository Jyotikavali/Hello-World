import React, {useState} from "react";
import {Text,View,StyleSheet,TouchableOpacity, Pressable} from "react-native";

const App=()=>{
const[randomColor,setRandomColor]=useState("rgb(32,0,126)");

const changeBG=()=>{
let color="rgb("+
Math.floor(Math.random()*256)+
","+
Math.floor(Math.random()*256)+
","+
Math.floor(Math.random()*256)+
")";
setRandomColor(color);
};

const color1=()=>{
  let reset="black";
  setRandomColor(reset);
}
return(
<View style={[styles.container,{backgroundColor:randomColor}]}>
  <TouchableOpacity onPress={changeBG}>
<Text style={styles.text}>Tap Me</Text>
</TouchableOpacity>
<Pressable onPress={color1}>
<Text style={styles.text1}>Reset</Text>
</Pressable>
</View>
)
}
export default App;

const styles=StyleSheet.create({
  container:{
    alignItems: 'center',
    justifyContent:"center",
  
    flex: 1
  },
  text:{
    fontSize:30,
    color:"#ffffff",
    backgroundColor:"red",
    paddingHorizontal:20,
    paddingVertical:10,
    borderRadius:20,
    textTransform:"uppercase"
  }, 
  text1:{
    fontSize:30,
    marginTop:20,
    color:"#ffffff",
    backgroundColor:"blue",
    paddingHorizontal:20,
    paddingVertical:10,
    borderRadius:20,
    textTransform:"uppercase"
}
}
  
)