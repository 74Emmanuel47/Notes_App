import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ListTile = ({note}) => {
  return (
    <View style={styles.listItem}>
      <Text style={styles.noteText}>{note}</Text>
    </View>
  )
}

export default ListTile

const styles = StyleSheet.create({
    listItem: {
        borderWidth: 4,
        borderColor: "purple",
        borderRadius: 5, 
        padding: 10,
        backgroundColor: "#fff000",
        marginTop: 10
    },

    noteText: {
        fontSize: 20,
        fontWeight: "400",

    }
})