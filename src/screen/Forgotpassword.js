import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react'
import { View, StyleSheet, KeyboardAvoidingView, Text } from 'react-native'
import Logo from '../component/Logo'
import BoxTextInput from '../component/BoxTextInput';
import TitleAndBack from '../component/TitleAndBack';
import Button from '../component/Button';
import { ScrollView } from 'react-native-gesture-handler';

export default function SignIn() {

    const uNavigation = useNavigation();
    const [email, setemail] = useState('');
    const [code, setcode] = useState('');

    const onChangeemail = value => {
        setemail(value);
    };

    const onChangecode = value => {
        setcode(value);
    };

    const onTabs = () => {
        uNavigation.navigate('Tabs')
    };

    const onBack = () => {
        uNavigation.goBack();
    }

    return (
        <KeyboardAvoidingView style={Styles.container} behavior='height'>
            <ScrollView>
                <View style={Styles.titleandback}>
                    <TitleAndBack
                        onPress={onBack}
                        title={''}
                        right={<Text></Text>}
                    />
                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: -16, marginBottom: 5, width: '100%' }}>
                    <Logo
                        name={' SPIDER '}
                        FontSize={64}
                    />
                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Logo
                        name={' RESET PASSWORD '}
                        FontSize={16}
                    />
                </View>

                <View style={{ width: '100%', alignItems: 'center', marginVertical: 20 }}>
                    <BoxTextInput
                        value={email}
                        placeholder={'email'}
                        onChangeText={onChangeemail}
                        width={'80%'}
                    />

                    <Button
                        title={'Send mail'}
                        color={'#0094FF'}
                        width={'80%'}
                        colorText={'white'}
                    />

                    <View style={{ flexDirection: 'row', width: '80%', justifyContent: 'space-between' }}>
                        <BoxTextInput
                            value={code}
                            placeholder={'code'}
                            onChangeText={onChangecode}
                            width={'45%'}
                        />

                        <Button
                            title={'Submit'}
                            color={'#0094FF'}
                            width={'45%'}
                            colorText={'white'}
                            onPress={onTabs}
                        />
                    </View>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#171723',
    },
    titleandback: {
        height: 70,
        width: '100%',
    }
})