import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Dimensions, ImageBackground, StyleSheet, Text, View } from "react-native";
import SvgQRCode from 'react-native-qrcode-svg';

const { width, height } = Dimensions.get('screen');

export default function CheckinTicketItem({ item }) {
    return (
        <ImageBackground
            source={item.image}
            style={Styles.bgimage}
        >
            <LinearGradient
                colors={['rgba(23,23,35,0.8)', 'rgba(23,23,35,0.8)']}
                style={Styles.bglinear}
            >
                <Text style={[Styles.text, { fontWeight: 'bold', marginBottom: 30 }]}>Please scan the QR code at the ticket counter</Text>
                <SvgQRCode 
                    value={item.id}
                    size={200}
                />
                <Text style={[Styles.text, { fontWeight: 'bold', marginVertical: 30 }]}>{item.name}</Text>
                <Text style={Styles.text}>{item.cinema}</Text>
                <Text style={Styles.text}>{item.dd}/{item.mm}/{item.yy}</Text>
                <Text style={Styles.text}>{item.h}:{item.m}</Text>
                <View style={Styles.box}>
                    <Text style={Styles.text}>Row: {item.row}</Text>
                    <Text style={Styles.text}>Seats: {item.seats}</Text>
                </View>
            </LinearGradient>
        </ImageBackground>
    )
}

const Styles = StyleSheet.create({
    bgimage: {
        height: height,
        width: width,
        resizeMode: 'cover',
    },
    bglinear: {
        height: height,
        width: width,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: 'white',
        fontSize: 16,
    },
    box: {
        marginTop: 30,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: width,
    }
})