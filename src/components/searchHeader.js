import React from 'react';
import Feather from 'react-native-vector-icons/Feather'
import {SafeAreaView, StyleSheet, TextInput, View } from 'react-native'; 


const SearchHeader = ({
  search,
  setSearch,
}) => {
  return (
    <View style={{backgroundColor: '#d9dbda',width:'90%',alignSelf:'center',marginBottom:10,
      borderRadius:15,
    }}>
      <View
        style={styles.container}>
        <Feather style={{marginHorizontal:10,flex:.1}} name="search" size={30} color='black' />
        <TextInput
          style={styles.input}
          placeholder="Search Store"
          value={search}
          onChangeText={setSearch}
          placeholderTextColor={'black'}
        />
      </View>
    </View>
  );
};
const styles=StyleSheet.create({
    container:{
         margin: 5,
         padding: 5,
        flexDirection: 'row',
        alignItems: 'center',
    },
    input:{
        height: 45,
        flex:.9,
        marginRight: 10,
        color:'black',
        fontSize:18
    }
})

export default SearchHeader;