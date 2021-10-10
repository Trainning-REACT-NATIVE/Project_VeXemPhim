import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ButtonIcon({onPress}) {
    return (
        <TouchableOpacity onPress={onPress}>
            <Ionicons name="eye" size={24} color="white" />
        </TouchableOpacity>
    )
}