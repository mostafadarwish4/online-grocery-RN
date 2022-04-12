import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import CategoryDetails from '../screens/category/category'
import DetailsScreen from '../screens/details/Details'
import SearchScreen from '../screens/search/search'

const Stack=createNativeStackNavigator()

const Search=()=>{
    return (
        <Stack.Navigator screenOptions={{headerTitleAlign:'center',}}>
            <Stack.Screen name='search' 
            component={SearchScreen} 
            options={{headerShown:false}} />
            <Stack.Screen name='category' 
             component={CategoryDetails}
             options={{headerTintColor:'#3f8a4e',headerTransparent:true,headerStyle:{
                 backgroundColor:'#00000000'
             }}}
             />
            <Stack.Screen name='details' component={DetailsScreen}options={{headerShown:false}} />
        </Stack.Navigator>
    )
}

export default Search;