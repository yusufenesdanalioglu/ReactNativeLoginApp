import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

class Banner extends Component{
  render(){
    return(
      <View style={styles.bannerContainer}>
        <Text style={styles.textContainer}> {this.props.text} </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  bannerContainer:{
      width:'auto',
      height: 200,
      backgroundColor:'#E3797C',
      justifyContent:'center',
      alignItems:'center'
  },
  textContainer:{
      fontSize:34,
      color:'#fff'
  }
});

export default Banner;
