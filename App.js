import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

class App extends Component {

  // constructor(props){
  //   super(props)
  //   this.state = 
  // }

  // startarBtn(){
  //   if (this.startarBtn != null) {
      
  //   }
  // }

 render(){
  return (
    <View style={styles.container}>

      <View style={styles.textTit}>
      <Text style={styles.titulo}>C R O N Ô M E T R O</Text>
      </View>

      <View style={styles.card}>
       <Text style={styles.textPrinc}>00  :  00  :  00</Text>
      </View>

      <View style={styles.buttons}>
      <TouchableOpacity style={styles.btnStart}>
        <Text style={styles.textStartar}>Startar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btnLimpar}>
        <Text style={styles.textLimpar}>Limpar</Text>
      </TouchableOpacity>
      </View>
      

    </View>
   );
 }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'grey',
  },
  card: {
    width: 300,
    height: 120,
    marginBottom: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: `#00ffff`,
    borderRadius: 50,
  },
  textTit:{
    position: 'absolute',
    top: 150,
  },
  titulo:{
    fontSize: 25,
    color: 'black',
    fontWeight: 'bold',
  },
  textPrinc:{
    fontSize: 30,
    fontWeight: '600',
  },
  buttons: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    paddingHorizontal: 20, 
    marginTop: 20, 
    gap: 80
  },

  btnStart: {
    backgroundColor: `#00ffff`,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5, 
    fontWeight: 'bold',
  },
  btnLimpar: {
    backgroundColor: `#00ffff`,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  textStartar:{
    fontWeight: 'bold',
    fontSize: 18,
    color: 'grey',
  },
  textLimpar:{
    fontWeight: 'bold',
    fontSize: 18,
    color: 'grey',
  },
})

export default App;