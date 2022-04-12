import React, { useEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Zocial from 'react-native-vector-icons/Zocial';
import Ionicons from 'react-native-vector-icons/Ionicons'
import SubHome from './subHome';
import Search from './search';
import More from './more';
import Cover from '../screens/cover/cover';
import Start from '../screens/cover/start';
import MyCartScreen from '../screens/carts/myCart';
import FavScreen from '../screens/carts/fav';
import { useDispatch } from 'react-redux';
import { getUser } from '../store/auth/actions';
import Favourite from './favourites';

const Home=()=>{
    const Tab=createBottomTabNavigator();
    const dispatch=useDispatch()
    useEffect(()=>{
      dispatch(getUser())
    },[])
    return(
            <Tab.Navigator screenOptions={({route})=>({
             
              //headerShown:false,
               tabBarLabelStyle:{
                 fontSize:10
               },
                tabBarActiveTintColor: '#28994a',
                tabBarInactiveTintColor: 'grey',
            })}
             >
                <Tab.Screen options={{headerShown:false,
                  tabBarIcon: ({ focused, color, size }) => <Ionicons 
                  name={focused? 'home': 'home-outline'} 
                  size={size} color={color} />
                }}
                 name='Home' 
                component={SubHome} />
                <Tab.Screen options={{headerShown:false,
                    tabBarIcon: ({ focused, color, size }) => <MaterialCommunityIcons
                    name={focused? 'store-search': 'store-search-outline'}
                    size={size} color={color} />
                  }}
                  name='Explore' 
                  component={Search} />
                <Tab.Screen name='My Carts'
                 component={MyCartScreen}
                  options={{
                    headerTitleAlign:'center',
                    headerTintColor:'green',
                    tabBarIcon: ({ focused, color, size }) =><Zocial
                  name={'cart'} 
                  size={size} color={color} />
                }}
                  />
                  <Tab.Screen name='Fav'
                 component={Favourite}
                  options={{
                    headerShown:false,
                    headerTitleAlign:'center',
                    headerTintColor:'green',
                    tabBarIcon: ({ focused, color, size }) =><MaterialIcons 
                  name={focused?'favorite':'favorite-border'} 
                  size={size} color={color} />
                }}
                  />
                   <Tab.Screen name='More'
                 component={More}
                  options={{
                    headerShown:false,
                  tabBarIcon: ({ focused, color, size }) =><Feather
                   name={'more-vertical'}
                   size={size} color={color} />
                }}
                  />
            </Tab.Navigator>
    )
}
export default Home;