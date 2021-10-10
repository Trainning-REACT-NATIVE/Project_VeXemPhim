import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../screen/Home'
import Event from '../screen/Event'
import Profile from '../screen/Profile'
import Ticket from '../screen/Ticket'
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const Tabs = createBottomTabNavigator();

const MyTabs = () => {
    return (
        <Tabs.Navigator screenOptions={{ headerShown: false }} tabBarOptions={{ showLabel: false, tabStyle: { backgroundColor: '#23232e', marginTop: -5 }, activeTintColor: '#fff' }} initialRouteName='Home'>
            <Tabs.Screen name='Home' component={Home} options={{
                tabBarIcon: ({ focused, color }) => (<Entypo name="home" size={24} color={focused ? color : '#686D76'} />),
            }} />
            <Tabs.Screen name='Ticket' component={Ticket} options={{
                tabBarIcon: ({ focused, color }) => (<Entypo name="ticket" size={24} color={focused ? color : '#686D76'} />),
            }} />
            <Tabs.Screen name='Event' component={Event} options={{
                tabBarIcon: ({ focused, color }) => (<AntDesign name="star" size={24} color={focused ? color : '#686D76'} />),
            }} />
            <Tabs.Screen name='Profile' component={Profile} options={{
                tabBarIcon: ({ focused, color }) => (<FontAwesome name="user" size={24} color={focused ? color : '#686D76'} />),
            }} />
        </Tabs.Navigator>
    )
}

export default MyTabs;