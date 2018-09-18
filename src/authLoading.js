import React, { Component } from 'react';
import { View,  ActivityIndicator,StyleSheet } from 'react-native';

class AuthLoading extends Component {
  constructor(props) {
    super(props);
    this.validateToken();
  }
  
  validateToken = () =>{
    setTimeout ( ()=>{
      this.props.navigation.navigate('App');
    },2000);
  }

  render() {
    return (
      <View style={styles.container}>
          <ActivityIndicator
            size="large"
            color="#0000ff"
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10
  }
})

export default AuthLoading;
