import React from "react";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";

export default function TextLink({ onPress, name }) {
    return (
        <View style={Styles.Container}>
            <TouchableOpacity onPress={onPress}>
                <Text style={Styles.Text}>{name}</Text>
            </TouchableOpacity>
        </View>
    )
}

const Styles = StyleSheet.create({
    Text: {
        fontSize: 14,
        color: 'white',
        fontStyle: 'italic',
        width: '50%'
    },
    Container: {
        alignItems: 'flex-end',
        width: '80%',
    }
})