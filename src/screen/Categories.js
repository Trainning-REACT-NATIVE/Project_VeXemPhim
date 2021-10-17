import React from 'react'
import { View, StyleSheet, Text, FlatList, StatusBar, Pressable } from 'react-native'
import date from '../data/dataCategories'
import CategoriesItem from '../component/CarouselItem/CategoriesItem'
import { useNavigation } from '@react-navigation/native'
import TitleAndBack from '../component/TitleAndBack'

export default function CategoriesScreen() {

    const uNavigation = useNavigation();

    const onBack = () => {
        uNavigation.goBack();
    }

    const onKindFilm = () => {
        uNavigation.navigate('FilmWithKind')
    }

    return (
        <View style={Styles.container} >
            <View style={Styles.titleandback}>
                <TitleAndBack
                    onPress={onBack}
                    title={'Movie Categories'}
                    right={<Text></Text>}
                />
            </View>

            <View style={{flex: 1, alignItems: 'center'}}>
                <FlatList
                    data={date}
                    renderItem={({item}) => (
                        <Pressable onPress={onKindFilm}>
                            <CategoriesItem item={item}/>
                        </Pressable>)}
                    keyExtractor={item => item.id}
                    numColumns={3}
                />
            </View>
        </View>
    )
}

const Styles = StyleSheet.create({
    container: {
        backgroundColor: '#171723',
        flex: 1,
    },
    titleandback: {
        height: 70,
        width: '100%',
    }
})