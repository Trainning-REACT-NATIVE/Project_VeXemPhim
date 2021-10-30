import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react'
import { View, StyleSheet, KeyboardAvoidingView, Text } from 'react-native'
import Logo from '../component/Logo'
import BoxTextInput from '../component/BoxTextInput';
import ButtonIcon from '../component/ButtonIcon';
import Button from '../component/Button';
import TitleAndBack from '../component/TitleAndBack';
import { ScrollView } from 'react-native-gesture-handler';
import { MaterialIcons } from '@expo/vector-icons';

function isVietnamesePhoneNumber(number) {
    return /(84|0[3|5|7|8|9])+([0-9]{8})\b/.test(number);
}

export default function SignIn() {

    const uNavigation = useNavigation();
    const [username, setusername] = useState('');
    const [password, setpassword] = useState('');
    const [repassword, setrepassword] = useState('');
    const [hidepassword, sethidepassword] = useState(true);
    const [checkPhone, setcheckPhone] = useState(0);
    const [checkPass, setcheckPass] = useState(0);
    const [checkRePass, setcheckRePass] = useState(0);

    const onChangeusername = value => {
        setusername(value);
    };

    const onChangepassword = value => {
        setpassword(value);
    };

    const onChangerepassword = value => {
        setrepassword(value);
    };

    const onhidepassword = () => {
        sethidepassword(hidepassword ? false : true);
    };

    const onCode = () => {
        if (isVietnamesePhoneNumber(username) && password.length > 7 && password == repassword) {
            setcheckPhone(0);
            setcheckPass(0);
            setrepassword(0);
            uNavigation.navigate('CodeRegister');
        }
        if (username != '') {
            if (!isVietnamesePhoneNumber(username)) {
                setcheckPhone(20);
            }
        }
        else
            setcheckPhone(0);

        if (password != '') {
            if (password.length < 8) {
                setcheckPass(20);
            }
        }
        else
            setcheckPass(0);

        if(repassword != ''){
            if (password != repassword) {
                setcheckRePass(20);
            }
            else{
                setcheckRePass(0);
            }
        }
        else
            setcheckRePass(0);
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
                        placeholder={'Your Phone'}
                        onChangeText={onChangeusername}
                        width={'80%'}
                        keyboardType={'phone-pad'}
                    />

                    <View style={{ height: checkPhone, flexDirection: 'row', alignItems: 'center' }}>
                        <MaterialIcons name="error" size={checkPhone} color="red" />
                        <Text style={{ color: 'red', height: checkPhone }}> Please check your phone</Text>
                    </View>

                    <BoxTextInput
                        value={password}
                        placeholder={'Password'}
                        onChangeText={onChangepassword}
                        secureTextEntry={hidepassword}
                        width={'80%'}
                        Right={<ButtonIcon onPress={onhidepassword} />}
                    />

                    <View style={{ height: checkPass, flexDirection: 'row', alignItems: 'center' }}>
                        <MaterialIcons name="error" size={checkPass} color="red" />
                        <Text style={{ color: 'red', height: checkPass }}> Your password needs at least 8 characters</Text>
                    </View>

                    <BoxTextInput
                        value={repassword}
                        placeholder={'Re - Password'}
                        onChangeText={onChangerepassword}
                        secureTextEntry={hidepassword}
                        width={'80%'}
                        Right={<ButtonIcon onPress={onhidepassword} />}
                    />

                    <View style={{ height: checkRePass, flexDirection: 'row', alignItems: 'center' }}>
                        <MaterialIcons name="error" size={checkRePass} color="red" />
                        <Text style={{ color: 'red', height: checkRePass }}> Please check your re - password</Text>
                    </View>
                </View>

                <View style={{ width: '100%', alignItems: 'center', justifyContent: 'flex-start' }}>
                    <Button
                        title={'REGISTER'}
                        color={'#0094FF'}
                        width={'80%'}
                        colorText={'white'}
                        onPress={onCode}
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