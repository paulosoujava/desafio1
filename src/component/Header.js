import React, { Component } from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import PropTypes from 'prop-types';

export default class Card extends Component{

static propTypes = {
	title_header : PropTypes.string.isRequired
}

render() {
    return (
      <View style={styles.container_header}>
      	
        	<Text style={styles.title_header}>{this.props.title_header}</Text>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container_header: {
    backgroundColor: '#fff',
    height:65,
    justifyContent:'center',
	alignItems:"center",
  },
  title_header:{
	fontWeight: 'bold',

	marginTop:25,
  	fontSize:20
  },

});
