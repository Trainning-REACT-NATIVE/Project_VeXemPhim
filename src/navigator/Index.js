import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Tabs from './Tabs';
import SignIn from '../screen/SignIn';
import Register from '../screen/Register';
import Categories from '../screen/Categories';
import Forgotpassword from '../screen/Forgotpassword';
import MovieDetail from '../screen/MovieDetail';
import Search from '../screen/Search';
import FilmWithKind from '../screen/FilmWithKind';
import CheckinTicket from '../screen/CheckinTicket';
import ChooseCinema from '../screen/ChooseCinema';
import ChooseSeats from '../screen/ChooseSeats';
import ChooseCombo from '../screen/ChooseCombo';
import CodeRegister from '../screen/CodeRegister';

const Stack = createStackNavigator();
export default function Root() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='SingIn'>
                <Stack.Screen name={'SingIn'} component={SignIn} />
                <Stack.Screen name={'Register'} component={Register} />
                <Stack.Screen name={'Tabs'} component={Tabs} />
                <Stack.Screen name={'Categories'} component={Categories} />
                <Stack.Screen name={'Forgotpassword'} component={Forgotpassword} />
                <Stack.Screen name={'MovieDetail'} component={MovieDetail} />
                <Stack.Screen name={'Search'} component={Search} />
                <Stack.Screen name={'FilmWithKind'} component={FilmWithKind} />
                <Stack.Screen name={'CheckinTicket'} component={CheckinTicket} />
                <Stack.Screen name={'ChooseCinema'} component={ChooseCinema} />
                <Stack.Screen name={'ChooseSeats'} component={ChooseSeats} />
                <Stack.Screen name={'ChooseCombo'} component={ChooseCombo} />
                <Stack.Screen name={'CodeRegister'} component={CodeRegister} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}