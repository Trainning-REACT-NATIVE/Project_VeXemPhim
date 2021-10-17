import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { View, StyleSheet, Text, Dimensions, TouchableOpacity } from "react-native";
import TitleAndBack from "../component/TitleAndBack";
import Button from '../component/Button'

const { width } = Dimensions.get('screen');

export default function ChooseCombo() {

    const uNavigation = useNavigation();

    const [ishide, setishide] = useState(0);
    const [iscolor, setiscolor] = useState('black');
    const [isbgcolor, setisbgcolor] = useState('rgba(255,255,255,0.8)');

    const onHide = () => {
        setishide((ishide == 0) ? 100 : 0);
        setiscolor(iscolor == 'black' ? 'white' : 'black');
        setisbgcolor(isbgcolor == 'rgba(255,255,255,0.8)' ? '#0094FF' : 'rgba(255,255,255,0.8)')
    }

    const onBack = () => {
        uNavigation.goBack();
    }

    const onClick = () => {
        uNavigation.navigate('Tabs')
    }

    return (
        <View style={Styles.container}>
            <View style={Styles.titleandback}>
                <TitleAndBack
                    onPress={onBack}
                    title={''}
                    right={<Text></Text>}
                />
            </View>
            <Text style={Styles.texttt}>Only Ticket</Text>
            <TouchableOpacity style={[Styles.box, { backgroundColor: isbgcolor }]} onPress={onHide}>
                <Text style={[Styles.textbd, { color: iscolor }]}>Ticket x1</Text>
                <Text style={[Styles.textbd, { color: iscolor }]}>56.000 VNĐ</Text>
            </TouchableOpacity>
            <View style={{ height: ishide }}>
                <View style={Styles.box_row}>
                    <Text style={Styles.text}>Items</Text>
                    <Text style={Styles.text}>Total</Text>
                </View>
                <View style={Styles.box_row}>
                    <Text style={[Styles.text, { fontWeight: 'normal' }]}>Ticket</Text>
                    <Text style={[Styles.text, { paddingRight: 12 }]}>1</Text>
                </View>
            </View>
            <Text style={Styles.texttt}>Combo</Text>
            <TouchableOpacity style={[Styles.box, { backgroundColor: isbgcolor }]} onPress={onHide}>
                <Text style={[Styles.textbd, { color: iscolor }]}>Ticket x1</Text>
                <Text style={[Styles.textbd, { color: iscolor }]}>56.000 VNĐ</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[Styles.box, { backgroundColor: isbgcolor }]} onPress={onHide}>
                <Text style={[Styles.textbd, { color: iscolor }]}>Ticket x1</Text>
                <Text style={[Styles.textbd, { color: iscolor }]}>56.000 VNĐ</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[Styles.box, { backgroundColor: isbgcolor }]} onPress={onHide}>
                <Text style={[Styles.textbd, { color: iscolor }]}>Ticket x1</Text>
                <Text style={[Styles.textbd, { color: iscolor }]}>56.000 VNĐ</Text>
            </TouchableOpacity>
            <Text style={Styles.texttt}>Combo Group</Text>
            <TouchableOpacity style={[Styles.box, { backgroundColor: isbgcolor }]} onPress={onHide}>
                <Text style={[Styles.textbd, { color: iscolor }]}>Ticket x1</Text>
                <Text style={[Styles.textbd, { color: iscolor }]}>56.000 VNĐ</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[Styles.box, { backgroundColor: isbgcolor }]} onPress={onHide}>
                <Text style={[Styles.textbd, { color: iscolor }]}>Ticket x1</Text>
                <Text style={[Styles.textbd, { color: iscolor }]}>56.000 VNĐ</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[Styles.box, { backgroundColor: isbgcolor }]} onPress={onHide}>
                <Text style={[Styles.textbd, { color: iscolor }]}>Ticket x1</Text>
                <Text style={[Styles.textbd, { color: iscolor }]}>56.000 VNĐ</Text>
            </TouchableOpacity>
            <View style={Styles.button}>
                <Button
                    color={'#0094FF'}
                    width={'80%'}
                    colorText={'white'}
                    title={'56.000 VND'}
                    onPress={onClick}
                />
            </View>
        </View>
    )
}

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#171723'
    },
    titleandback: {
        width: '100%',
        height: 70,
    },
    texttt: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
        paddingLeft: 30,
    },
    textbd: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    box: {
        width: width - 40,
        height: 30,
        marginHorizontal: 20,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 12,
        marginVertical: 6,
    },
    box_row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 32,
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
    },
    button: {
        alignItems: 'center',
        height: '30%',
        justifyContent: 'center',
    },
})