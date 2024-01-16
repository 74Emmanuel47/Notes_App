import { Dimensions, Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { ScreenType } from '../constants/constants';

const HomeScreen = ({ onExit }) => {
  return (
    <View style={styles.container}>
        <Pressable onPress={() => onExit(ScreenType.addNote)}>
            <View style={styles.itemButton}>
                <Text style={styles.title}>Add New Note</Text>
                <Icon style={styles.icon} name="arrow-forward-outline"/>
            </View>
        </Pressable>
        
        <Pressable onPress={() => onExit(ScreenType.allNotes)}>
            <View style={styles.itemButton}>
                <Text style={styles.title}>View All Notes</Text>
                <Icon style={styles.icon} name="arrow-forward-outline"/>
            </View>
        </Pressable>
  </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: 40,
    },

    itemButton: {
        width: Dimensions.get("window").width - 100,
        height: "50%",
        marginVertical: 30,
        backgroundColor: "#f5f5f5",
        justifyContent: "center",
        alignItems: 'center',
        elevation: 10,
    },
    
    title: {
        fontSize: 35,
        fontWeight: 'bold',
        textAlign: 'center'
    },

    icon: {
        fontSize: 25,
        paddingTop: 20,
    }
})