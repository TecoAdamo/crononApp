import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const uri = 'https://i.pinimg.com/originals/4e/7c/95/4e7c95e9a2aa43301836e72f3874be02.jpg'

class App extends Component {

  constructor(props){
    super(props)
    this.state =  {
      numero: 0,
      botao: 'Startar',
      ultimo: null
    }
    this.timer = null

    this.startar = this.startar.bind(this)
    this.limpar = this.limpar.bind(this)
  }

  startar(){
    if (this.timer != null) {
      clearInterval(this.timer)
      this.timer = null;
      this.setState({botao: 'Startar'})
    } else {
      this.timer = setInterval( () => {
        this.setState({numero: this.state.numero + 0.1 }) 
      }, 100)
      this.setState({botao: 'Parar'})
      
    }
  }

  limpar(){
    if(this.timer != null){
      clearInterval(this.timer)
      this.timer = null
    }
    this.setState({
      ultimo: this.state.numero,
      numero: 0,
      botao: 'Startar'
    })
  }
  
 render(){
  return (
    <View style={styles.container}> 
      <Image source={{uri}}  style={[styles.img, StyleSheet.absoluteFill]}/>

      <View style={styles.textTit}>
      <Text style={styles.titulo}>C R O N Ô M E T R O</Text>
      </View>

      <View style={styles.card}>
       <Text style={styles.textPrinc}>{this.state.numero.toFixed(1)}</Text>
      </View>

      <View style={styles.buttons}>
      <TouchableOpacity style={styles.btnStart} onPress={this.startar}>
        <Text style={styles.textStartar}>{this.state.botao}</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btnLimpar} onPress={this.limpar}>
        <Text style={styles.textLimpar}>Limpar</Text>
      </TouchableOpacity>

      </View>

      <View style={styles.areaUltimo}>
        <Text style={styles.textCorrida}>
          {this.state.ultimo > 0 ? 'Último tempo : ' + this.state.ultimo.toFixed(2) + 's' : ''}
          </Text>
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
  img: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  textTit:{
    position: 'absolute',
    top: 150,
  },
  titulo:{
    fontSize: 25,
    color: 'white',
    fontWeight: 'bold',
  },
  textPrinc:{
    fontSize: 30,
    fontWeight: '600',
    color: 'white'
  },
  card: {
    width: 300,
    height: 120,
    marginBottom: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(13, 17, 23, 0.9)',
    borderRadius: 50,
    borderWidth: 1,
    borderColor: 'grey'
  },
  buttons: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    paddingHorizontal: 20, 
    marginTop: 20, 
    gap: 80
  },

  btnStart: {
    backgroundColor: 'rgba(13, 17, 23, 0.9)',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5, 
    fontWeight: 'bold',
    borderWidth: 1,
    borderColor: 'grey'
  },
  btnLimpar: {
    backgroundColor: 'rgba(13, 17, 23, 0.9)',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'grey'
  },
  textStartar:{
    fontWeight: 'bold',
    fontSize: 18,
    color: '#767982',
  },
  textLimpar:{
    fontWeight: 'bold',
    fontSize: 18,
    color: '#767982',
  },
  areaUltimo:{
    marginTop: 40,
  },
  textCorrida:{
    fontSize: 25,
    fontStyle: 'italic',
    color: 'white',
  }

})

export default App;