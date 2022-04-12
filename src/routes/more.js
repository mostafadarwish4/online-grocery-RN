import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import ProfileScreen from '../screens/Profile/ProfileScreen'
import LocationScreen from '../screens/location/location'

const Stack=createNativeStackNavigator()

const More=()=>{
    return (
        <Stack.Navigator screenOptions={{headerTitleAlign:'center'}}>
            <Stack.Screen name='profile' options={{headerShown:false}} component={ProfileScreen} />
            <Stack.Screen name='location' component={LocationScreen} />
            {/* <Stack.Screen name='3' component={DetailsScreen} /> */}
        </Stack.Navigator>
    )
}

export default More