import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import TitleAndBack from "../component/TitleAndBack";
import { FontAwesome5 } from '@expo/vector-icons';
import Button from "../component/Button";

export default function ChooseSeats() {

    const uNavigation = useNavigation();

    const onBack = () => {
        uNavigation.goBack();
    }

    const onClick = () => {
        uNavigation.navigate('ChooseCombo');
    }

    return (
        <View style={Styles.container}>
            <View style={Styles.titleandback}>
                <TitleAndBack
                    onPress={onBack}
                    title={'Choose Seats'}
                    right={<Text></Text>}
                />
            </View>
            <View style={Styles.map}>

            </View>
            <View style={Styles.box}>
                <View style={Styles.cinema}>
                    <FontAwesome5 name="map-marker-alt" size={24} color="red" />
                    <Text> At Spider A Cinema, Thu Dau Mot, Binh Duong</Text>
                </View>
                <View style={Styles.boxbox}>
                    <View style={Styles.boxchooose}>
                        <Text style={Styles.texttt}>Date</Text>
                        <Text style={Styles.textbd}>20/08</Text>
                    </View>
                    <View style={Styles.boxchooose}>
                        <Text style={Styles.texttt}>Hour</Text>
                        <Text style={Styles.textbd}>20:30</Text>
                    </View>
                    <View style={Styles.boxchooose}>
                        <Text style={Styles.texttt}>Seats</Text>
                        <Text style={Styles.textbd}>8</Text>
                    </View>
                    <View style={Styles.boxchooose}>
                        <Text style={Styles.texttt}>Row</Text>
                        <Text style={Styles.textbd}>5</Text>
                    </View>
                </View>
                <View style={Styles.boxbox}>
                    <View>
                        <Text style={{ fontSize: 14, color: 'rgba(0,0,0,0.5)' }}>Price</Text>
                        <Text style={{ fontSize: 16, color: 'black', fontWeight: 'bold' }}>60.000 VND</Text>
                    </View>
                    <View style={Styles.boxright}>
                        <View style={{height: 50, paddingLeft: 8}}>
                            <Button
                                color={'#0094FF'}
                                width={160}
                                colorText={'white'}
                                title={'Choose Ticket'}
                                onPress={onClick}
                            />
                        </View>
                        <View style={Styles.point}></View>
                        <View style={Styles.pointright}></View>
                    </View>
                </View>
            </View>
        </View>
    )
}

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#171723'
    },
    titleandback: {
        width: '100%',
        height: 70,
    },
    map: {
        height: '60%'
    },
    box: {
        height: 250,
        backgroundColor: 'white',
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        alignItems: 'center',
    },
    cinema: {
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: 12,
    },
    boxchooose: {
        width: 60,
        height: 60,
        backgroundColor: '#171723',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    boxbox: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: '100%',
        marginTop: 18,
    },
    texttt: {
        fontSize: 12,
        color: 'white',
    },
    textbd: {
        fontSize: 14,
        color: 'white',
    },
    boxright: {
        width: '50%',
        justifyContent: 'center',
        height: 70,
    },
    point: {
        height: 16,
        width: 16,
        borderRadius: 8,
        backgroundColor: 'white',
        position: 'absolute',
    },
    pointright: {
        height: 16,
        width: 16,
        borderRadius: 8,
        backgroundColor: 'white',
        position: 'absolute',
        marginLeft: 160,
    }
})