import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';

export default class Header extends Component{

static propTypes = {
	title : PropTypes.string.isRequired,
	sub_title :  PropTypes.string.isRequired,
	msg :  PropTypes.string.isRequired
}

render() {
    return (
      <View style={styles.container_card}>
      	<View style={styles.container_titles_card}>
        	
        	<Text style={styles.title_card}>{this.props.title}</Text>
        	<Text style={styles.sub_title_card}> {this.props.sub_title}</Text>
        	
        	<View style={styles.separetor_card} />
        	
        	<Text  style={styles.text_card}  > {this.props.msg}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container_card: {
  	backgroundColor: '#fff',
    marginTop:10,
    marginLeft:20,
    marginRight:20,
    borderRadius:10
  },
  container_titles_card:{
	color: '#333',
	padding:20,

  },
  title_card:{
	fontWeight: 'bold',
  	fontSize:20
  },
  sub_title_card:{
  	color: '#999',
  	marginTop:3
  },
  separetor_card:{
  	marginTop:15,
  	marginBottom:15,
  	borderBottomWidth:1,
  	borderColor: '#EEE',
  	height:1
  },
  
  text_card:{
  	color: '#666',
  }

});
