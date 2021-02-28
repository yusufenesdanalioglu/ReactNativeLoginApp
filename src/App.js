import React, {Component} from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';
import firebase from 'firebase';
import Banner from './components/banner'
import LoginForm from './components/loginForm'
import Spinner from './components/common/Spinner'

class App extends Component{
  state = {
    loggedIn:null,
  }

  componentDidMount(){
      firebase.initializeApp({
        apiKey: "AIzaSyC1cADEEn4dlOPAq7eeQVs_XO0_0rS9Z8w",
        authDomain: "authentication-9c427.firebaseapp.com",
        projectId: "authentication-9c427",
        storageBucket: "authentication-9c427.appspot.com",
        messagingSenderId: "641048891368",
        appId: "1:641048891368:web:b29e9743bd3d48a9e89e5d",
        measurementId: "G-0E2VK3CXZ0"
      });

      firebase.auth().onAuthStateChanged((user) => {
        const loggedIn = user ? true : false;
        this.state({
          loggedIn,
        })
      })
  }

  renderContent(){
    const {loggedIn} = this.state;
    switch (loggedIn) {
      case true:
        return (
          <Button
           onPress={() => firebase.auth().signOut()}
           title="Logout"
           color="#E3797C" />
        )
      case false:
        return (
          <LoginForm />
        )
      default:
        <Spinner />
    }
  }

  render(){
    return (
      <View style={styles.appContainer}>
        <Banner text="Sign In"  />
          {this.renderContent()}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  appContainer:{
    flex:1,
    backgroundColor:'#F0E5E5'
  }
});

export default App;
