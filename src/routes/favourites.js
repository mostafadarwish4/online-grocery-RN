import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import FavScreen from '../screens/carts/fav'
import DetailsScreen from '../screens/details/Details'

const Stack=createNativeStackNavigator()

const Favourite=()=>{
    return (
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name='Favorites' component={FavScreen} 
            options={{
                headerShown:true,
                headerTitleAlign:'center',
                    headerTintColor:'green',}} />
            <Stack.Screen name='detail' component={DetailsScreen}  />
        </Stack.Navigator>
    )
}

export default Favourite;