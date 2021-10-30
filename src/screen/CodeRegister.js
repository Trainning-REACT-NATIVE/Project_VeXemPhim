import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import BoxTextInput from "../component/BoxTextInput";
import Button from "../component/Button";
import TitleAndBack from "../component/TitleAndBack";
import { MaterialIcons } from '@expo/vector-icons';

export default function CodeRegister() {

    const [code, setCode] = useState('');
    const [checkCode, setcheckCode] = useState(0);
    const uNavigation = useNavigation();

    const dataCode = { code: '999999' }

    const onChageCode = (value) => {
        setCode(value);
    }

    const onTabs = () => {
        if (code == dataCode.code) {
            setcheckCode(0);
            uNavigation.navigate('Tabs');
        }
        else
            setcheckCode(20);
    }

    const onBack = () => {
        uNavigation.goBack();
    }

    return (
        <View style={Styles.container}>
            <TitleAndBack
                onPress={onBack}
            />
            <Text style={Styles.title}>Check your phone number!</Text>
            <Text style={Styles.textnode}>Please fill your phone number below. We will send 6 digit number to your email.</Text>
            <View style={Styles.box}>
                <BoxTextInput
                    value={code}
                    onChangeText={onChageCode}
                    placeholder={'******'}
                    width={'80%'}
                />
            </View>

            <View style={{ height: checkCode, flexDirection: 'row', alignItems: 'center', paddingLeft: 30 }}>
                <MaterialIcons name="error" size={checkCode} color="red" />
                <Text style={{ color: 'red', height: checkCode }}> Please check your digits</Text>
            </View>

            <View style={Styles.button}>
                <Button
                    title={'Next'}
                    colorText={'white'}
                    color={'#0094FF'}
                    width={'40%'}
                    onPress={onTabs}
                />
            </View>

        </View>
    )
}

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#171723',
    },
    title: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        paddingTop: 24,
        paddingLeft: 20,
    },
    box: {
        alignItems: 'center',
    },
    textnode: {
        fontSize: 14,
        color: 'white',
        paddingHorizontal: 20,
        paddingVertical: 12,
    },
    button: {
        alignItems: 'flex-end',
        paddingRight: 20,
        paddingTop: 12,
    }
})