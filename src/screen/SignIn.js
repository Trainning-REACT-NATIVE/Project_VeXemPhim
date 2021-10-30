import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react'
import { View, StyleSheet, KeyboardAvoidingView, Text } from 'react-native'
import Logo from '../component/Logo'
import BoxTextInput from '../component/BoxTextInput';
import ButtonIcon from '../component/ButtonIcon';
import TextLink from '../component/TextLink';
import Button from '../component/Button';
import { ScrollView } from 'react-native-gesture-handler';
import { MaterialIcons } from '@expo/vector-icons';

function isVietnamesePhoneNumber(number) {
    return /(84|0[3|5|7|8|9])+([0-9]{8})\b/.test(number);
}

export default function SignIn() {

    const uNavigation = useNavigation();
    const [username, setusername] = useState('');
    const [password, setpassword] = useState('');
    const [hidepassword, sethidepassword] = useState(true);
    const [errorOne, seterrorOne] = useState(0);
    const [titleError, settitleError] = useState('');

    const dataUser = {
        usernameA: '0394173864',
        passwordA: '1234',
    }

    const onChangeusername = value => {
        setusername(value);
    };

    const onChangepassword = value => {
        setpassword(value);
    };

    const onhidepassword = () => {
        sethidepassword(hidepassword ? false : true);
    };

    const onTabs = () => {
        if (isVietnamesePhoneNumber(username)) {
            
            if(username == dataUser.usernameA && password == dataUser.passwordA){
                seterrorOne(0);
                uNavigation.navigate('Tabs');
            }
            else{
                seterrorOne(24);
                settitleError(' Your phone number or password is wrong')
            }
        }
        else{
            if(username != ''){
                seterrorOne(24);
                settitleError(' Your phone number is not correct')
            }
            else
                seterrorOne(0);
        }
        
    };

    const onRegister = () => {
        uNavigation.navigate('Register');
    };

    const onForgotpassword = () => {
        uNavigation.navigate('Forgotpassword')
    }

    return (
        <KeyboardAvoidingView style={Styles.container} behavior='height'>
            <ScrollView>
                <View style={{ justifyContent: 'center', alignItems: 'center', marginVertical: 50 }}>
                    <Logo
                        name={' SPIDER '}
                        FontSize={64}
                    />
                </View>

                <View style={{ width: '100%', alignItems: 'center', marginVertical: 20 }}>
                    <BoxTextInput
                        value={username}
                        placeholder={'Your Phone'}
                        onChangeText={onChangeusername}
                        width={'80%'}
                        keyboardType={"phone-pad"}
                    />

                    <View style={{height: errorOne, flexDirection: 'row', alignItems: 'center'}}>
                        <MaterialIcons name="error" size={errorOne} color="red" />
                        <Text style={{color: 'red', height: errorOne}}>{titleError}</Text>
                    </View>

                    <BoxTextInput
                        value={password}
                        placeholder={'Password'}
                        onChangeText={onChangepassword}
                        secureTextEntry={hidepassword}
                        width={'80%'}
                        Right={<ButtonIcon onPress={onhidepassword} />}
                    />

                    <TextLink
                        name={'forgot your password?'}
                        onPress={onForgotpassword}
                    />
                </View>

                <View style={{ width: '100%', alignItems: 'center', justifyContent: 'flex-start' }}>
                    <Button
                        title={'LOG IN'}
                        color={'#0094FF'}
                        width={'80%'}
                        colorText={'white'}
                        onPress={onTabs}
                    />

                    <Button
                        title={'REGISTER'}
                        color={'white'}
                        width={'80%'}
                        onPress={onRegister}
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
    }
})