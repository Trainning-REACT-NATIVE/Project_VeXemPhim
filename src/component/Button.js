import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";

export default function Button({ title, color, width, colorText, onPress }) {
    return (
        <TouchableOpacity onPress={onPress} style={[Styles.Button, { width: width, backgroundColor: color }]}>
            <Text style={[Styles.Text, { color: colorText }]}>{title}</Text>
        </TouchableOpacity>
    );
}

const Styles = StyleSheet.create({
    Button: {
        height: 50,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
    },
    Text: {
        fontSize: 18,
        fontWeight: 'bold'
    }
})