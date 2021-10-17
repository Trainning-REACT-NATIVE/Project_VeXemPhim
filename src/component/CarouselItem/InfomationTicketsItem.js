import React from "react";
import { View, Image, Text, StyleSheet, Dimensions, ImageBackground } from "react-native";
import { Entypo } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const { width, height } = Dimensions.get('screen');

export default InfomationTicketsItem = ({ item }) => {
    return (
        <View style={Styles.container}>
            <ImageBackground source={item.image} style={Styles.bg}>
            <LinearGradient
                colors={['rgba(23,23,35,0.5)','rgba(23,23,35,0.7)','rgba(23,23,35,1)']}
                style={Styles.bgg}
            >
                <Image style={Styles.image} source={item.image} />
                <Text style={Styles.name}>{item.name}</Text>
                <View style={Styles.info}>
                    <Text style={Styles.info_text}>{item.year}</Text>
                    <Entypo name="dot-single" size={24} color="white" />
                    <Text style={Styles.info_text}>{item.kind}</Text>
                    <Entypo name="dot-single" size={24} color="white" />
                    <Text style={Styles.info_text}>{item.time}</Text>
                </View>
                <View style={Styles.describe}>
                    <Text style={Styles.info_text}>Describe:  {item.describe}</Text>
                </View>
                </LinearGradient>
            </ImageBackground>
        </View>
    );
}

const Styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        width: width,
        height: height,
    },
    image: {
        marginTop: 24,
        width: 200,
        height: 300,
        borderRadius: 10,
        borderWidth: 0.2,
        borderColor: 'white',
    },
    name: {
        fontSize: 24,
        color: 'white',
        fontWeight: 'bold'
    },
    info: {
        flexDirection: 'row',
        width: width - 120,
        justifyContent: 'space-between'
    },
    info_text: {
        color: 'white',
        textAlign: 'justify'
    },
    describe: {
        paddingTop: 20,
        paddingHorizontal: 40
    },
    bg: {
        resizeMode: 'cover',
        justifyContent: 'center',
        alignItems: 'center',
        width: width,
        height: height,
        backgroundColor: 'transparent'
    },
    bgg: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
        width: width,
        height: height
    }
})