import React from "react";
import { View, StyleSheet, FlatList, Text } from "react-native";
import data from "../data/dataFilm";
import InfomationTicketsItem from "../component/CarouselItem/InfomationTicketsItem";
import Button from '../component/Button'
import TitleAndBack from '../component/TitleAndBack'
import { useNavigation } from "@react-navigation/native";

export default function MovieDetail() {

    const uNavigation = useNavigation();

    const onBack = () => {
        uNavigation.goBack();
    }

    const onClick = () => {
        uNavigation.navigate('ChooseCinema');
    }

    return (
        <View style={Styles.container}>
            <FlatList
                data={data}
                renderItem={InfomationTicketsItem}
                horizontal
                scrollEnabled={false}
                numColumns={1}
            />

            <View style={[Styles.no_body, { justifyContent: 'flex-start', top: 6 }]}>
                <TitleAndBack
                    onPress={onBack}
                    title={'Movie Detail'}
                    right={<Text></Text>}
                />
            </View>

            <View style={[Styles.no_body, { justifyContent: 'flex-end', bottom: 24 }]}>
                <Button title={"Buy Ticket"} color={"#0094FF"} width={200} colorText={"white"} onPress={onClick}/>
            </View>
        </View>
    )
}

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#171723',
    },
    no_body: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        alignItems: 'center',
        flex: 1,
    }
})