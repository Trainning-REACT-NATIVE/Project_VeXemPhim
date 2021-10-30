import React from "react";
import { View, Image, StyleSheet } from "react-native";

export default function SplashScreen() {
    return (
        <View style={Styles.container}>
            <Image 
                source={require('../assets/splash.png')}
                style={Styles.image}    
            />
        </View>
    )
}

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#171723',
    },
    image: {
        width: 350,
        height: 200,
    }
})