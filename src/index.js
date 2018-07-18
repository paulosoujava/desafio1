import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView, Button} from 'react-native';
import Card from './component/Card';
import Header from './component/Header';
import './config/ReactotronConfig';
import './config/DevToolsConfig';

console.tron.log("Hello Reactotron");
export default class App extends Component {
  state = {
    list: [
      {
        id:1,
        title:"Aprendendo React native",
        sub_title:"Paulo Oliveira", 
        msg: 'Mussum Ipsum, cacilds vidis litro abertis. Não sou faixa preta cumpadi, sou preto inteiris, inteiris. Per aumento de cachacis, eu reclamis. Atirei o pau no gatis, per gatis num morreus. Diuretics paradis num copo é motivis de denguis.' ,
      },
      {
        id:2,
        title:"Aprendendo React native",
        sub_title:"Paulo Oliveira", 
        msg: 'Mussum Ipsum, cacilds vidis litro abertis. Não sou faixa preta cumpadi, sou preto inteiris, inteiris. Per aumento de cachacis, eu reclamis. Atirei o pau no gatis, per gatis num morreus. Diuretics paradis num copo é motivis de denguis.' 
      },
    ],
}
 
 plusOne = () =>{
  let aux = Math.floor(Math.random() * (90 - 1)) + 1;
  this.setState({
    list: [ ...this.state.list, {
       id: aux,
        title:"Title Aux "+aux,
        sub_title:"Author aux "+aux, 
        msg: 'Mussum Ipsum, cacilds vidis litro abertis. Não sou faixa preta cumpadi, sou preto inteiris, inteiris. Per aumento de cachacis, eu reclamis. Atirei o pau no gatis, per gatis num morreus. Diuretics paradis num copo é motivis de denguis.' 
      
    }]
  });
 } 
  render() {
    return (
      <View style={styles.container_root}>
        <Header title_header="GoNative App" />    
         
         <Button 
            title="+ 1"
             size={35}
            color='white'
            onPress={this.plusOne} style={styles.btn} />

        <ScrollView>
         
          {this.state.list.map( card =>(
             <Card key={card.id}
                   title= {card.title}
                   sub_title= {card.sub_title} 
                   msg={card.msg}  /> 
          ))
         }
        </ScrollView>
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container_root: {
    flex:1,
    backgroundColor: '#EE7777',

  }
});
