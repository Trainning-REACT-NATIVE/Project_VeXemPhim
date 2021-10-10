import React from 'react'
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function Search() {

    const uNavigation = useNavigation();

    const onBack = () => {
        uNavigation.goBack();
    }

    return(
        <View style={Styles.container}>
            <View style={Styles.box}>
                <TextInput 
                    placeholder={'Search movie'}
                    placeholderTextColor={'rgba(255,255,255,0.8)'}
                    style={Styles.text}
                />
                <TouchableOpacity onPress={onBack}>
                    <FontAwesome name="close" size={24} color="rgba(255,255,255,0.8)" />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const Styles = StyleSheet.create({
    container: {
        backgroundColor: '#171723',
        flex: 1,
        alignItems: 'center',
    },
    box: {
        flexDirection: 'row',
        top: 24,
        width: '90%',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 50,
        borderBottomWidth: 1,
        borderColor: 'rgba(255,255,255,0.4)',
    },
    text: {
        paddingLeft: 12,
        color: 'rgba(255,255,255,0.8)',
    }
})