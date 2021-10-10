import React from 'react'
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity, FlatList, Pressable } from 'react-native'
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import dataI from '../data/dataFilm'
import SliderItem from '../component/SliderItem'
import dateII from '../data/dataCategories'
import CategoriesItem from '../component/CategoriesItem'
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('screen');

export default function Home() {
  
    const uNavigation = useNavigation();

    const onCategories = () => {
        uNavigation.navigate('Categories')
    };

    const onClick = () => {
        uNavigation.navigate('MovieDetail')
    }

    const onSearch = () => {
        uNavigation.navigate('Search')
    }

    const onKindFilm = () => {
        uNavigation.navigate('FilmWithKind')
    }

    return (
        <View style={Styles.container}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', flex: 0.17, alignItems: 'center', width: width }}>
                <View style={{ flexDirection: 'column'}}>
                    <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>Hello Tom  <Entypo name="hand" size={24} color="yellow" /></Text>
                    <Text style={{ color: 'white', fontSize: 14 }}>Book your favorite movie</Text>
                </View>
                <Image source={require('../assets/avatar.jpg')} style={Styles.Avatar} />
            </View>

            <View style={{ flex: 0.1, justifyContent: 'center' }}>
                <TouchableOpacity style={[Styles.buttonsearch, { width: width / 4 * 3 }]} onPress={onSearch}>
                    <FontAwesome name="search" size={24} color="#C4C4C4" />
                    <Text style={{ color: '#C4C4C4', paddingLeft: 10 }}>Search movie</Text>
                </TouchableOpacity>
            </View>

            <View style={{ flexDirection: 'row', flex: 0.08, justifyContent: 'space-around', alignItems: 'center', width: width }}>
                <Text style={{ color: 'white' }}>Movie categories</Text>
                <TouchableOpacity onPress = {onCategories}>
                    <Text style={{ color: 'blue' }}>show more</Text>
                </TouchableOpacity>
            </View>

            <View style={{flex: 0.15, width: width/3*2 + 20}}>
                <FlatList
                    data={dateII}
                    renderItem={({item}) => (
                        <Pressable onPress={onKindFilm}>
                            <CategoriesItem item={item}/>
                        </Pressable>)}
                    keyExtractor={item => item.id}
                    horizontal
                    pagingEnabled
                    showsHorizontalScrollIndicator = {false}
                />
            </View>

            <View style={{justifyContent: 'center', alignItems: 'center', flex: 0.5}}>
                <FlatList 
                    data = {dataI}
                    renderItem = {({item}) => (
                        <Pressable
                            onPress={onClick}
                        >
                            <SliderItem item={item} />
                        </Pressable>
                    )}
                    keyExtractor = {item => item.id}
                    horizontal
                    pagingEnabled
                />
            </View>

        </View>
    )
}

const Styles = StyleSheet.create({
    container: {
        backgroundColor: '#171723',
        flex: 1,
        alignItems: 'center',
        paddingTop: 24,
    },
    Avatar: {
        width: 70,
        height: 70,
        borderRadius: 35,
    },
    buttonsearch: {
        borderColor: '#C4C4C4',
        borderWidth: 1,
        height: 50,
        borderRadius: 30,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 10,
    }
})