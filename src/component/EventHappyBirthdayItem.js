import React from 'react'
import { Image, Text, View, Dimensions } from 'react-native'

const {width,height} = Dimensions.get('screen');

const EventHappyBirthdayItem = ({item}) => {
    return (
        <View style = {{width: width - 40, marginHorizontal: 20, marginTop: 10, flex: 1}}>
             <Image source={require('../assets/happybirthday.jpg')} style = {{width: width - 40, flex: 0.9, borderRadius: 5}}/>
             <Text style = {{fontSize: 14, marginVertical: 3, color: 'white', width: width - 40, flex: 0.1}}>Happy Birthday {item.name}</Text>
        </View>
    )
}

export default EventHappyBirthdayItem;