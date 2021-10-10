import React from 'react'
import { StyleSheet, ScrollView, FlatList, SafeAreaView } from 'react-native'
import dataI from '../data/dataTicketOn'
import dataII from '../data/dataTicketOff'
import TicketItem from '../component/CarouselItem/TicketItem'

export default function Ticket() {
    return (
        <SafeAreaView style={Styles.container}>
            <FlatList
                ListHeaderComponent={() => {
                    return (
                        <FlatList
                            data={dataI}
                            renderItem={TicketItem}
                            keyExtractor={item => item.id}
                            showsVerticalScrollIndicator={false}
                        />
                    )
                }}
                ListFooterComponent={() => {
                    return (
                        <FlatList
                            data={dataII}
                            renderItem={TicketItem}
                            keyExtractor={item => item.id}
                            showsVerticalScrollIndicator={false}
                        />
                    )
                }}
            />

        </SafeAreaView>

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
