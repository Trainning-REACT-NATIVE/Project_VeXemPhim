import React from "react";
import { FlatList, StyleSheet, TouchableOpacity, View } from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import data from '../data/dataTicketOn';
import CheckinTicketItem from "../component/CarouselItem/CheckinTicketItem";

export default function CheckinTicket() {

    const uNavigation = useNavigation();

    const onBack = () => {
        uNavigation.goBack();
    }

    return (
        <View style={Styles.container}>
            <FlatList
                data={data}
                renderItem={CheckinTicketItem}
                scrollEnabled={false}
                numColumns={1}
            />

            <TouchableOpacity
                onPress={onBack}
                style={{
                    position: 'absolute',
                    flex: 1,
                    top: 32,
                    right: 12,
                }}
            >
                <FontAwesome name="close" size={24} color="rgba(255,255,255,1)" />
            </TouchableOpacity>
        </View>
    )
}

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#171723'
    }
})