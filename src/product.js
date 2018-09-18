import React, { Component } from 'react';
import { View, Text, StyleSheet, Button , AsyncStorage} from 'react-native';

class Products extends Component {
  constructor(props) {
    super(props);
  }

  closeSession = async () =>{
    await AsyncStorage.clear();
    this.props.navigation.navigate('Auth')
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}> Lista de Productos </Text>
          <Button
            onPress={ () => { this.props.navigation.navigate('ProductsDetail')}}
            title="Detalle"
            color='white'/>
          <Button
            onPress={ () => this.props.navigation.openDrawer() } 
            title="Open Menu"
            color='white'/>
          <Button
            onPress={ this.closeSession } 
            title="Close session"
            color='white'/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'green'
  },
  text:{
      color: 'white',
      fontSize: 30,
  }
})

export default Products;
