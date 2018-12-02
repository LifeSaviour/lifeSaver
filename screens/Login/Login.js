import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, Alert, Hyperlink} from 'react-native';

import firebase from '../../Firebase/Firebase';

const auth = firebase.auth();
const db = firebase.database();

export default class Login extends React.Component {
    constructor()
  {
    super();
    this.state={

    }
    this.next = this.next.bind(this);
  }

  signup()
  {
    this.props.navigation.navigate('Signup');
  }

  next()
  {
      const { emailRef, passRef } = this.state;
      auth.signInWithEmailAndPassword(emailRef, passRef).then(()=>{
        this.props.navigation.navigate('Dashboard');
      })
      .catch(() =>{
          Alert.alert('Email or Pass is incorrect!');
      }) 
  }



  render() {
    return (
      <View style={styles.container}>
        <Text style={{color: '#fff'}}>Login </Text>
        
        <TextInput 
        placeholder="Email" 
        style={{height: 40, width: 250, borderColor: 'gray', borderWidth: 1, border: 1}}
        onChangeText={(e) => this.setState({emailRef: e})} />
        
        <TextInput 
        placeholder="Password" 
        style={{height: 40, width: 250, borderColor: 'gray', borderWidth: 1, border: 1}}
        onChangeText={(e) => this.setState({passRef: e})} />
        
        <Button
        title="Go to Dashboard"
        onPress={this.next}
        />

        <Button
        title="Sign up"
        onPress={this.signup.bind(this)}
        />
        {/* <Hyperlink linkText = "SignUp" /> */}
      </View>


    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4CAF50',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
