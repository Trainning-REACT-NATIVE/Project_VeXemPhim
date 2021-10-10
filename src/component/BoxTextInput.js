import React from "react";
import { TextInput, StyleSheet, View } from "react-native";

export default function BoxTextInput({ value, placeholder, onChangeText, secureTextEntry, Right, keyboardType, width }) {
    return (
        <View style={[{ width: width }, Styles.BoxTextInput]}>
            <TextInput
                value={value}
                placeholder={placeholder}
                onChangeText={onChangeText}
                placeholderTextColor={'#C4C4C4'}
                secureTextEntry={secureTextEntry}
                keyboardType={keyboardType}
                style={Styles.Text}
            />
            {Right}
        </View>
    );
}

const Styles = StyleSheet.create({
    BoxTextInput: {
        height: 50,
        borderBottomWidth: 1,
        borderColor: '#C4C4C4',
        paddingLeft: 12,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    Text: {
        color: 'white',
        width: '60%',
    }
})