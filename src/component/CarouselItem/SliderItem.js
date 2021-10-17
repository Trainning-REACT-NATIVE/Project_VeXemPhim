import React from 'react'
import { View, Image, Dimensions, StyleSheet } from 'react-native'

const { width } = Dimensions.get('screen');

export default function SliderItem({ item }) {
    return (
        <View style={{ marginHorizontal: width / 4 - 5 }}>
            <Image source={item.image} style={Styles.image} />
        </View>
    )
}

const Styles = StyleSheet.create({
    image: {
        width: width / 2 + 10,
        height: 300,
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 5,
    }
})
