import React, {Component} from 'react';
import {Text, Button, StyleSheet, View} from 'react-native';
import firebase from 'firebase';
import {Input} from './common/input';

class LoginForm extends Component{
  state = {
    email: '',
    password:'',
    error:''
  }

  onButtonClick(){
    this.setState({
      password:'',
      error:''
    });
    const {email, password} = this.state;
    firebase.auth().signInWithEmailAndPassword(email, password)
    .catch((e) => {
      firebase.auth().createUserWithEmailAndPassword(email, password)
        .catch((e)=>{
          this.setState({
            error:'Authantication Failed : ' + e
          })
        });
    });
  }

  render(){
    const {error} = this.state;
    const errorMsg =error ? (
      <Text style={styles.errorStyle}>
        {error}
      </Text>
    ):
    null;
    return(
      <View style={{marginTop:30}}>
        <View>
          <Input text="Email" inputPlaceHolder="Enter Email"
          onChangeText = {(text) =>{
            this.setState({
              email:text
            })
          }}
          value = {this.state.email}
          />
        </View>

        <View style={{marginBottom:20}}>
          <Input text="Password" inputPlaceHolder="Enter Password"
          onChangeText = {(text) =>{
            this.setState({
              password:text
            })
          }}
          secureTextEntry
          value = {this.state.password}
          />
        </View>
        {errorMsg}
        <View style={styles.buttonWrapper}>
          <Button onPress = {this.onButtonClick.bind(this)} color='#E3797C' title='Login' />
        </View>
     </View>
    )
  }
}

const styles = StyleSheet.create({
  buttonWrapper:{
    height:50,
    marginLeft:'5%',
    width:'90%',
    borderRadius:10,
    justifyContent:'center',
    fontSize:18,
    marginTop:10
  },
  errorStyle:{
    paddingLeft:'10%',
    paddingRight:'10%',
    fontSize:15,
    width:'100%',
    color:'#8C3939',
    fontFamily:'Arial-700italic',
  }
})

export default LoginForm;
