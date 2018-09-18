import React, { Component } from 'react'
import { Text, View, StyleSheet, ScrollView} from 'react-native'

export class SideMenu extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
        <View style={styles.container}>
                <ScrollView>

                    <View style={styles.itemSectionNav}>
                        <Text style={styles.textItemSectionNav} onPress={ ()=> this.props.navigation.navigate('Stack') } > Stack</Text>
                    </View>

                    <View style={styles.itemSectionNav}>
                        <Text style={styles.textItemSectionNav} onPress={ ()=> this.props.navigation.navigate('Tabs') } > Tabs </Text>
                    </View>

                    <View style={styles.itemSectionNav}>
                        <Text style={styles.textItemSectionNav} onPress={ ()=> this.props.navigation.navigate('Settings') } > Settings</Text>
                    </View>
                </ScrollView>
                
                <View style={styles.footerContainer}>
                        <Text> Powered by Etn</Text>
                </View>
        </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
        flex: 1,
        backgroundColor: '#ccc'
    },
    itemSectionNav: {
        backgroundColor: '#ccc'
    },
    textItemSectionNav:{
        fontSize: 24,
    },
    footerContainer:{
        padding: 15,
        fontSize: 18,
    }
})

export default SideMenu;