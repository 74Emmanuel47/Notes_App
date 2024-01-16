import { Platform, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BackButton from './BackButton'
import { ScreenType } from '../constants/constants'

const Header = (props) => {

    let back;
    
    if(props.sType !== ScreenType.home){
        back = (
            <View > 
                <BackButton onBack={props.onButtonClick}/> 
            </View>
        );
    }

  return (
    <View style={styles.headerContainer}>
        {back}

        <View>
            <Text style={styles.headerTile}>Your Sticky Notes</Text>
        </View>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    headerContainer: {
        width: "100%",
        height : "13%",
        backgroundColor: Platform.OS == "android" ? "purple" : "white",
        paddingTop: 30,
        display: 'flex',
        flexDirection: "row"
    },

    headerTile: {
        color: Platform.OS == "android" ? "white" : "purple",
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 10,
        padding: 10,
    }

});