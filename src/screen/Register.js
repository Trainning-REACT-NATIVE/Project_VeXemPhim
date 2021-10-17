import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react'
import { View, StyleSheet, KeyboardAvoidingView, Text } from 'react-native'
import Logo from '../component/Logo'
import BoxTextInput from '../component/BoxTextInput';
import ButtonIcon from '../component/ButtonIcon';
import Button from '../component/Button';
import TitleAndBack from '../component/TitleAndBack';
import { ScrollView } from 'react-native-gesture-handler';

export default function SignIn() {

    const uNavigation = useNavigation();
    const [username, setusername] = useState('');
    const [password, setpassword] = useState('');
    const [repassword, setrepassword] = useState('');
    const [email, setemail] = useState('');
    const [phone, setphone] = useState('');
    const [address, setaddress] = useState('');
    const [hidepassword, sethidepassword] = useState(false);

    const onChangeusername = value => {
        setusername(value);
    };

    const onChangepassword = value => {
        setpassword(value);
    };

    const onChangerepassword = value => {
        setrepassword(value);
    };

    const onChangeemail = value => {
        setemail(value);
    };

    const onChangephone = value => {
        setphone(value);
    };

    const onChangeaddress = value => {
        setaddress(value);
    };

    const onhidepassword = () => {
        sethidepassword(hidepassword ? false : true);
    };

    const onTabs = () => {
        uNavigation.navigate('Tabs')
    };

    const onBack = () => {
        uNavigation.goBack();
    };

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

                <View style={{ justifyContent: 'center', marginTop: -16, marginBottom: 5, width: '100%', alignItems: 'center' }}>
                    <Logo
                        name={' SPIDER '}
                        FontSize={64}
                    />
                </View>

                <View style={{ width: '100%', alignItems: 'center', marginBottom: 20 }}>
                    <BoxTextInput
                        value={username}
                        placeholder={'username'}
                        onChangeText={onChangeusername}
                        width={'80%'}
                    />

                    <BoxTextInput
                        value={password}
                        placeholder={'password'}
                        onChangeText={onChangepassword}
                        secureTextEntry={hidepassword}
                        width={'80%'}
                        Right={<ButtonIcon onPress={onhidepassword} />}
                    />

                    <BoxTextInput
                        value={repassword}
                        placeholder={'re - password'}
                        onChangeText={onChangerepassword}
                        secureTextEntry={hidepassword}
                        width={'80%'}
                        Right={<ButtonIcon onPress={onhidepassword} />}
                    />

                    <BoxTextInput
                        value={email}
                        placeholder={'email'}
                        width={'80%'}
                        onChangeText={onChangeemail}
                    />

                    <BoxTextInput
                        value={phone}
                        placeholder={'phone'}
                        onChangeText={onChangephone}
                        width={'80%'}
                        keyboardType={'phone-pad'}
                    />

                    <BoxTextInput
                        value={address}
                        placeholder={'address'}
                        width={'80%'}
                        onChangeText={onChangeaddress}
                    />
                </View>

                <View style={{ width: '100%', alignItems: 'center', justifyContent: 'flex-start' }}>
                    <Button
                        title={'REGISTER'}
                        color={'#0094FF'}
                        width={'80%'}
                        colorText={'white'}
                        onPress={onTabs}
                    />
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