import React from "react";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import { Ionicons } from '@expo/vector-icons';

export default function TitleAndBack({ onPress, title, right }) {
    return (
        <View style={Styles.container}>
            <TouchableOpacity onPress={onPress} style={{ 
                    left: 30, 
                    height: 50, 
                    width: 50, 
                    justifyContent: 'center', 
                    alignItems: 'center', 
                    backgroundColor: 'rgba(255,255,255,0.3)',
                    borderRadius: 10,
                }}>
                <Ionicons name="chevron-back-outline" size={24} color="white" />
            </TouchableOpacity>
            <View style={{ width: '100%', alignItems: 'center', position: 'absolute', height: 70, justifyContent: 'center' }}>
                <Text style={{ color: "white", fontSize: 14, fontWeight: 'bold', backgroundColor: 'rgba(23,23,35,0.3)' }}>{title}</Text>
            </View>

            <View style={{ right: 30, position: 'absolute', width: '100%' }}>
                {right}
            </View>
        </View>
    )
}

const Styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        height: 70,
    }
})
