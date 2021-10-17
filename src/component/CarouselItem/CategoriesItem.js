import React from 'react'
import { View, Image, StyleSheet, Text } from 'react-native'

const CgrHomeItem = ({item}) => {
    return (
        <View style={Styles.button}>
            <Image source={item.icon} style={Styles.icon}/>
            <Text style={{fontSize: 14, color: 'white'}}>{item.name}</Text>
        </View>
    )
}

const Styles = StyleSheet.create({
    button: {
        width: 70,
        height: 70,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#23232e',
        borderRadius: 5,
        marginHorizontal: 8,
        marginVertical: 8,
    },
    icon: {
        width: 40,
        height: 40,
        borderRadius: 20,
    }
})

export default CgrHomeItem;