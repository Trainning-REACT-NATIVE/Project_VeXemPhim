import { LinearGradient } from 'expo-linear-gradient';
import React from 'react'
import { Text, View, Dimensions, Image, StyleSheet } from 'react-native'

const { width } = Dimensions.get('screen');

const TicketItem = ({ item, colorss, boxwidth }) => {
    return (
        <View style={Styles.container}>
            <LinearGradient
                colors={['rgba(23,23,35,0)', 'rgba(23,23,35,0)']}
                style={{ width: '100%', height: '100%', position: 'absolute', left: 0, right: 0, top: 0, flexDirection: 'row' }}
            >
                <Image
                    source={item.image}
                    style={{
                        height: 110,
                        width: 75,
                        marginVertical: 5,
                        marginLeft: 5,
                        borderRadius: 10
                    }}
                />
                <View style={Styles.box}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{item.name}</Text>
                        <View style={[Styles.status, { width: boxwidth, backgroundColor: colorss }]}>
                            <Text style={[Styles.text, { color: 'white' }]}>{item.status}</Text>
                        </View>
                    </View>
                    <View>
                        <Text style={[Styles.text, { color: 'rgba(0,0,0,0.5)' }]}>Cinema: {item.cinema}</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={[Styles.text, { color: 'rgba(0,0,0,0.5)' }]}>Date&Time: </Text>
                            <Text style={[Styles.text, { color: 'rgba(0,0,0,0.5)' }]}>{item.dd}/{item.mm}/{item.yy} - {item.h}:{item.m}</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={Styles.text}>Price: </Text>
                        <Text style={{
                            color: 'black',
                            fontSize: 14,
                            fontWeight: 'bold'
                        }}>{item.price}</Text>
                        <Text style={Styles.text}> VNĐ</Text>
                    </View>
                </View>
            </LinearGradient>
        </View>
    )
}

const Styles = StyleSheet.create({
    container: {
        height: 120,
        width: width - 40,
        backgroundColor: 'rgba(255,255,255,1)',
        marginVertical: 7.5,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    box: {
        width: width - 115,
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        paddingLeft: 12,
    },
    text: {
        fontSize: 12,
        color: 'black'
    },
    status: {
        height: 20,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
    }
})

export default TicketItem;