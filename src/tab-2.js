import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Tab2 extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}> Tab 2 </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'orange'
  },
  text:{
      color: 'white',
      fontSize: 30,
  }
})

export default Tab2;
