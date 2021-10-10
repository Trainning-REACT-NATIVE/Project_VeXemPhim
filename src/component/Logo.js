import React from "react";
import { Text, StyleSheet } from "react-native";

export default function Logo({ name, FontSize }) {
    return (
        <Text style={[{ fontSize: FontSize }, Styles.logo]}>{name}</Text>
    );
}

const Styles = StyleSheet.create({
    logo: {
        fontFamily: 'monospace',
        fontWeight: 'bold',
        color: '#0094FF',
        fontStyle: 'italic',
    },
})