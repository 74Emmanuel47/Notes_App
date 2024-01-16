import { Button, Platform, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ScreenType } from '../constants/constants'
import Icon from 'react-native-vector-icons/Ionicons';

const BackButton = (props) => {
  return (
    <View style={styles.container}>
      <Pressable onPress={() => props.onBack()}>
        <Icon style={styles.icon} name='arrow-back-outline'/>
      </Pressable>
    </View>
  )
}

export default BackButton

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        margin: 20,
        marginRight: 10,
    },

    icon: {
        color: Platform.OS == "android" ? "white" : "purple",
        fontSize: 25,
        paddingTop: 5,
    }
})