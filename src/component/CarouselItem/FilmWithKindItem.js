import React from 'react';
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const {width} = Dimensions.get('screen');

export default function FilmWithKindItem({item}) {
    return (
        <View style={Styles.container}>
            <Image 
                source={item.image}
                style={Styles.image}
            />
            <View style={Styles.boxstar}>
                <FontAwesome name="star" size={14} color="black" />
                <Text style={Styles.text}> {item.star}</Text>
            </View>
            <View style={Styles.boxname}>
            <Text style={Styles.text}> {item.name}</Text>
            </View>
        </View>
    )
}

const Styles = StyleSheet.create({
    container: {
        width: width/2,
        height: 250,
        marginBottom: 20,
    },
    image: {
        width: width/2 - 20,
        height: '100%',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'white',
        left: 10,
    },
    boxstar: {
        backgroundColor: '#FFD600',
        height: 30,
        width: 50,
        position: 'absolute',
        left: 6,
        bottom: 40,
        borderRightWidth: 4,
        borderTopWidth: 2,
        borderColor: '#FF8A00',
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    boxname: {
        backgroundColor: '#FFD600',
        height: 30,
        width: width/2 - 65,
        position: 'absolute',
        right: 4,
        bottom: 25,
        borderRightWidth: 4,
        borderTopWidth: 2,
        borderColor: '#FF8A00',
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 12,
        fontWeight: 'bold',
        textTransform: 'uppercase',
    }
})