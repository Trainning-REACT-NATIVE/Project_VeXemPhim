import React from 'react'
import { Image, Text, View, Dimensions } from 'react-native'

const { width, height } = Dimensions.get('screen');

const EventItem = ({ item }) => {
    return (
        <View style={{ width: width/2 - 20, height: width/2 - 20, alignItems: 'center'}}>
            <View style={{ width: width/2 - 30, height: width/2 - 20}}>
                <Image source={item.image} style={{borderRadius: 5, width: width/2 - 30, height: width/2 - 40 }} />
                <Text style={{ color: 'white', fontSize: 14 }}>{item.name}</Text>
            </View>
        </View>
    )
}

export default EventItem;