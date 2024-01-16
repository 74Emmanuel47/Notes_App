import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ListTile from '../components/ListTile'

const AllNotesScreen = ({notes}) => {

    const renderItem = (itemData) => {
        return <ListTile note={itemData.item.note} />;
    }

  return (
    <View style={styles.container}>
      <FlatList data={notes} renderItem={renderItem}/>
    </View>
  )
}

export default AllNotesScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
        
    }
})