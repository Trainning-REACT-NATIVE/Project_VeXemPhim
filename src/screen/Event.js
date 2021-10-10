import React from 'react'
import { View, StyleSheet, Dimensions, FlatList } from 'react-native'
import dataI from '../data/dateEvent'
import EventItem from '../component/EventItem'
import dataII from '../data/dataBirthday'
import EventHappyBirthdayItem from '../component/EventHappyBirthdayItem'

const { width } = Dimensions.get('screen');

export default function Event() {
    return (
        <View style={Styles.container}>
            <View style={{ flex: 0.4}}>
                <FlatList 
                    data = {dataII}
                    renderItem = {EventHappyBirthdayItem}
                    keyExtractor = {item => item.id}
                    scrollEnabled = {false}
                    horizontal
                />
            </View>

            <View style={{ flex: 0.6, alignItems: 'center', justifyContent: 'center' }}>
                <FlatList 
                    data = {dataI}
                    renderItem = {EventItem}
                    keyExtractor = {item => item.id}
                    numColumns = {2}
                />
            </View>

        </View>
    )
}

const Styles = StyleSheet.create({
    container: {
        backgroundColor: '#171723',
        flex: 1,
        alignItems: 'center',
        paddingTop: 24,
    }
})