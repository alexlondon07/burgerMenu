import React, { Component } from 'react'
import { Text, View, StyleSheet, ScrollView} from 'react-native'

export class SideMenu extends Component {
  render() {
    return (
      <View style={styles.container}>
            <ScrollView>

                <View style={styles.itemSectionNav}>
                    <Text style={styles.textItemSectionNav}> Stack</Text>
                </View>

                <View style={styles.itemSectionNav}>
                    <Text style={styles.textItemSectionNav}> Tabs </Text>
                </View>

                <View style={styles.itemSectionNav}>
                    <Text style={styles.textItemSectionNav}> Settings</Text>
                </View>

            </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red'
    },
    itemSectionNav: {
        backgroundColor: ''
    },
    textItemSectionNav:{

    }
})

export default SideMenu;