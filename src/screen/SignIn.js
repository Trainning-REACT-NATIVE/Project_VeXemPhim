import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react'
import { View, StyleSheet, KeyboardAvoidingView, StatusBar } from 'react-native'
import Logo from '../component/Logo'
import BoxTextInput from '../component/BoxTextInput';
import ButtonIcon from '../component/ButtonIcon';
import TextLink from '../component/TextLink';
import Button from '../component/Button';
import { ScrollView } from 'react-native-gesture-handler';

export default function SignIn() {

    const uNavigation = useNavigation();
    const [username, setusername] = useState('');
    const [password, setpassword] = useState('');
    const [hidepassword, sethidepassword] = useState(false);

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
        uNavigation.navigate('Tabs')
    };

    const onRegister = () => {
        uNavigation.navigate('Register')
    };

    const onForgotpassword = () => {
        uNavigation.navigate('Forgotpassword')
    }

    return (
        <KeyboardAvoidingView style={Styles.container} behavior='height'>
            <ScrollView>
                <StatusBar
                    translucent
                    backgroundColor={'transparent'}
                    barStyle={'light-content'}
                />

                <View style={{ justifyContent: 'center', alignItems: 'center', marginVertical: 50 }}>
                    <Logo 
                        name={' SPIDER '} 
                        FontSize={64}
                    />
                </View>

                <View style={{ width: '100%', alignItems: 'center', marginVertical: 20 }}>
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