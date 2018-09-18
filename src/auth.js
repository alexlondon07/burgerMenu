import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export class Auth extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Button 
            title="Login"
            onPress={() =>{} }
        ></Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
  },
})

export default Auth;
