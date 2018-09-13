import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class ProductsDetail extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}> Detalle  Producto </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'purple'
  },
  text:{
      color: 'white',
      fontSize: 30,
  }
})

export default ProductsDetail;
