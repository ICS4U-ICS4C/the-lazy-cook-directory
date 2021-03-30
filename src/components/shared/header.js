import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {MaterialIcons} from '@expo/vector-icons'
import { StylesProvider } from '@material-ui/styles';
// Jasmine Header started mar30 --> dont touch, illl work on this

export default function Header(){
    return(
        <View style = {styles.header}>
            <View> 
                <Text style = {styles.headerText}> Home Page Heyo</Text>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        width = "100%",
        height = "100%",
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'

    },
    headerText:{
        letterSpacing: 1,
        fontSize: 24,
        fontWeight: 'bold',
        color: 'blacks'
    }
})