import React from 'react'
import { StyleSheet, FlatList, SafeAreaView, Pressable } from 'react-native'
import dataI from '../data/dataTicketOn'
import dataII from '../data/dataTicketOff'
import TicketItem from '../component/CarouselItem/TicketItem'
import { useNavigation } from '@react-navigation/native'

export default function Ticket() {

    const uNavigation = useNavigation();

    const onClick = () => {
        uNavigation.navigate('CheckinTicket');
    }

    return (
        <SafeAreaView style={Styles.container}>
            <FlatList
                ListHeaderComponent={() => {
                    return (
                        <FlatList
                            data={dataI}
                            renderItem={({ item }) => (
                                <Pressable onPress={onClick}>
                                    <TicketItem
                                        item={item}
                                        colorss={'#2F5D62'}
                                        boxwidth={80}
                                    />
                                </Pressable>
                            )}
                            keyExtractor={item => item.id}
                            showsVerticalScrollIndicator={false}
                        />
                    )
                }}
                ListFooterComponent={() => {
                    return (
                        <FlatList
                            data={dataII}
                            renderItem={({ item }) => (
                                <TicketItem
                                    item={item}
                                    colorss={'#865454'}
                                    boxwidth={80}
                                />)}
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
        paddingTop: 32,
    }
})
