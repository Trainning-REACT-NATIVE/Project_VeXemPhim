import React from 'react'
import { Text, View, Dimensions, Image, TouchableOpacity } from 'react-native'

const { width } = Dimensions.get('screen');

const TicketItem = ({ item }) => {

    return (
        <TouchableOpacity style={{ width: width - 40, height: 120, backgroundColor: 'white', flexDirection: 'row', marginVertical: 5, alignItems: 'center', borderRadius: 5 }}>
            <View style={{ paddingLeft: 10, width: width / 5 }}>
                <Image source={item.image} style={{ height: 100, width: 60, borderRadius: 5 }} />
            </View>
            <View style = {{flexDirection: 'column', justifyContent: 'space-between', height: 90, paddingLeft: 10}}>
                <View style = {{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text style = {{fontSize: 16, fontWeight: 'bold'}}>{item.name}</Text>
                    <View style = {{ borderRadius: 5, backgroundColor: 'red', width: 100, height: 24, justifyContent: 'center', alignItems: 'center'}}>
                        <Text style = {{fontSize: 16, color: 'white', fontWeight: 'bold'}}>{item.status}</Text>
                    </View>
                </View>
                <Text style = {{color: '#C4C4C4', fontSize: 14}}>Cinema: {item.cinema}</Text>
                <Text style = {{color: '#C4C4C4', fontSize: 14}}>Premiere time: {item.h}:{item.m} - {item.dd}/{item.mm}/{item.yy}</Text>
                <Text style = {{fontSize: 16}}>Price: {item.price} VND</Text>
            </View>
        </TouchableOpacity>
    )
}

export default TicketItem;