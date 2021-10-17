import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { FlatList, Text, View, StyleSheet, Pressable } from 'react-native';
import TitleAndBack from '../component/TitleAndBack';
import FilmWithKindItem from '../component/CarouselItem/FilmWithKindItem'
import data from '../data/dataFilm'

export default function FilmWithKind() {

    const uNavigation = useNavigation();

    const onBack = () => {
        uNavigation.goBack();
    }

    const onClick = () => {
        uNavigation.navigate('MovieDetail')
    }

    return (
        <View style={Styles.container}>
            <View style={Styles.titleandback}>
                <TitleAndBack 
                    onPress={onBack}
                    title={'Action Film'}
                    right={<Text></Text>}
                />
            </View>
            
            <View style={{flex: 1}}>
                <FlatList 
                    data={data}
                    renderItem={({item}) => (
                        <Pressable onPress={onClick}>
                            <FilmWithKindItem item={item}/>
                        </Pressable>)}
                    numColumns={2}
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
    },
    titleandback: {
        height: 70,
        width: '100%',
    }
})