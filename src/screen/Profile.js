import React from 'react'
import { Image, View, Dimensions, StyleSheet, Text } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const {width} = Dimensions.get('screen');

export default function Profile() {
    return (
        <View style = {Styles.container} >
            <View style ={{paddingLeft: 24,flex: 1}}>
                <View style = {{paddingLeft: 10, flexDirection: 'row', alignItems: 'center', flex: 0.3}} >
                    <Image source={require('../assets/avatar.png')} style = {Styles.image} />
                    <View style = {{paddingLeft: 20, flexDirection: 'column'}} >
                        <Text style ={{fontSize: 18, fontWeight:'bold', color: 'white', paddingBottom: 5}}>Richard Tom</Text>
                        <Text style ={{fontSize: 14, color: '#0094FF'}}>Binh Duong, Viet Nam</Text>
                    </View>
                </View>
                <View style ={{flex: 0.5, justifyContent: 'space-evenly'}}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Ionicons name="mail-open-sharp" size={30} color="#0094FF"/>
                        <Text style = {{color: 'white', paddingLeft: 20}}>RichardTom@gmail.com</Text>
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <FontAwesome name="phone" size={30} color="#0094FF" />
                        <Text style = {{color: 'white', paddingLeft: 20}}> (+84) 39 444 3877</Text>
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <MaterialIcons name="settings" size={30} color="#0094FF" />
                        <Text style = {{color: 'white', paddingLeft: 20}}>Language</Text>
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <MaterialCommunityIcons name="gift" size={30} color="#0094FF" />
                        <Text style = {{color: 'white', paddingLeft: 20}}>Member points</Text>
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <FontAwesome name="sign-out" size={30} color="#0094FF" />
                        <Text style = {{color: 'white', paddingLeft: 20}}> Sign out</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

const Styles = StyleSheet.create({
    container: {
        backgroundColor: '#171723',
        flex: 1,
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: '#0094FF'
    }
})