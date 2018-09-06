import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {
    constructor(props){
        super(props);
        this.state = {n: 0, botaoText: 'Vai'}
        this.timer = null;

        this.vai = this.vai.bind(this);
        this.limpar = this.limpar.bind(this)
    }

    // METODOS DOS BOTÕES
    vai(){
      let s = this.state;

      if(this.timer != null){
        s.botaoText = 'Vai';
        clearInterval(this.timer);
        this.timer = null;
      }else{
        this.timer = setInterval( () => {
          s.n += 0.1;
          this.setState(s);
        }, 100);
        s.botaoText = 'Parar'
      }
    }
    limpar(){
      if(this.timer != null){
        clearInterval(this.timer);
        this.timer = null;
      }
      let s = this.state;
      s.n = 0;
      s.botaoText = 'Vai';
      this.setState(s);
    }


  render() {
    return (
      <View style={styles.container}>
            <Image source={require('../images/relogio.png')}/>
            <Text style={styles.timer}>{this.state.n.toFixed(1)}</Text>
            <View style={styles.botoes}>
                <TouchableOpacity style={styles.botao} onPress={this.vai}>
                    <Text style={styles.botaoText}>{this.state.botaoText}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.botao} onPress={this.limpar}>
                    <Text style={styles.botaoText}>Limpar</Text>
                </TouchableOpacity>
            </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c1f30',
  },
  timer: {
    color: '#baa07a',
    fontSize: 60,
    fontWeight: 'bold',
    backgroundColor: 'transparent',
    marginTop: -145,
  },
  botoes:{
      flexDirection: "row",
      height: 40,
      marginTop: 80
  },
  botao:{
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#886532',
    height: 40,
    borderRadius: 5,
    margin: 10,
    alignItems : 'center'
  },
  botaoText:{
      fontSize: 17,
      fontWeight: 'bold',
      color: 'white'
  }
  });
