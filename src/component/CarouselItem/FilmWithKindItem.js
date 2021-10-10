import React from 'react';
import { View, Text, StyleSheet, Dimensions, ImageBackground } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const {width,height} = Dimensions.get('screen');

export default function FilmWithKindItem({item}) {
    return (
        <View style={Styles.container}>
            <ImageBackground source={item.image} style={Styles.image}>
                <View style={{justifyContent: 'space-between', height: '100%'}}>
                    <Text style={Styles.star}><FontAwesome name="star" size={20} color="yellow" /> {item.star}</Text>
                    <Text style={Styles.name}>{item.name}</Text>
                </View>
            </ImageBackground>
        </View>
    )
}

const Styles = StyleSheet.create({
    container: {
        width: width/2,
        height: height/2 - 24,
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 6,
    },
    image: {
        left: '2.5%',
        width: '95%',
        height: '95%',
    },
    star: {
        top: 6,
        left: 6,
        backgroundColor: 'rgba(0,0,0,0.8)',
        width: 50,
        height: 22,
        borderRadius: 5,
        color: 'yellow',
        fontSize: 14,
    },
    name: {
        color: 'white',
        bottom: -12,
        left: 6,
        fontSize: 18,
        fontWeight: 'bold',
    }
})