import React from "react";
import { View, FlatList } from "react-native";

export default function Carousel({dataA, renderItemA, horizontalA, numColumnsA, scrollEnabledA}) {
    return (
        <View>
            <FlatList
                data={dataA}
                renderItem={renderItemA}
                keyExtractor={item => item.id}
                horizontal={horizontalA}
                scrollEnabled={scrollEnabledA}
                numColumns={numColumnsA}
            />
        </View>
    )
}