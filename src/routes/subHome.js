import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import HomeScreen from '../screens/Home/HomeScreen'
import CategoryDetails from '../screens/category/category'
import DetailsScreen from '../screens/details/Details'

const Stack=createNativeStackNavigator()

const SubHome=()=>{
    return (
        <Stack.Navigator screenOptions={{headerTitleAlign:'center',headerShown:false}}>
            <Stack.Screen name='1' component={HomeScreen} />
            <Stack.Screen name='2' component={CategoryDetails}
             options={{
                 headerTintColor:'#3f8a4e',
                headerTransparent:true,
                headerShown:true,
                headerTitleStyle:{
                    fontWeight:'bold'
                },
                headerStyle:{
                    backgroundColor:'#00000000',
             }
            }}
             />
            <Stack.Screen name='3' component={DetailsScreen} />
        </Stack.Navigator>
    )
}

export default SubHome