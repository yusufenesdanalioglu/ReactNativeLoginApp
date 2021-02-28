import React from 'react';
import {Text, Button, StyleSheet, View, TextInput} from 'react-native';

const Input = ({ text, inputPlaceHolder, onChangeText, value, secureTextEntry }) => {
  const {inputWrapper,textStyle,inputStyle} = styles;
    return(
      <View style={inputWrapper}>
        <Text style={textStyle}> {text} </Text>
        <TextInput style={inputStyle}
        placeholder={inputPlaceHolder}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        value = {value}
        />
      </View>
    )
}

const styles = StyleSheet.create({
  inputWrapper:{
    flexDirection:'row',
    height:50,
    width:'auto',
    borderColor:'#DBB2B2',
    borderBottomWidth:1,
    alignItems:'center'
  },
  textStyle:{
    paddingLeft:'10%',
    fontSize:17,
    width:'35%',
  },
  inputStyle:{
    fontSize:17,
    width:'55%',
    color:'black',
  }
});

export {Input};
