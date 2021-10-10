import React from "react";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import { Ionicons } from '@expo/vector-icons';

export default function TitleAndBack({ onPress, title, right }) {
    return (
        <View style={Styles.container}>
            <TouchableOpacity onPress={onPress}>
                <Ionicons name="chevron-back-outline" size={24} color="#0094FF" />
            </TouchableOpacity>
            <Text style={{ color: "#0094FF", fontSize: 14, fontWeight: 'bold', backgroundColor: 'rgba(23,23,35,0.3)', paddingVertical: 2 }}>{title}</Text>
            {right}
        </View>
    )
}

const Styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '80%',
        marginHorizontal: '10%',
        marginTop: 30,
    }
})
