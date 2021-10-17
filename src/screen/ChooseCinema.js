import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import Button from '../component/Button'
import { useNavigation } from "@react-navigation/native";
import TitleAndBack from '../component/TitleAndBack'

export default function ChooseCinema() {

    const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const uNavigation = useNavigation();

    const onBack = () => {
        uNavigation.goBack();
    }

    const onClick = () => {
        uNavigation.navigate('ChooseSeats')
    }

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
    };

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
    };

    const showTimepicker = () => {
        showMode('time');
    };

    return (
        <View style={Styles.container}>
            <ImageBackground
                source={require('../assets/bgchoosemovie.jpg')}
                style={Styles.imagebg}
            >
                <LinearGradient
                    colors={['rgba(23,23,35,0.5)', 'rgba(23,23,35,0.5)']}
                    style={Styles.linearbg}
                >
                </LinearGradient>
            </ImageBackground>
            <View style={Styles.box}>
                <View style={Styles.boxbox}>
                    <Text style={Styles.text}>
                        <MaterialCommunityIcons name="city-variant" size={30} color="black" />    City
                    </Text>
                    <Picker style={Styles.picker}>
                        <Picker.Item label="Binh Duong" value="binhduong" />
                        <Picker.Item label="Ho Chi Minh" value="hochiminh" />
                        <Picker.Item label="Ha Noi" value="hanoi" />
                    </Picker>
                </View>
                <View style={Styles.boxbox}>
                    <Text style={Styles.text}>
                        <FontAwesome5 name="map-marker-alt" size={30} color="black" />      Cinema
                    </Text>
                    <Picker style={Styles.picker}>
                        <Picker.Item label="Spider A" value="spidera" />
                        <Picker.Item label="Spider B" value="spiderb" />
                        <Picker.Item label="Spider C" value="spiderc" />
                    </Picker>
                </View>
                <View style={Styles.boxbox}>
                    <Text style={Styles.text}>
                        <Ionicons name="calendar" size={30} color="black" />    Data
                    </Text>
                    <View style={Styles.pickerdatatime}>
                        <Button
                            title={'Choose date'}
                            color={'black'}
                            width={130}
                            colorText={'white'}
                            onPress={showDatepicker}
                        />
                    </View>
                </View>
                <View style={Styles.boxbox}>
                    <Text style={Styles.text}>
                        <MaterialCommunityIcons name="clock" size={30} color="black" />    Hour
                    </Text>
                    <View style={Styles.pickerdatatime}>
                        <Button
                            title={'Choose hour'}
                            color={'black'}
                            width={130}
                            colorText={'white'}
                            onPress={showTimepicker}
                        />
                    </View>
                </View>
                {show && (
                    <DateTimePicker
                        testID="dateTimePicker"
                        value={date}
                        mode={mode}
                        is24Hour={true}
                        display="default"
                        onChange={onChange}
                    />
                )}
                <Button
                    onPress={onClick}
                    title={'NEXT'}
                    color={'#0094FF'}
                    width={'80%'}
                    colorText={'white'}
                />
            </View>
            <View style={Styles.titleandback}>
                <TitleAndBack
                    onPress={onBack}
                    title={''}
                    right={<Text></Text>}
                />
            </View>
        </View>
    )
}

const Styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    imagebg: {
        flex: 0.4,
        width: '100%',
    },
    linearbg: {
        flex: 0.75,
        width: '100%',
    },
    box: {
        flex: 0.7,
        width: '100%',
        backgroundColor: 'white',
        marginTop: '-20%',
        borderTopRightRadius: 50,
        borderTopLeftRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    boxbox: {
        flexDirection: 'row',
        width: '95%',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '80%',
        marginVertical: 10,
    },
    text: {
        fontSize: 14,
    },
    picker: {
        width: 160,
        height: 40,
    },
    pickerdatatime: {
        marginRight: 24,
    },
    titleandback: {
        position: 'absolute',
    }
})